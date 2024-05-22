import { classNames } from 'shared/lib/classNames/classNames';
import { SVGProps, VFC } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string
  Svg: VFC<SVGProps<SVGSVGElement>>
}

const Icon = ({ className, Svg }: IconProps) => (
  <Svg className={classNames(styles.icon, {}, [className])} />
);

export default Icon;
