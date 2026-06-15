import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import parkingStripes from "../assets/parking-stripes.png";
import moveIn from "../assets/move-in.png";
import yard from "../assets/yard.png";

const serviceData = {
  commercial: {
    title: "Commercial Maintenance",
    image: parkingStripes,
    intro: "Keep your commercial property, retail center, or facility looking professional and operating smoothly. We handle everything from parking lot upkeep to building repairs so you can focus on running your business.",
    services: [
      "Parking Lot Striping & Repainting",
      "Curb Painting & Safety Markings",
      "Property Cleanup & Trash Removal",
      "Landscaping & Grounds Maintenance",
      "Building Maintenance & Repairs",
      "Plumbing Fixture Maintenance",
      "Floor Preparation & Concrete Repairs",
      "Pressure Washing Services",
      "Commercial Property Upkeep",
    ],
    recommended: {
      type: "4 or 6-Month Contract",
      desc: "Commercial properties benefit most from seasonal maintenance cycles. A 4 or 6-month contract keeps striping, landscaping, and facility upkeep on a consistent schedule without long-term commitment.",
      color: "#3B82F6",
    },
  },
  residential: {
    title: "Residential Housekeeping",
    image: moveIn,
    intro: "From routine cleaning to move-in/move-out service, we help keep your home clean, comfortable, and well-maintained — with flexible scheduling built around your life.",
    services: [
      "Residential Housekeeping",
      "Deep Cleaning Services",
      "Routine Home Cleaning",
      "Move-In & Move-Out Cleaning",
      "Property Cleanup",
      "Lawn & Landscape Maintenance",
      "Minor Home Repairs & Maintenance",
      "Pressure Washing",
    ],
    recommended: {
      type: "Monthly Plan",
      desc: "Homes stay cleanest with regular attention. A monthly plan keeps your space consistently maintained with recurring scheduled visits and priority availability.",
      color: "#7B3F2A",
    },
  },
  exterior: {
    title: "Exterior & Grounds",
    image: yard,
    intro: "First impressions start outside. We keep your property's exterior — lawns, landscaping, and grounds — clean, attractive, and well-kept year-round.",
    services: [
      "Landscaping & Grounds Maintenance",
      "Property Cleanup & Trash Removal",
      "Lawn Care Services",
      "Exterior Maintenance",
      "Curb Painting & Safety Markings",
      "Pressure Washing",
      "Commercial Property Upkeep",
    ],
    recommended: {
      type: "4 or 6-Month Contract",
      desc: "Grounds and landscaping needs shift with the seasons. A 4 or 6-month contract aligns service with seasonal cycles — keeping your property's exterior sharp year-round.",
      color: "#1B3A6B",
    },
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = serviceData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div style={{ padding: "160px 48px 80px", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
        <p style={{ fontSize: "16px", color: "#0A0F1E" }}>Service not found.</p>
        <button onClick={() => navigate("/")} style={{ marginTop: 16, background: "#3B82F6", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", fontFamily: "Montserrat, sans-serif", fontWeight: 700, cursor: "pointer" }}>Back to Home</button>
      </div>
    );
  }

  const otherServices = Object.entries(serviceData).filter(([key]) => key !== slug);

  return (
    <>
      <style>{`
        .sd-section {
          background: #F5F3EF;
          min-height: 100vh;
        }
        .sd-hero {
          position: relative;
          height: 480px;
          margin-top: -100px;
          padding-top: 100px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sd-body {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 48px;
        }
        .sd-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .sd-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }
        .sd-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 14px 16px;
          border-radius: 10px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
        }
        .sd-recommended {
          border-radius: 16px;
          padding: 28px 24px;
          color: white;
        }
        .sd-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .sd-others {
          margin-top: 64px;
          border-top: 1px solid rgba(10,15,30,0.08);
          padding-top: 40px;
        }
        .sd-others-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }
        .sd-other-card {
          display: block;
          text-decoration: none;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          height: 140px;
          transition: transform 0.2s ease;
        }
        .sd-other-card:hover { transform: translateY(-4px); }
        .sd-other-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .sd-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .sd-body { padding: 40px 20px !important; }
          .sd-list { grid-template-columns: 1fr !important; }
          .sd-others-grid { grid-template-columns: 1fr !important; }
          .sd-hero { height: 480px !important; margin-top: -100px !important; padding-top: 100px !important; }
        }
      `}</style>

      <section className="sd-section">

        {/* Hero */}
        <div className="sd-hero">
          <img src={data.image} alt={data.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.7)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 32px" }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#3B82F6", fontWeight: 700, textTransform: "uppercase", margin: "0 0 12px" }}>OUR SERVICES</p>
            <h1 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(28px, 4.5vw, 52px)", color: "white", margin: 0, lineHeight: 1.1 }}>{data.title}</h1>
          </div>
        </div>

        {/* Body */}
        <div className="sd-body">
          <div className="sd-grid">

            {/* Left — description + services */}
            <div>
              <h2 style={{ fontFamily: "Russo One, sans-serif", fontSize: "clamp(20px, 2.2vw, 28px)", color: "#0A0F1E", margin: "0 0 16px" }}>Overview</h2>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#6B7280", lineHeight: 1.9, margin: "0 0 8px" }}>{data.intro}</p>

              <h3 style={{ fontFamily: "Russo One, sans-serif", fontSize: "16px", color: "#0A0F1E", margin: "32px 0 0" }}>What's Included</h3>
              <div className="sd-list">
                {data.services.map((s) => (
                  <div key={s} className="sd-list-item">
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(59,130,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5 L4 7.5 L8.5 2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "12px", color: "#0A0F1E", fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — recommended contract + CTAs */}
            <div>
              <h3 style={{ fontFamily: "Russo One, sans-serif", fontSize: "12px", color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Recommended Plan</h3>
              <div className="sd-recommended" style={{ background: data.recommended.color }}>
                <p style={{ fontFamily: "Russo One, sans-serif", fontSize: "18px", margin: "0 0 12px" }}>{data.recommended.type}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: 0 }}>{data.recommended.desc}</p>
              </div>

              <div className="sd-cta-row">
                <a
                  href="tel:5722766203"
                  style={{ flex: 1, minWidth: 130, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#0A0F1E", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "11px", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M3 2H7.5L9.5 7L6.75 8.75C7.9 11.1 10.9 13.1 12.25 13.25L14 10.5L19 12.5V17C19 17.6 18.4 18 17.8 18C9.1 18 2 10.9 2 2.2C2 1.6 2.4 1 3 1V2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  Call Us
                </a>
                <Link
                  to="/#contact"
                  style={{ flex: 1, minWidth: 130, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#3B82F6", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "11px", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="3" width="16" height="12" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M1.5 4 L9 10 L16.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Email Us
                </Link>
              </div>

              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "#9CA3AF", lineHeight: 1.8, marginTop: "16px" }}>
                Office: (572) 276-6203 · After Hours: (405) 537-8449
              </p>
            </div>
          </div>

          {/* Other services */}
          <div className="sd-others">
            <h3 style={{ fontFamily: "Russo One, sans-serif", fontSize: "12px", color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 4px" }}>Explore More</h3>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", color: "#6B7280", margin: 0 }}>View our other service categories</p>

            <div className="sd-others-grid">
              {otherServices.map(([key, val]) => (
                <Link key={key} to={`/services/${key}`} className="sd-other-card">
                  <img src={val.image} alt={val.title} className="sd-other-img" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,30,0.85), rgba(10,15,30,0.1))" }} />
                  <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                    <p style={{ fontFamily: "Russo One, sans-serif", color: "white", fontSize: "16px", margin: 0 }}>{val.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServiceDetail;