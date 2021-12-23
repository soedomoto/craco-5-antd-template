import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
  theme: {
    primaryColor: '#FF00F4',
  },
});

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
