import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Textform = ({onAlert}) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    onAlert("Changed to uppercase", "success")
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    onAlert("Changed to lowercase", "success")
  };

  const handlePascal = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    onAlert("Changed to pascalcase", "success")
  };

  const handleCopy = () => {
    let text = document.getElementById("text-area");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    onAlert("Content Copied", "success")
  };

  const handleCut = () => {
    let text = document.getElementById("text-area");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    setText("");
    onAlert("Contet cleared", "success")
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then(
      (cliptext) =>
        (document.getElementById("clipboard-paste").innerText = cliptext),
      (err) => console.log(err)
    );
    onAlert("Pasted to clipboard", "success")
  };

  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    onAlert("Extraspaces Removed", "success")
  };

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Text Area</h2>
      <Form.Control
        as="textarea"
        id="text-area"
        rows={5}
        className="mb-3"
        placeholder="Enter text here..."
        value={text}
        onChange={handleChange}
      />
      <Button className="me-2" onClick={handleUpper} variant="primary">
        UPPER CASE
      </Button>
      <Button className="me-2" onClick={handleLower} variant="secondary">
        To Lowercase
      </Button>
      <Button className="me-2" onClick={handlePascal} variant="success">
        To PascalCase
      </Button>
      <Button className="me-2" onClick={handleCopy} variant="warning">
        Copy
      </Button>
      <Button className="me-2" onClick={handleCut} variant="danger">
        Cut
      </Button>
      <Button className="me-2" onClick={handlePaste} variant="info">
        Paste
      </Button>
      <Button className="me-2" onClick={handleExtraspace} variant="dark">
        Remove Extraspace
      </Button>
      <h2 className="mt-3 mb-3">Text Preview</h2>
      <Form.Control
        as="textarea"
        rows={5}
        className="mb-3"
        placeholder="Enter text here..."
        value={text}
      />
      <h2 className="mt-3 mb-3">Clipboard</h2>
      <Form.Control
        as="textarea"
        id="clipboard-paste"
        rows={5}
        className="mb-3"
        placeholder="Enter text here..."
      />
      <h2>Text Summary</h2>
      <p>
        <b>{text.split(/\w+/).length - 1}</b> words and <b>{text.length}</b>{" "}
        characters
      </p>
      <p>
        <b>{0.008 * (text.split(/\w+/).length - 1)}</b> mins to read
      </p>
    </div>
  );
};
