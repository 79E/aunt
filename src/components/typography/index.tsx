import React from 'react';
import './styles/index.less';
import _Typography from './typography';

import { TypographyTextProps, TypographyTitleProps, TypographyLinkProps } from './types';

const Text = (props: TypographyTextProps) => <Typography renderType="text" {...props} />;
const Title = (props: TypographyTitleProps) => <Typography renderType="title" {...props} />;
const Link = (props: TypographyLinkProps) => <Typography renderType="link" {...props} />;

const Typography = Object.assign(_Typography, { Text, Title, Link });

export type {
    TypographyProps,
    TypographySize,
    TypographyType,
    TypographyTitleLevel,
} from './types';

export {
    Typography 
};
export default Typography;





