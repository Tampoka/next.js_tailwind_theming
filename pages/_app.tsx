import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeContextProvider} from "@/Themes/themeContext";
import Layout from "../src/components/layout/layout";
import { appWithTranslation } from 'next-i18next';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}

export default appWithTranslation(MyApp);