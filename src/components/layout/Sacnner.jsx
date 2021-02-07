import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//components
import Popup from "./popup";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "5rem",
  },
});

const Sacnner = () => {
  const classes = useStyles();
  const [validate, setValidate] = useState("false");
  const [delay, setDelay] = useState(100);

  const handleScan = (data) => {
    if (data) {
      setValidate(data);
      console.log(data);
    }
  };

  const handleError = (err) => console.error(err);

  const previewStyle = {
    height: 300,
    width: 250,
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <Popup prop={validate} onScan={() => setValidate("true")} />
    </Grid>
  );
};

export default Sacnner;
