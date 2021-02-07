import React from 'react'
import { CssBaseline } from '@material-ui/core';
import  AppBar  from "../layout/AppBar"
import Sacnner from "../layout/Sacnner"

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar />

            <Sacnner />
        </React.Fragment>
    )
}

export default Home
