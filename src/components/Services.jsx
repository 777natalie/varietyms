import logoFull from "../assets/logo-full.png";
import moveIn from "../assets/move-in.png";
import parkingStripes from "../assets/parking-stripes.png";
import yard from "../assets/yard.png";

const Services = () => {
  const services = [
    {
      image: parkingStripes,
      imgHeight: 220,
      title: "Commercial Maintenance",
      desc: "Parking lot striping, curb painting, pressure washing, building repairs, plumbing upkeep, floor preparation, and complete commercial property care.",
      bg: "#0D1526",
    },
    {
      image: moveIn,
      imgHeight: 180,
      title: "Residential Housekeeping",
      desc: "Routine cleaning, deep cleans, move-in/move-out, lawn maintenance, minor home repairs, and pressure washing for residential properties.",
      bg: "#7B3F2A",
    },
    {
      image: yard,
      imgHeight: 200,
      title: "Exterior & Grounds",
      desc: "Landscaping, grounds maintenance, property cleanup, trash removal, and full exterior services keeping your property clean and attractive.",
      bg: "#3B82F6",
    },
  ];

  return (
    <>
      <style>{`
        .services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 16px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }
        .service-card {
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        .service-card-img-wrap {
          overflow: hidden;
          width: 100%;
          flex-shrink: 0;
        }
        .service-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .service-card:hover .service-card-img {
          transform: scale(1.05);
        }
        .service-card-body {
          padding: 28px 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 768px) {
          .services-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-wrap { padding: 0 20px 48px !important; }
          .logo-area { height: 280px !important; }
        }
      `}</style>

      <section id="services" style={{ background: "#0A0F1E" }}>

        <div className="logo-area" style={{ position: "relative", width: "100%", height: 460, overflow: "hidden" }}>
          <img src={logoFull} alt="Variety Maintenance Services" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top", display: "block" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to bottom, transparent, #0A0F1E)" }} />
        </div>

        <div className="services-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 64px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "24px", height: "1px", background: "#3B82F6" }} />
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.22em", color: "#3B82F6", fontWeight: 700 }}>OUR SERVICES</span>
          </div>

          <div className="services-header">
            <h2 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(28px, 3.5vw, 52px)", color: "white", lineHeight: 1.1, margin: 0, maxWidth: 520 }}>
              A Complete Set Of<br />Property Services
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0, maxWidth: 380 }}>
              From residential housekeeping to full commercial property maintenance — one company for all your property needs.
            </p>
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "24px 0 36px" }} />

          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card" style={{ background: s.bg }}>
                <div className="service-card-img-wrap" style={{ height: s.imgHeight }}>
                  <img src={s.image} alt={s.title} className="service-card-img" style={{ height: s.imgHeight }} />
                </div>
                <div className="service-card-body">
                  <h3 style={{ fontFamily: "Russo One, sans-serif", color: "white", fontSize: "19px", margin: 0, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "12px", lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", margin: "4px 0" }} />
                  <a
                    href="#contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "11px", color: "white", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "gap 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.gap = "16px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.gap = "10px"; }}
                  >
                    Learn More
                    <span style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="2" y1="6" x2="10" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M7 3 L10 6 L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;