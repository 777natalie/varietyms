import heroBg from "../assets/hero-photo2.png";

const Hero = () => {
  const cards = [
    {
      symbol: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="8" cy="8" r="5" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="24" cy="8" r="5" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="8" cy="24" r="5" stroke="#7B3F2A" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="5" stroke="#7B3F2A" strokeWidth="1.5" />
        </svg>
      ),
      title: "Residential Housekeeping",
      desc: "Routine cleaning, deep cleans, move-in/move-out, and home maintenance across Oklahoma.",
    },
    {
      symbol: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16 L16 4 L28 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 28 L8 16 L24 16 L24 28" stroke="#7B3F2A" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="13" y1="28" x2="13" y2="20" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="19" y1="28" x2="19" y2="20" stroke="#3B82F6" strokeWidth="1.5" />
        </svg>
      ),
      title: "Commercial Maintenance",
      desc: "Parking lot striping, pressure washing, building repairs, and facility upkeep for commercial properties.",
    },
    {
      symbol: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="2" x2="16" y2="30" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="2" y1="16" x2="30" y2="16" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="5" y1="5" x2="27" y2="27" stroke="#7B3F2A" strokeWidth="1.5" />
          <line x1="27" y1="5" x2="5" y2="27" stroke="#7B3F2A" strokeWidth="1.5" />
        </svg>
      ),
      title: "Exterior & Grounds",
      desc: "Landscaping, lawn care, curb painting, trash removal, and pressure washing services.",
    },
  ];

  return (
    <>
      <style>{`
        .hero-cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          padding: 0 48px 48px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }
        .hero-card {
          background: rgba(10,15,30,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 28px 24px;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hero-card:hover {
          background: rgba(10,15,30,0.8);
          transform: translateY(-4px);
        }
        @media (max-width: 768px) {
          .hero-cards { grid-template-columns: 1fr; padding: 0 24px 40px; }
          .hero-h1 { font-size: 34px !important; }
          .hero-center { padding: 140px 24px 32px !important; }
          .hero-bottom { flex-direction: column !important; gap: 20px !important; padding: 24px 24px 28px !important; }
          .ruler-tr, .ruler-br { display: none; }
        }
      `}</style>

      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        <img src={heroBg} alt="Oklahoma skyline" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,30,1) 0%, rgba(10,15,30,0.65) 45%, rgba(10,15,30,0.2) 100%)", zIndex: 1 }} />

        {/* Top-right ruler */}
        <svg className="ruler-tr" style={{ position: "absolute", top: 100, right: 20, opacity: 0.6, zIndex: 2 }} width="130" height="130" viewBox="0 0 130 130">
          <line x1="14" y1="14" x2="100" y2="14" stroke="#3B82F6" strokeWidth="0.8" />
          <line x1="100" y1="14" x2="100" y2="100" stroke="#3B82F6" strokeWidth="0.8" />
          <line x1="8" y1="14" x2="20" y2="14" stroke="#3B82F6" strokeWidth="0.8" />
          <line x1="14" y1="8" x2="14" y2="20" stroke="#3B82F6" strokeWidth="0.8" />
          <line x1="94" y1="100" x2="106" y2="100" stroke="#3B82F6" strokeWidth="0.8" />
          <text x="40" y="10" fill="#3B82F6" fontSize="7" fontFamily="monospace">125'-0"</text>
          <text x="108" y="65" fill="#3B82F6" fontSize="7" fontFamily="monospace">48'-0"</text>
          <circle cx="100" cy="14" r="2" fill="#3B82F6" />
        </svg>

        {/* Top-left ruler */}
        <svg className="ruler-tr" style={{ position: "absolute", top: 100, left: 20, opacity: 0.6, zIndex: 2 }} width="130" height="130" viewBox="0 0 130 130">
           <line x1="30" y1="14" x2="116" y2="14" stroke="#3B82F6" strokeWidth="0.8" />
           <line x1="30" y1="14" x2="30" y2="100" stroke="#3B82F6" strokeWidth="0.8" />
           <line x1="24" y1="14" x2="36" y2="14" stroke="#3B82F6" strokeWidth="0.8" />
           <line x1="116" y1="8" x2="116" y2="20" stroke="#3B82F6" strokeWidth="0.8" />
           <line x1="24" y1="100" x2="36" y2="100" stroke="#3B82F6" strokeWidth="0.8" />
           <text x="54" y="10" fill="#3B82F6" fontSize="7" fontFamily="monospace">125'-0"</text>
           <text x="2" y="65" fill="#3B82F6" fontSize="7" fontFamily="monospace">48'-0"</text>
           <circle cx="30" cy="14" r="2" fill="#3B82F6" />
        </svg>


        {/* Centered headline */}
        <div className="hero-center" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 48px 0", textAlign: "center" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.35)" }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>VARIETY MAINTENANCE SERVICES LLC</span>
              <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.35)" }} />
            </div>

            <h1 className="hero-h1" style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(38px, 5.5vw, 74px)", color: "white", lineHeight: 1.05, margin: "0 0 22px" }}>
              Oklahoma Tough,<br />Service You Trust.
            </h1>

            {/* <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: "0 auto", maxWidth: 560 }}> 
              Professional maintenance, housekeeping, and property care for residential and commercial clients across Oklahoma.
            </p> */}
          </div>
        </div>

        {/* Bottom row — bold statement + pill button */}
        <div className="hero-bottom" style={{ position: "relative", zIndex: 3, maxWidth: 1200, margin: "0 auto", width: "100%", padding: "40px 48px 28px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", boxSizing: "border-box" }}>
          <p style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(15px, 1.6vw, 20px)", color: "white", lineHeight: 1.45, margin: 0, maxWidth: 500 }}>
            Quality Work. Reliable Service.<br />Lasting Results.
          </p>
          <a
            href="#services"
            style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", color: "#0A0F1E", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "11px", padding: "12px 16px 12px 24px", borderRadius: "999px", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", transition: "transform 0.2s ease", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View Services
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <line x1="2" y1="6.5" x2="11" y2="6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7.5 3 L11 6.5 L7.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Cards */}
        <div style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className="hero-cards">
            {cards.map((c) => (
              <div key={c.title} className="hero-card">
                {c.symbol}
                <p style={{ fontFamily: "Russo One, sans-serif", color: "white", fontSize: "14px", margin: "14px 0 8px 0" }}>{c.title}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.45)", fontSize: "11px", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;