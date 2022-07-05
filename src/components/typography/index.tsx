import React from 'react';
import './styles/index.less'
import { Typography } from './typography'

import { TypographyTextProps, TypographyTitleProps, TypographyLinkProps } from './types';

const Text = (props: TypographyTextProps) => <Typography renderType="text" {...props} />;
const Title = (props: TypographyTitleProps) => <Typography renderType="title" {...props} />;
const Link = (props: TypographyLinkProps) => <Typography renderType="link" {...props} />;

const TypographyNamespace = Object.assign(Typography, { Text, Title, Link });

export { TypographyNamespace as Typography };

export type {
    TypographyProps,
    TypographySize,
    TypographyType,
    TypographyTitleLevel,
} from './types';






