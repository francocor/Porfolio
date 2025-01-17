import "../Css/Contact.css";

export const Contact = () => {
  return (
    <div>
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <form action="">
                <input type="text" placeholder="Tu Nombre" required/>
                <input type="email" placeholder="Tu email" required/>
                <textarea placeholder="Deja tu mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </div>
  )
}
export default Contact;