const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
// 删除文件
const del = require('del');
// 转js
const babel = require('gulp-babel');
// ts转js
const ts = require('gulp-typescript');
// css
const postcss = require('gulp-postcss');
const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 });
const replace = require('gulp-replace');
// 操作文件内容
const through = require('through2');

const tsconfig = require('./tsconfig.json');

// 先清除 lib目录
function clean() {
    return del('./lib/**');
}

// 打包js 从src目录的ts -> lib目录下的es
function buildES() {
    const tsProject = ts({
      ...tsconfig.compilerOptions,
      module: 'ES6',
    });
    return gulp
      .src(['./src/**/*.{ts,tsx}'], {
        ignore: ['**/demos/**/*', '**/tests/**/*'],
      })
      .pipe(tsProject)
      .pipe(
        babel({
          'plugins': [babelTransformLessToCss()],
        })
      )
      .pipe(gulp.dest('lib/es/'));
}

// 直接将es 转 cjs
function buildCJS() {
    return gulp
      .src(['lib/es/**/*.js'])
      .pipe(
        babel({
          'plugins': ['@babel/plugin-transform-modules-commonjs'],
        })
      )
      .pipe(gulp.dest('lib/cjs/'));
}

// less -> css
function babelTransformLessToCss () {
    return {
      visitor: {
        ImportDeclaration(path, source) {
          if (path.node.source.value.endsWith('.less')) {
            path.node.source.value = path.node.source.value.replace(
              /\.less$/,
              '.css'
            );
          }
        },
      },
    };
}

// 打包 ts tsx 
function buildDeclaration() {
    const tsProject = ts({
      ...tsconfig.compilerOptions,
      module: 'ES6',
      declaration: true,
      emitDeclarationOnly: true,
    });
    return gulp
      .src(['src/**/*.{ts,tsx}'], {
        ignore: ['**/demos/**/*', '**/tests/**/*'],
      })
      .pipe(tsProject)
      .pipe(gulp.dest('lib/es/'))
      .pipe(gulp.dest('lib/cjs/'));
}

// 将所有的 less -> css
function buildStyle() {
    return gulp
        .src(['./src/**/*.less'], {
            base: './src/',
            ignore: ['**/demos/**/*', '**/tests/**/*', '*.patch.less'],
        })
        .pipe(
            less({
                paths: [path.join(__dirname, 'src')],
                relativeUrls: true,
            })
        )
        .pipe(gulp.dest('./lib/es'))
        .pipe(gulp.dest('./lib/cjs'));
}

// 拷贝 所有静态文件过去
function copyAssets() {
    return gulp
      .src('./src/assets/**/*')
      .pipe(gulp.dest('lib/assets'))
      .pipe(gulp.dest('lib/es/assets'))
      .pipe(gulp.dest('lib/cjs/assets'));
}

// 拷贝介绍 README
function copyMetaFiles() {
    return gulp.src(['./README.md', './LICENSE']).pipe(gulp.dest('./lib/'));
}

// package.json文件进行整理并迁移
function generatePackageJSON() {
    return gulp
      .src('./package.json')
      .pipe(
        through.obj((file, enc, cb) => {
          const rawJSON = file.contents.toString();
          // 序列化
          const parsed = JSON.parse(rawJSON); 
          delete parsed.scripts;
          delete parsed.devDependencies;
          delete parsed.publishConfig;
          delete parsed.files;
          delete parsed.resolutions;
          delete parsed.packageManager;
          const stringified = JSON.stringify(parsed, null, 2);
          file.contents = Buffer.from(stringified);
          cb(null, file);
        })
      )
      .pipe(gulp.dest('./lib/'));
}

// 拷贝2倍
function create2xFolder() {
    return gulp
      .src('./lib/**', {
        base: './lib/',
        ignore: ['./lib/2x/demos/**/*'],
      })
      .pipe(gulp.dest('./lib/2x/'));
}
  
function build2xCSS() {
    return gulp
      .src('./lib/2x/**/*.css', {
        base: './lib/2x/',
      })
      .pipe(postcss([pxMultiplePlugin]))
      .pipe(replace('--aunt-hd: 1;', '--aunt-hd: 2;'))
      .pipe(
        gulp.dest('./lib/2x', {
          overwrite: true,
        })
      );
}


exports.default = gulp.series(
    clean,
    buildES,
    buildCJS,
    gulp.parallel(buildDeclaration, buildStyle),
    copyAssets,
    copyMetaFiles,
    generatePackageJSON,
    gulp.series(create2xFolder, build2xCSS),
);