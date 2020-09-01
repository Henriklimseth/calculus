import React from 'react';
import { createUseStyles } from 'react-jss';
import { Differentiate } from './Differentiate/Differentiate';
import { Header } from './Header/Header';

export const App = () => {
  const { app } = useStyles();
  return (
    <div className={app}>
      <Header />
      <Differentiate />
    </div>
  );
};

const useStyles = createUseStyles({
  app: {
    textAlign: 'center'
  }
});
