import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeContextProvider} from "../src/Themes/themeContext";
import Layout from "../src/components/layout/layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}

export default MyApp;