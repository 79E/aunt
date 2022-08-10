import './styles/index.less';
import _Card, { CardHeader, CardBody, CardFooter, CardCover } from './card';

export type {
    CardProps,
    CardBodyProps,
    CardCoverProps,
    CardFooterProps,
    CardHeaderProps
} from './types';

const Card = Object.assign(_Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
    Cover: CardCover,
});

export {
    Card
};
export default Card;

