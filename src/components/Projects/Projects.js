import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import weatherApp from "../../Assets/Projects/WeatherApp.png";
import foodShop from "../../Assets/Projects/Food.png";
import virtualMouse from "../../Assets/Projects/virtualMouse.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              imgWidth="300"
              imgHeight="200"
              isBlog={false}
              title="Complete E-commerse website"
              description="A comprehensive e-commerce website built with modern web technologies, featuring product listings, shopping cart, and secure checkout."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              imgWidth="300"
              imgHeight="200"
              isBlog={false}
              title="Weather App"
              description="WeatherWise is a sleek and intuitive weather app that provides real-time weather updates, forecasts, and alerts for locations worldwide. Whether you're planning your day, a weekend trip, or just need to stay ahead of unpredictable weather, WeatherWise has you covered."
              ghLink="https://github.com/Abinash2985/Weather_app"
              demoLink="https://abinash-weather-app.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodShop}
              imgWidth="300"
              imgHeight="200"
              isBlog={false}
              title="Food-Shop"
              description="An online food shop application that allows users to browse and purchase a variety of food items, with features like search, filter, and secure payment."
              ghLink="https://github.com/Abinash2985/Food_Shop"
              demoLink="https://abinash-food-shop.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualMouse}
              imgWidth="300"
              imgHeight="200"
              isBlog={false}
              title="Hand Recognition and Mouse Hover Detection"
              description="A project that uses computer vision techniques to recognize hand gestures and detect mouse hover actions, enhancing user interaction with the system."
              ghLink="https://github.com/Abinash2985/Virtual-Mouse-Hover"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
