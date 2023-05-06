import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

export const About = () => {
  return (
    <Container>
        <h2 className="mt-3 mb-3">About Text-Utility</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4>Welcome to the Text-Utility Tool</h4></Accordion.Header>
        <Accordion.Body>
          A very handy online text tool where you can change between lower case
          and upper case letters, where you can capitalize, uncapitalize,
          convert to mix case and transform your text. Explore the options
          below:
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h6>Sentence Case</h6></Accordion.Header>
        <Accordion.Body>
          The sentence case converter will allow you to paste any text you’d
          like, and it will automatically transform it to a fully formed
          structured sentence. It works by capitalizing the very first letter in
          each sentence, and will then go on to transform the rest of the text
          into lowercase as well as converting i’s into I’s. Every letter after
          a full stop will get converted into an upper case letter. Note: it
          won’t, however, capitalize names or places. This is an example of
          sentence case.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h6>Lower Case</h6></Accordion.Header>
        <Accordion.Body>
          If you are wondering how to uncapitalize text, this is exactly what
          the lower case text converter will allow you to do - it transforms all
          the letters in your text into lowercase letters. Simply copy the text
          that you need generating into lower case and paste the text into the
          box above and select the ‘lower case’ tab. this is an example of lower
          case.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h6>Upper Case</h6></Accordion.Header>
        <Accordion.Body>
          The upper case transformer will take any text that you have and will
          generate all the letters into upper case ones. It will essentially
          make all lower case letters into CAPITALS (as well as keep upper case
          letters as upper case letters). To do this, you simply have to select
          the text that you need changing and pasting into the box above and
          then select the UPPER CASE tab. THIS IS AN EXAMPLE OF UPPER CASE.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h6>Pascal Case</h6></Accordion.Header>
        <Accordion.Body>
          The Pascal case converter will automatically convert the starting
          letter of every word into an upper case and will leave the remaining
          letters as lower case ones. Simply copy the content that you will like
          to generate into this format, then paste into the box form above and
          select the Pascal Case tab. This Is An Example Of Pascal Case.
          Case.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h6>Copy</h6></Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><h6>Cut</h6></Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><h6>Paste</h6></Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><h6>Remove Extra Spaces</h6></Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
};
