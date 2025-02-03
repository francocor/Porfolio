import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard () {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Soy de <span className="purple">San Miguel de Tucumán, Tucumán, Argentina.</span>
            <br />
            Actualmente trabajo como freelancer y estoy en búsqueda de más proyectos y mejores oportunidades.
            <br />
            Completé mis estudios en la Universidad Tecnológica Nacional, en Argentina.
            <br />
            Sigo en constante aprendizaje y capacitacion. Actualmente estoy cursando una carrera en 
            <span className="purple"> Desarrollo UX/UI</span>, para acercarme y conocer las preferencias de los usuarios y mejorar en la creación de productos innovadores y funcionales.
            <br />
            Además de crear y diseñar, algunas otras actividades que disfruto son:
        </p>
        <ul>
        <li className="about-activity">
            <ImPointRight /> Videojuegos
        </li>
        <li className="about-activity">
            <ImPointRight /> Gimnasio
        </li>

        <li className="about-activity">
            <ImPointRight /> Películas y series
        </li>
        </ul>
        <p style={{ color: "rgb(155 126 172)" }}>
            "Apunta siempre a lo nuevo e innovador, creando un impacto positivo en el mundo!"
            <br />
        </p>
          <footer className="blockquote-footer">Franco</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard