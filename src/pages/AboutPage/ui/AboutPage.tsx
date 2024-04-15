import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('PAGE.ABOUT_TITLE')}
    </div>
  );
};

export default AboutPage;
