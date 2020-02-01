import React from 'react';
import { useTranslation } from '@library/i18next';
import { Button, Typography } from '@material-ui/core';
import { Layout } from '@library/theme';

const Home = () => {
  const { t, i18n } = useTranslation('home');

  return (
    <Layout>
      <Typography variant="body1" component="p">
        Environment variable:
        {process.env.ENVIRONMENT}
      </Typography>
      <br />
      <Typography variant="body1" component="p">
        {t('welcome-page.title', { framework: 'micro-frontend' })}
      </Typography>
      <br />
      <Typography variant="body1" component="p">
        {t('welcome-page.change language')}:
        <Button id="change-language-pt" color="secondary" onClick={() => i18n.changeLanguage('pt')}>
          PT
        </Button>
        <Button id="change-language-en" color="secondary" onClick={() => i18n.changeLanguage('en')}>
          EN
        </Button>
      </Typography>
    </Layout>
  );
};

export default Home;
