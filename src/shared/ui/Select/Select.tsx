import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>{
  className?:string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
}

const Select = memo((
  {
    className,
    label,
    options,
    value,
    onChange,
    ...props
  }: SelectProps,
) => {
  const optionList = useMemo(() => options?.map((prop) => (
    <option
      className={styles.option}
      value={prop.value}
      key={prop.value}
    >
      {prop.content}
    </option>
  )), [options]);
  const mods: Mods = {

  };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      {!!label && (
        <span className={styles.label}>
          {`${label}>`}
        </span>
      ) }
      <select
        {...props}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});

export default Select;
