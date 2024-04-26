import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('PAGE.MAIN_TITLE')}
      <Input
        value={value}
        onChange={onChange}
        placeholder="Введите текст"
      />
    </div>
  );
};
export default MainPage;
