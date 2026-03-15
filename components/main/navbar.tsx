'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: '24px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 50,
      fontFamily: "'Indie Flower', cursive, ui-sans-serif, system-ui",
    }}>
      {/* Left: Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <img 
            src="/Gemini_Generated_Image_91nyxf91nyxf91ny.png" 
            alt="Nailart Logo" 
            style={{ 
              height: '48px', 
              width: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.5))',
              cursor: 'pointer'
            }}
          />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '12px 32px',
        borderRadius: '100px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}>
        <style>{`
          .nav-link {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s, text-shadow 0.2s;
          }
          .nav-link:hover {
            color: white;
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
          }
          .nav-btn {
            background: linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.8));
            color: black;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 100px;
            font-weight: 700;
            font-size: 0.95rem;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 14px rgba(255,255,255,0.2);
            border: none;
            cursor: pointer;
          }
          .nav-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255,255,255,0.3);
          }
        `}</style>
        
        <Link href="#features" className="nav-link">Features</Link>
        <Link href="#price" className="nav-link">Price</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </div>

      {/* Right: Get Started Button */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="nav-btn" onClick={() => alert("Get Started clicked!")}>
          Get Started
        </button>
      </div>
    </nav>
  );
}
