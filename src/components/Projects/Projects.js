import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Database from "../../Assets/Projects/Database.png";
import food from "../../Assets/Projects/food.jpeg";
import Flutter from "../../Assets/Projects/Flutter.png";

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
              imgPath={food}
              isBlog={false}
              title="Food preservation system"
              description="In CPIT-250, I have designed an app that help to reduce food waste in a way to donate it for needers. You can sign in the app wether your a needer or a donator."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flutter}
              isBlog={false}
              title="Cats app"
              description="I used flutter and dart to devolep my first app, was about Cats and its image. Then you can see every cat in details, like age, weight and etc."
              ghLink="https://github.com/Abdulrahman-Barashid/MyCats"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Database}
              isBlog={false}
              title="Database"
              description="In CPIT-240, With the help of my group we tackled a project focused on developing a database for a furniture shop. This project offered valuable insights into database management and design principles. The database we designed aimed to streamline the furniture shop's operations, covering inventory management,
               customer data, sales transactions, and supplier information. By structuring the database effectively, we ensured efficient tracking of inventory, monitoring of sales, and overall operational efficiency. we carefully crafted the database schema to establish relationships between different entities like products, customers, orders, and suppliers.
                This relational model facilitated seamless data retrieval and manipulation. Throughout the development process, I applied normalization techniques to optimize the database structure and enhance data integrity. I also incorporated security measures to protect sensitive information. Overall, this project provided practical experience in designing and managing real-world databases,
                 enhancing my understanding of database concepts and their application in business settings."             
            />
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
