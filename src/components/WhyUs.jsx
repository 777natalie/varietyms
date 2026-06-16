import tools from "../assets/tools.png";

const WhyUs = () => {
  const contracts = [
    {
      type: "One-Time",
      color: "#0A0F1E",
      desc: "Need a single job done right? We offer one-time service visits for cleaning, repairs, striping, or any property need.",
      features: ["No commitment required", "Scheduling flexibility", "Full-service options available"],
    },
    {
      type: "Monthly Plan",
      color: "#7B3F2A",
      desc: "Keep your property consistently maintained with a recurring monthly service plan customized to your needs.",
      features: ["Regular scheduled visits", "Priority availability", "Consistent property upkeep"],
    },
    {
      type: "4 or 6-Month",
      color: "#3B82F6",
      desc: "Short-term contracts designed for seasonal maintenance cycles or project-based property care.",
      features: ["Flexible duration", "Bundled service pricing", "Ideal for seasonal needs"],
    },
    {
      type: "Annual & Multi-Year",
      color: "#1B3A6B",
      desc: "Our most comprehensive option — long-term agreements with the best value and dedicated service scheduling.",
      features: ["Best pricing available", "Dedicated account management", "Multi-property discounts"],
    },
  ];

  return (
    <>
      <style>{`
        .whyus-section {
          background: #F5F3EF;
          padding: 80px 0;
        }
        .whyus-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .whyus-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          margin-bottom: 48px;
        }
        .contracts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .contract-card {
          border-radius: 14px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.2s ease;
        }
        .contract-card:hover { transform: translateY(-4px); }
        @media (max-width: 1024px) {
          .contracts-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .whyus-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .whyus-inner { padding: 0 20px !important; }
          .contracts-grid { grid-template-columns: 1fr !important; }
          .whyus-section { padding: 60px 0 !important; }
        }
      `}</style>

      <section id="about" className="whyus-section">
        <div className="whyus-inner">

          <div className="whyus-top">

            {/* Left — tools */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: 32, left: 16, width: "72%", height: "78%", border: "2px solid #3B82F6", borderRadius: "4px", opacity: 0.3 }} />
              <img src={tools} alt="Tools" style={{ position: "relative", zIndex: 1, width: "100%", height: 380, objectFit: "contain", display: "block", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }} />
            </div>

            {/* Right */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "24px", height: "1px", background: "#3B82F6" }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.22em", color: "#3B82F6", fontWeight: 700 }}>WHY CHOOSE US</span>
              </div>

              <h2 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(26px, 3vw, 42px)", color: "#0A0F1E", lineHeight: 1.15, margin: "0 0 20px" }}>
                Flexible Agreements<br />
                <span style={{ color: "#3B82F6" }}>Built Around You</span>
              </h2>

              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#6B7280", lineHeight: 1.9, margin: 0 }}>
                Whether you need routine housekeeping, landscaping, parking lot striping, or ongoing facility services — Variety Maintenance Services delivers dependable solutions that protect and enhance your investment. We offer service agreements designed to fit your property's schedule and budget, from a single visit to multi-year maintenance partnerships.
              </p>
            </div>
          </div>

          {/* Contract cards */}
          <div className="contracts-grid">
            {contracts.map((c) => (
              <div
                key={c.type}
                className="contract-card"
                style={{ background: c.color, border: "none" }}
              >
                <h3 style={{ fontFamily: "Russo One, sans-serif", color: "white", fontSize: "15px", margin: 0 }}>{c.type}</h3>

                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>{c.desc}</p>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {c.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: 15, height: 15, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <path d="M1 3.5 L2.8 5.5 L6 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                    onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}  
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "10px", color: "white", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "auto", paddingTop: "6px", transition: "gap 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = "14px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = "8px"; }}
                >
                  Get a Quote
                  <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <line x1="1.5" y1="4.5" x2="7.5" y2="4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M5 2 L7.5 4.5 L5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyUs;