import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Component/ProyectCards";
import Particle from "../Particle";
import Hosp from "../assets/Hosp.png";
import Cis from "../assets/Cis.png";
import TecI from "../assets/TecI.png";
import Eugen from "../assets/Eugen.png";

function Proyects () {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis ultimos <strong className="purple">Proyectos</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hosp}
              isBlog={false}
              title="Proyecto Hospital"
              description="Pagina web de un hospital, con un sistema de turnos y una seccion de contacto. Realizado con React.js, Node.js, Express.js y MongoDB."
              ghLink="https://github.com/Enzogz98/HospSanPablo"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TecI}
              isBlog={false}
              title="Tec Itali"
              description="App web para analisis y diagnostico de hebra capilar y cuero cabelludo, realizado en react.js "
              ghLink="https://github.com/francocor/AppWebDiagnosticoCapilar"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eugen}
              isBlog={false}
              title="Pagina web"
              description="Pagina web para una peluqueria, con sistema de turnos, realizado en react.js"
              ghLink="https://github.com/francocor/PaginaWebPeluqueria"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cis}
              isBlog={false}
              title="Cispol"
              description="Pagina web para una empresa encargada de vender cursos sobre politica, realizada en react.js, node.js y MySQL"
              ghLink="https://github.com/francocor/Cispol"
              //demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Proyects