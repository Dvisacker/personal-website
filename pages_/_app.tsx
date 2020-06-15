import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "evergreen-ui";
import { StateProvider, appReducer, initialState } from "../context";
import BackgroundVideo from "../components/backgroundVideo";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider value={theme}>
            <StateProvider initialState={initialState} reducer={appReducer}>
                <>
                    <BackgroundVideo />
                    <Component {...pageProps} />
                </>
            </StateProvider>
        </ThemeProvider>
    );
}

export default App;
