#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const argvs = process.argv;
const names = argvs.splice(2);

const strUpperCase = str => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

const getComponentsPath = (absolute, ...args) => {
  let dirname = path.resolve(__dirname, '../src/components', ...args);
  if (!absolute) {
    dirname = path.join('./src/components', ...args);
  }
  return dirname;
};

const createComponentTemplate = ({ name, upperCaseName }) => `\
import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import type { ${upperCaseName}Props } from './types';

export const ${upperCaseName}: FunctionComponent<${upperCaseName}Props> = props => {
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('${name}', prefix);

    const varClasses = useMemo(() => {}, []);
    const varStyles = useMemo(() => {}, []);

    return <div></div>;
};
`;

const createComponentLessTemplate = ({ name }) => `\
@class-prefix: ~'aunt';

.@{class-prefix}-${name} {

}
`;

const createTypesTemplate = ({ upperCaseName }) => `\
import React from 'react';
import type { BaseTypeProps } from '../../utils';

export interface ${upperCaseName}Props extends BaseTypeProps {

}
`;

const createTestTemplate = () => `\
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('< />', () => {});
`;

const createIndexTemplate = ({ name, upperCaseName }) => `\
import './styles/index.less';
import { ${upperCaseName} } from './${name}';

export type { ${upperCaseName}Props } from './types';

export { ${upperCaseName} };
export default ${upperCaseName};
`;

const createREADMETemplate = ({ upperCaseName }) => `\
# ${upperCaseName}

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍

## 使用

\`\`\`tsx
import { ${upperCaseName} } from 'aunt';
\`\`\`

### 基本用法
`;

const createDemosTemplate = () => `\
import React from 'react';
import { DemoBlock } from 'demos';
import './index.less';

function Demo() {
  return <div className='demo'>
    <DemoBlock title="基础用法">
      {/* 放入组件 */}
    </DemoBlock>
  </div>;
}

export default Demo;
`;

const createDemosLessTemplate = () => `\
.demo {

}
`;

const createContents = async () => {
  for (const name of names) {
    await mkdirsSync(getComponentsPath(false, name, 'demos'));
    await mkdirsSync(getComponentsPath(false, name, 'styles'));
    await mkdirsSync(getComponentsPath(false, name, 'tests'));
  }
};

const createFiles = async () => {
  for (const name of names) {
    const upperCaseName = strUpperCase(name);
    await fs.writeFile(
      getComponentsPath(true, name, 'index.ts'),
      createIndexTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'types.ts'),
      createTypesTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'tests', 'index.test.tsx'),
      createTestTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'README.md'),
      createREADMETemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'demos', 'demo.tsx'),
      createDemosTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'demos', 'index.less'),
      createDemosLessTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, 'styles', 'index.less'),
      createComponentLessTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
    await fs.writeFile(
      getComponentsPath(true, name, `${name}.tsx`),
      createComponentTemplate({ name, upperCaseName }),
      {},
      () => {}
    );
  }
};

(async () => {
  await createContents();
  await createFiles();
  console.log('创建模版组件成功～');
})();
