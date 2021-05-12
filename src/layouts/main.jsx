import React from 'react';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';

export const LayoutMain = ({children}) => {
    
   

    return (
        <MuiThemeProvider>
            <CssBaseline/>

            <main>
            {children}
            </main>
        </MuiThemeProvider>
    )
}
