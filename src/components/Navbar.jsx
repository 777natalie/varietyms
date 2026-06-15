import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "about", "contact"];
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
    setMenuOpen(false);
    setServicesOpen(false);
    if (location.pathname !== "/") {
      navigate(id === "home" ? "/" : `/#${id}`);
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Services", target: "services", dropdown: true },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const serviceLinks = [
    { label: "Commercial Maintenance", slug: "commercial" },
    { label: "Residential Housekeeping", slug: "residential" },
    { label: "Exterior & Grounds", slug: "exterior" },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 12,
          left: 12,
          right: 12,
          zIndex: 9999,
          display: "grid",
          gridTemplateColumns: isMobile ? "auto 1fr auto" : "1fr auto 1fr",
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={import.meta.env.BASE_URL + "navlogo.PNG"}
            alt="VMS Logo"
            onClick={() => scrollTo("home")}
            style={{
              height: scrolled ? "50px" : "59px",
              width: "auto",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          />
        </div>

        {/* Center nav */}
        {!isMobile && (
          <div style={{
            display: "flex",
            gap: "28px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "0.06em",
          }}>
            {navItems.map(({ label, target, dropdown }) => {
              const isActive = activeSection === target;
              if (dropdown) {
                return (
                  <div
                    key={target}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <span
                      onClick={() => scrollTo(target)}
                      style={{
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        color: isActive ? "#3B82F6" : "rgba(255,255,255,0.85)",
                        fontWeight: isActive ? "600" : "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = isActive ? "#3B82F6" : "rgba(255,255,255,0.85)"; }}
                    >
                      {label}
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ transition: "transform 0.2s ease", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                        <path d="M1.5 3 L4.5 6 L7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                    {/* Dropdown */}
                    {/* Invisible bridge to prevent gap closing dropdown */}
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: "14px" }} />
                    <div style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      background: "rgba(10,15,30,0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      borderRadius: "12px",
                      padding: "10px",
                      minWidth: "220px",
                      opacity: servicesOpen ? 1 : 0,
                      pointerEvents: servicesOpen ? "all" : "none",
                      transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                    }}>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          style={{
                            display: "block",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            color: "rgba(255,255,255,0.85)",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontWeight: 500,
                            transition: "background 0.2s ease, color 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.15)"; e.currentTarget.style.color = "#3B82F6"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <span
                  key={target}
                  onClick={() => scrollTo(target)}
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    color: isActive ? "#3B82F6" : "rgba(255,255,255,0.85)",
                    fontWeight: isActive ? "600" : "500",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#3B82F6" : "rgba(255,255,255,0.85)"; }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        )}

        {/* Right side */}
        {!isMobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifySelf: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
              <a
                href="tel:5722766203"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.8)", textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
              >
                Office: (572) 276-6203
              </a>
              <a
                href="tel:4055378449"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: "500", color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
              >
                After Hours: (405) 537-8449
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
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
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,15,30,0.98)",
        zIndex: 10000,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.3s ease",
        overflowY: "auto",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={import.meta.env.BASE_URL + "navlogo.PNG"} alt="VMS" style={{ height: "50px" }} />
          <button onClick={() => setMenuOpen(false)} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>✕</button>
        </div>
        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "24px" }}>
          {navItems.map(({ label, target, dropdown }) => (
            <div key={target}>
              <span
                onClick={() => scrollTo(target)}
                style={{ cursor: "pointer", color: activeSection === target ? "#3B82F6" : "white", transition: "color 0.3s ease", fontFamily: "Russo One, sans-serif", fontSize: "32px", display: "block" }}
              >
                {label}
              </span>
              {dropdown && (
                <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMenuOpen(false)}
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <a href="tel:5722766203" style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>Office: (572) 276-6203</a>
          <a href="tel:4055378449" style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "12px", textDecoration: "none" }}>After Hours: (405) 537-8449</a>
        </div>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{ marginTop: "20px", background: "#3B82F6", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "700", fontSize: "14px", padding: "16px", borderRadius: "999px", textAlign: "center", textDecoration: "none" }}>Get a Quote</a>
      </div>
    </>
  );
};

export default Navbar;