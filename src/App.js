import React, { Component } from 'react';

import { createGlobalStyle } from 'styled-components';

import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { LayoutContextProvider } from './LayoutContext';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        font-size: 16px;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'PT Serif', sans-serif;
        background: #eeeef0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .app-wrapper {
        height: 100%;
    }
`;

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle/>
                <LayoutContextProvider>
                    <Nav/>
                    <Main/>
                </LayoutContextProvider>
            </React.Fragment>
        );
    }
}

export default App;
