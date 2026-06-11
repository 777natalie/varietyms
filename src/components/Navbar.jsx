import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "about", "service-area", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Service Area", target: "service-area" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: scrolled ? 12 : 12,
          left: scrolled ? 12 : 12,
          right: scrolled ? 12 : 12,
          zIndex: 9999,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          padding: scrolled ? "8px 16px" : "10px 20px",
          borderRadius: "999px",
          background: scrolled ? "rgba(10,15,30,0.85)" : "rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          border: scrolled ? "1px solid rgba(59,130,246,0.15)" : "1px solid rgba(255,255,255,0.18)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.12)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo */}
        <img
          src="/final-logo1.PNG"
          alt="VMS Logo"
          onClick={() => scrollTo("home")}
          style={{
            height: scrolled ? "50px" : "59px",
            width: "auto",
            cursor: "pointer",
            transition: "all 0.4s ease",
            alignSelf: "center",
          }}
        />

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              display: "flex",
              gap: "28px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.06em",
              transition: "all 0.4s ease",
            }}>
              {navItems.map(({ label, target }) => {
                const isActive = activeSection === target;
                return (
                  <span
                    key={target}
                    onClick={() => scrollTo(target)}
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      color: scrolled
                        ? isActive ? "#3B82F6" : "rgba(255,255,255,0.85)"
                        : isActive ? "#3B82F6" : "rgba(255,255,255,0.85)",
                      fontWeight: isActive ? "600" : "500",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = scrolled ? (isActive ? "#3B82F6" : "rgba(255,255,255,0.85)") : (isActive ? "#3B82F6" : "rgba(255,255,255,0.85)"); }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Right side */}
        {!isMobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:5722766203"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.4s ease",
              }}
            >
              (572) 276-6203
            </a>
            <a
              href="#contact"
              style={{
                background: "#3B82F6",
                color: "white",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                fontSize: "11px",
                padding: "10px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                letterSpacing: "0.06em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#3B82F6"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get a Quote
            </a>
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              justifySelf: "end",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <span style={{ width: 18, height: 1.5, background: "white", display: "block", transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(0px, 6px)" : "none" }} />
            <span style={{ width: 18, height: 1.5, background: "white", display: "block", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 18, height: 1.5, background: "white", display: "block", transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(0px, -6px)" : "none" }} />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(10,15,30,0.98)",
          zIndex: 10000, padding: "40px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src="/logo.png" alt="VMS" style={{ height: "50px" }} />
            <button onClick={() => setMenuOpen(false)} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ marginTop: "60px", display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Russo One, sans-serif", fontSize: "36px" }}>
            {navItems.map(({ label, target }) => (
              <span key={target} onClick={() => scrollTo(target)} style={{ cursor: "pointer", color: activeSection === target ? "#3B82F6" : "white", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = activeSection === target ? "#3B82F6" : "white"; }}
              >{label}</span>
            ))}
          </div>
          <a href="tel:5722766203" style={{ marginTop: "32px", fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>(572) 276-6203</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ marginTop: "auto", background: "#3B82F6", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "700", fontSize: "14px", padding: "16px", borderRadius: "999px", textAlign: "center", textDecoration: "none" }}>Get a Quote</a>
        </div>
      )}
    </>
  );
};

export default Navbar;