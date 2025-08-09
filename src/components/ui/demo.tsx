import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      width: "100%",
      background: "#fff",
      borderBottom: "1px solid #eee",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <nav style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1rem",
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>MyPortfolio</div>
        {/* Hamburger for mobile */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 28,
            cursor: "pointer",
          }}
          className="nav-hamburger"
        >
          &#9776;
        </button>
        {/* Navigation links */}
        <ul
          className={`nav-links${open ? " open" : ""}`}
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5rem",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{ textDecoration: "none", color: "#222" }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Inline CSS for responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: #fff;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
