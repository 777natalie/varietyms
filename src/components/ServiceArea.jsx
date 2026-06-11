import cityBg from "../assets/city-bg2.png";
import oklahomaMap from "../assets/oklahoma-map.png";

const ServiceArea = () => {
  const areas = [
    { name: "Oklahoma City", primary: true },
    { name: "Yukon" },
    { name: "Edmond" },
    { name: "Moore" },
    { name: "Norman" },
    { name: "Midwest City" },
    { name: "Del City" },
    { name: "Mustang" },
    { name: "Bethany" },
    { name: "Warr Acres" },
  ];

  const dots = [
    { top: "30%", left: "20%" },
    { top: "45%", left: "15%" },
    { top: "60%", left: "22%" },
    { top: "25%", left: "38%" },
    { top: "55%", left: "35%" },
    { top: "70%", left: "40%" },
    { top: "35%", left: "55%" },
    { top: "50%", left: "60%" },
    { top: "65%", left: "65%" },
    { top: "28%", left: "70%" },
    { top: "48%", left: "75%" },
    { top: "62%", left: "80%" },
    { top: "38%", left: "85%" },
    { top: "55%", left: "88%" },
    { top: "20%", left: "50%" },
    { top: "72%", left: "55%" },
    { top: "42%", left: "45%" },
  ];

  return (
    <>
      <style>{`
        .service-area-section {
          position: relative;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          align-items: center;
        }
        .service-area-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .area-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 24px;
        }
        @media (max-width: 768px) {
          .service-area-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 20px !important; }
        }
      `}</style>

      <section id="service-area" className="service-area-section">

        <img src={cityBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.82)", zIndex: 1 }} />

        <div className="service-area-inner">

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "24px", height: "1px", background: "#3B82F6" }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.22em", color: "#3B82F6", fontWeight: 700 }}>SERVICE AREA</span>
            </div>

            <h2 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(32px, 4vw, 56px)", color: "white", lineHeight: 1.05, margin: "0 0 16px", textTransform: "uppercase" }}>
              AREAS<br />SERVICED
            </h2>

            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 8px" }}>
              Proudly serving the OKC Metro and surrounding communities.
            </p>

            <div className="area-list">
              {areas.map((a) => (
                <div key={a.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {a.primary ? (
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#3B82F6", fontWeight: 700 }}>▶</span>
                  ) : (
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "block", flexShrink: 0 }} />
                  )}
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: a.primary ? "13px" : "12px",
                    color: a.primary ? "white" : "rgba(255,255,255,0.55)",
                    fontWeight: a.primary ? 700 : 400,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                    {a.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "32px",
                background: "#3B82F6", color: "white", fontFamily: "Montserrat, sans-serif",
                fontWeight: 700, fontSize: "11px", padding: "13px 24px", borderRadius: "8px",
                textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,130,246,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Free Request
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <line x1="2" y1="6" x2="10" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 3 L10 6 L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right — map with overlays */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

            <img
              src={oklahomaMap}
              alt="Oklahoma"
              style={{ width: "100%", maxWidth: 500, height: "auto", objectFit: "contain", opacity: 0.85, filter: "drop-shadow(0 0 24px rgba(59,130,246,0.25))" }}
            />

            {/* OKLAHOMA text overlay */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "Russo One, sans-serif",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}>
              OKLAHOMA
            </div>

            {/* Scattered dots */}
            {dots.map((d, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: d.top,
                  left: d.left,
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#3B82F6",
                  opacity: 0.6,
                  pointerEvents: "none",
                }}
              />
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;