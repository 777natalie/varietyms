const Footer = () => {
  const navLinks = [
    { label: "Home", target: "home" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const services = [
    "Parking Lot Striping",
    "Pressure Washing",
    "Landscaping & Grounds",
    "Building Maintenance",
    "Residential Housekeeping",
    "Floor Preparation",
    "Property Cleanup",
    "Plumbing Maintenance",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer {
          background: #000000;
          padding: 64px 0 0;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 48px auto 0;
          padding: 20px 48px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-link {
          font-family: Montserrat, sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: color 0.2s ease;
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
        }
        .footer-link:hover { color: #3B82F6; }
        .footer-heading {
          font-family: Russo One, sans-serif;
          font-size: 12px;
          color: white;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        @media (max-width: 768px) {
          .footer-inner { grid-template-columns: 1fr 1fr !important; gap: 32px !important; padding: 0 20px !important; }
          .footer-bottom { padding: 20px !important; flex-direction: column !important; text-align: center !important; }
        }
        @media (max-width: 480px) {
          .footer-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">

          {/* Brand col */}
          <div>
            <img
              src={import.meta.env.BASE_URL + "final-logo1.PNG"}
              alt="VMS Logo"
              style={{ height: 100, width: "auto", marginBottom: 20, display: "block" }}
            />
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: "0 0 20px", maxWidth: 260 }}>
              Professional property maintenance, housekeeping, and facility services for residential and commercial clients across Oklahoma.
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)", fontStyle: "italic", margin: 0 }}>
              "Quality Work. Reliable Service. Lasting Results."
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            {navLinks.map((l) => (
              <span key={l.target} className="footer-link" onClick={() => scrollTo(l.target)}>{l.label}</span>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">Our Services</p>
            {services.map((s) => (
              <span key={s} className="footer-link" style={{ cursor: "default" }}>{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Get In Touch</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#3B82F6", fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 4px", textTransform: "uppercase" }}>Office</p>
                <a href="tel:5722766203" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>(572) 276-6203</a>
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#3B82F6", fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 4px", textTransform: "uppercase" }}>After Hours</p>
                <a href="tel:4055378449" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600 }}>(405) 537-8449</a>
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#3B82F6", fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 4px", textTransform: "uppercase" }}>Service Area</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.7 }}>OKC Metro · Yukon<br />& Surrounding Areas</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © {new Date().getFullYear()} Variety Maintenance Services LLC. All rights reserved.
          </p>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
            Residential Housekeeping · Commercial Maintenance · Property Care
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;