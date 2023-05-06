import React from "react";
import Alert from "react-bootstrap/Alert";

export default function AlertPromt(props) {
  return (
    props.alert.msg &&
      <Alert variant={props.alert.typ}>
        <strong>Success!</strong> {props.alert.msg}
      </Alert>
  );
}
