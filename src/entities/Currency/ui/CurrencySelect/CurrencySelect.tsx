import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];
const CurrencySelect = (
  {
    className,
    value,
    readonly,
    onChange,
  }: CurrencySelectProps,
) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
    />
  );
};

export default CurrencySelect;
