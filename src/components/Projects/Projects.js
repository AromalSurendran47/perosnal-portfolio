import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import baker from "../../Assets/Projects/a2.png";
import aromal from "../../Assets/Projects/a1.png";
import suicide from "../../Assets/Projects/suicide.png";
import pedro from "../../Assets/Projects/a3.png";

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
              imgPath={aromal}
              isBlog={false}
              title="Personal Portfolio"
              description="Iam a  passionate Full Stack Developer with a strong focus on building responsive, dynamic, and user-friendly web applications. With experience in both front-end and back-end technologies"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://devilm4ster.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baker}
              isBlog={false}
              title="Delight Bakers"
              description="Delight Baker is a premium homegrown bakery dedicated to crafting fresh, delicious, and beautifully designed baked goods."
              ghLink=""
              demoLink="https://delightbaker.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pedro}
              isBlog={false}
              title="Online Medical  Device"
              description="A system of health centers that provide an array of health services from a team of board-certified providers. As your Patient Centered Medical Home."
              ghLink="http://35.154.208.64:3002/"
              demoLink="https://rankontop.in/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
