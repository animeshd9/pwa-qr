import React,{ useState } from 'react'
import QrReader from 'react-qr-scanner'
import PrimarySearchAppBar from '../layout/appBar'

import { makeStyles } from '@material-ui/core/styles';
import  Card  from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CenterFocusStrong } from '@material-ui/icons';
import {app,db} from '../auth/base';
import firebase from "firebase";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop:"50px",
      alignContent:"center",
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   fontSize: 14,
    // },
    // pos: {
    //   marginBottom: 12,
    // },
  });


const addCheckInToDB = (details) => {
    console.log(details)
    db.collection("checkedin").add(details);
}

export default function Scan (){

    const classes = useStyles();
 
    const [result, setResult]=useState('')
    const [delay, setDelay]=useState(100)

    const handleScan=(data)=>{ 
        if (data){
            const user = firebase.auth().currentUser;
            if(user){
                console.log(user);
                const x =  JSON.parse(data);
                setResult( data)
                x.email = user.email;
                addCheckInToDB(x);
            }
            else{
                console.log("cant find user");
            }
        }
    }

    const handleError=err=> console.error(err)

    const previewStyle={
        height: 240,
        width: 350,
        marginLeft:10,
        marginRight:25,
        marginTop:25,
    
    }
    return (
        <div>
            <PrimarySearchAppBar/>
            <Card className={classes.root} variant="outlined">
                 <CardContent>
                    <QrReader
                    delay={delay}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                    />
                <p>{result}</p>
                </CardContent>
            </Card>
                
        </div>
    )
}

// export default Scan