import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import './i18n';
import * as serviceWorker from './serviceWorker';
import useDefaultLangBrowser from './components/hooks/useDefaultLangBrowser';
import i18next from 'i18next';

const lang = useDefaultLangBrowser();
i18next.changeLanguage(lang).catch(e => console.log(e));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
