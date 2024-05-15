import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];
const CountrySelect = (
  {
    className,
    value,
    readonly,
    onChange,
  }: CountrySelectProps,
) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
    />
  );
};

export default CountrySelect;
