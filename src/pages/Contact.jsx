import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contact-section">
      <h1 className="section-title">Get In Touch</h1>

      <div className="contact-card">
        <p>Email: wade@example.com</p>
        <p>LinkedIn: linkedin.com/in/wade</p>
        <p>GitHub: github.com/wade</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn primary">Send</button>
        </form>
      </div>

      {/* Go Back Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/" className="btn secondary">
          ← Go Back
        </Link>
      </div>
    </section>
  );
}

export default Contact;