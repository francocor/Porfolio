import {Container, Row, Col} from 'react-bootstrap'
import myImg from "../assets/avatar.svg"
import Tilt from "react-parallax-tilt"
import {
  AiFillGithub,
} from "react-icons/ai"
import {
  FaLinkedinIn,
} from "react-icons/fa"

function Home2() {
  return (
    <Container fluid className="home-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hola <span className="purple">como estas? </span> me presento
            </h1>
            <p className="home-about-body">
              Siempre me apasionó el mundo de la computación y, al descubrir la programación, me adentré aún más en el mundo IT.
              <br />
              <br />Soy programador fullstack, pero me apasiona más el 
              <b className="purple"> Desarrollo Frontend</b>, donde destaco en lenguajes como
              <i>
                <b className="purple"> Javascript (React). </b>
              </i>
              <br />
              <br />Me interesa especialmente el mundo del diseño, la maquetación y la creación de
              <i>
                <b className="purple"> tecnologías y productos web.</b>
              </i>
              
              <br />
              <br />Cuando es necesario, aplico mis conocimientos para crear y desarrollar productos con <b className="purple">Node.js</b>,
              <i>
                <b className="purple"> MySQL</b>
              </i>
              &nbsp;y frameworks modernos como
              <i>
                <b className="purple"> React.js.</b>
              </i>
              <br />
              <br />Además, aplico mis conocimientos en desarrollo UX/UI, área en la que actualmente sigo capacitándome para
              mejorar en la creación de productos innovadores y funcionales.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentrame en</h1>
            <p>
                Siéntete libre de <span className="purple">contactar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/francocor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/franco-cornejo-3b3aaa209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2