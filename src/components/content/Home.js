
import React from 'react'
import { CssBaseline } from '@material-ui/core';
import  AppBar  from "../layout/AppBar"
import Sacnner from "../layout/Sacnner"
import {app,db} from '../auth/base';
import firebase from "firebase";
// import Popup from "../layout/popup"


const addCheckInToDB = (details) => {
    console.log(details)
    db.collection("checkedin").add(details);
}

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar />
            <Sacnner />
            {/* <Popup /> */}
        </React.Fragment>
    )
}

export default Home
