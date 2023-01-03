import 'react-i18next';
import common from '../public/locales/ja/common.json';
import seo from '../public/locales/ja/seo.json';
import login from '../public/locales/ja/login.json';
import navbar from '../public/locales/ja/navbar.json';
import about from '../public/locales/ja/about.json';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: {
            common: typeof common;
            seo: typeof seo;
            login: typeof login;
            'navbar': typeof navbar;
            'about': typeof about;
        };
    }
}