import cityBg from "../assets/city-bg2.png";

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-section {
          background: #F5F3EF;
        }
        .contact-hero {
          position: relative;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .contact-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .contact-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          margin-bottom: 16px;
        }
        .contact-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(10,15,30,0.12);
          border-radius: 8px;
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          color: #0A0F1E;
          background: white;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .contact-input:focus { border-color: #3B82F6; }
        .contact-input::placeholder { color: #9CA3AF; }
        .contact-map {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px 60px;
        }
        @media (max-width: 768px) {
          .contact-body { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 20px !important; }
          .contact-map { padding: 0 20px 40px !important; }
          .contact-hero { height: 280px !important; }
        }
      `}</style>

      <section id="contact" className="contact-section">

        {/* Tall hero banner with quote */}
        <div className="contact-hero">
          <img src={cityBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.78)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 32px" }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#3B82F6", fontWeight: 700, textTransform: "uppercase", margin: "0 0 16px" }}>CONTACT US</p>
            <h2 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(26px, 4vw, 52px)", color: "white", margin: "0 0 20px", lineHeight: 1.1, maxWidth: 700 }}>
              Contact Us
            </h2>
            <div style={{ width: 48, height: 2, background: "#3B82F6", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(14px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", margin: 0, fontStyle: "italic", maxWidth: 600, lineHeight: 1.7 }}>
              "A well-maintained property creates a positive first impression for customers, tenants, and visitors."
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="contact-body">

          {/* Left — form */}
          <div>
            <h3 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(22px, 2.5vw, 34px)", color: "#0A0F1E", margin: "0 0 12px" }}>Get In Touch</h3>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "#6B7280", lineHeight: 1.85, margin: "0 0 28px" }}>
              Reach out and we'll get back to you as soon as possible.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input className="contact-input" type="text" placeholder="Your Name" />
              <input className="contact-input" type="email" placeholder="Email Address" />
              <input className="contact-input" type="tel" placeholder="Phone Number" />
              <input className="contact-input" type="text" placeholder="Subject" />
              <textarea
                className="contact-input"
                placeholder="Your Message"
                rows={5}
                style={{ resize: "vertical" }}
              />
              <button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#3B82F6"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right — cards */}
          <div>
            <div className="contact-card">
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 2H7.5L9.5 7L6.75 8.75C7.9 11.1 10.9 13.1 12.25 13.25L14 10.5L19 12.5V17C19 17.6 18.4 18 17.8 18C9.1 18 2 10.9 2 2.2C2 1.6 2.4 1 3 1V2Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <p style={{ fontFamily: "Russo One, sans-serif", color: "#0A0F1E", fontSize: "14px", margin: 0 }}>Phone Number</p>
              <a href="tel:5722766203" style={{ fontFamily: "Montserrat, sans-serif", color: "#3B82F6", fontSize: "16px", fontWeight: 700, textDecoration: "none" }}>(572) 276-6203</a>
            </div>

            <div className="contact-card">
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1C6.69 1 4 3.69 4 7C4 12 10 19 10 19C10 19 16 12 16 7C16 3.69 13.31 1 10 1Z" stroke="#7B3F2A" strokeWidth="1.5" fill="none" />
                  <circle cx="10" cy="7" r="2.5" stroke="#7B3F2A" strokeWidth="1.5" />
                </svg>
              </div>
              <p style={{ fontFamily: "Russo One, sans-serif", color: "#0A0F1E", fontSize: "14px", margin: 0 }}>Service Area</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", color: "#6B7280", fontSize: "13px", margin: 0, lineHeight: 1.6, textAlign: "center" }}>OKC Metro · Yukon · Edmond<br />Moore · Norman & Surrounding Areas</p>
            </div>

            <div className="contact-card" style={{ marginBottom: 0 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="#3B82F6" strokeWidth="1.5" />
                  <path d="M10 5V10L13 13" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ fontFamily: "Russo One, sans-serif", color: "#0A0F1E", fontSize: "14px", margin: 0 }}>Availability</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", color: "#6B7280", fontSize: "13px", margin: 0, lineHeight: 1.6, textAlign: "center" }}>Flexible scheduling available<br />One-time · Monthly · Long-term contracts</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <div style={{ borderRadius: "16px", overflow: "hidden", height: 400, border: "1px solid rgba(0,0,0,0.08)" }}>
            <iframe
              title="Oklahoma City Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416147.54!2d-97.7507!3d35.4676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8d281%3A0x33a21274d14f3a9d!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default Contact;