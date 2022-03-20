import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Form } from "./form/Form";

const PredText = () => {
  const [data, setData] = useState([]);

  const [addtext, setAddtext] = useState("");
  const [result, setResult] = useState("Nothing to");

  const handleFormChange = (inputvalue) => {
    setAddtext(inputvalue);
    console.log(addtext);
  };

  useEffect(() => {
    fetch("http://localhost:5000/home", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((res) => setData(res))
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  });

  const handleFormSubmit = () => {
    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: addtext,
    })
      .then((res) => res.text())
      .then((mes) => setResult(mes));
    console.log(result);
  };

  return (
    <>
      <div className="formdiv">
        <h1 className="formheading">{data}</h1>

        <Form
          userInput={addtext}
          onFormChange={handleFormChange}
          onformSubmit={handleFormSubmit}
        />

        <h1 className="formheading">{result}</h1>
      </div>
    </>
  );
};

export default PredText;
