import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineLink } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1nHlKWfQVqn7VQ7BCMVRmvlAEdwJuk6bw/view?usp=drive_link"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineLink />
            &nbsp;View Resume
          </Button>
        </Row>
        
      </Container>
    </div>
  );
}

export default ResumeNew;
