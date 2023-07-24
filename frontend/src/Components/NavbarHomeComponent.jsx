import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    height: 90,
    alignContent: 'center',
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
    color : "black",
}));

function NavbarHomeComponent() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <MuiTypography className="pyquiz-text">
                        {'PyQuiz'}
                    </MuiTypography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavbarHomeComponent;