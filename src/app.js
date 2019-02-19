import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
  <div>
    <AppRouter />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
