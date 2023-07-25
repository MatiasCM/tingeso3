import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import Cronometro from "../Utils/Cronometro";
import py from '../Public/py.png';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    height: 90,

}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    fontWeightMedium: 700,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
    '& .pyquiz-text': {
        fontSize: 30,
        fontWeight: 'bold',
    },
    backgroundColor: "#91C8E4",
    color: "black",
}));

const Spacer = styled('div')({
    flex: 1,
});

function NavbarHomeComponent() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar >
                    <img src={py} alt="PyQuiz Logo" style={{ marginRight: 10, height: 60 }} />
                    <MuiTypography className="pyquiz-text">
                        <b>{'PyQuiz'}</b>
                    </MuiTypography>
                    <Spacer />
                    <Cronometro />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavbarHomeComponent;


/* function NavbarComponent() {
    return (
        <>
            <NavStyle>
                <header class="header">
                    <div class="logo">
                        <h1>PyQuiz</h1>
                    </div>
                    <nav></nav>
                    <div class="clock">
                        <Cronometro/>
                        <h1></h1>
                    </div>
                </header>
            </NavStyle>
        </>
    );
} */