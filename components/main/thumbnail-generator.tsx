'use client';

import React, { useState, useRef } from 'react';

export default function ThumbnailGenerator() {
  const [title, setTitle] = useState('Nailart');
  const [subtitle, setSubtitle] = useState('Thumbnail Generator');
  const [gradientStart, setGradientStart] = useState('#8b5cf6');
  const [gradientEnd, setGradientEnd] = useState('#ec4899');
  
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSVG = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'thumbnail.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
    }}>
      <style>{`
        .generator-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }
        @media (max-width: 800px) {
          .generator-grid {
            grid-template-columns: 1fr;
          }
        }
        .custom-input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background-color: rgba(0,0,0,0.2);
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        .custom-input:focus {
          outline: none;
          border-color: rgba(255,255,255,0.6);
        }
      `}</style>

      <div className="generator-grid">
        {/* Left: Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Design Tools</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Title</label>
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="custom-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Subtitle</label>
            <input 
              value={subtitle} 
              onChange={(e) => setSubtitle(e.target.value)}
              className="custom-input"
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Start Color</label>
              <input type="color" value={gradientStart} onChange={(e) => setGradientStart(e.target.value)}
                     style={{ width: '100%', height: '40px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>End Color</label>
              <input type="color" value={gradientEnd} onChange={(e) => setGradientEnd(e.target.value)}
                     style={{ width: '100%', height: '40px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }}/>
            </div>
          </div>

          <button 
            onClick={downloadSVG}
            style={{
              marginTop: 'auto',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.8))',
              color: 'black',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(255,255,255,0.2)',
              transition: 'transform 0.1s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Download SVG
          </button>
        </div>

        {/* Right: SVG Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, textAlign: 'left' }}>Preview (1280x720)</h2>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg 
              ref={svgRef}
              viewBox="0 0 1280 720"
              width="100%"
              style={{ display: 'block', backgroundColor: '#111' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="thumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={gradientStart} />
                  <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
                
                <filter id="shadow">
                  <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Background */}
              <rect width="1280" height="720" fill="url(#thumbGrad)" />
              
              {/* Decorative blur blobs */}
              <circle cx="200" cy="100" r="300" fill="#ffffff" opacity="0.1" filter="blur(100px)" />
              <circle cx="1000" cy="600" r="400" fill="#000000" opacity="0.2" filter="blur(100px)" />

              {/* Text Container */}
              {/* Keeping 'Indie Flower' as requested in the overall theme */}
              <g transform="translate(100, 360)">
                <text 
                  x="0" 
                  y="0" 
                  fill="#ffffff" 
                  fontFamily="'Indie Flower', cursive, system-ui" 
                  fontSize="96" 
                  fontWeight="bold"
                  filter="url(#shadow)"
                >
                  {title || ' '}
                </text>
                <text 
                  x="0" 
                  y="80" 
                  fill="#ffffff" 
                  opacity="0.8"
                  fontFamily="'Indie Flower', cursive, system-ui" 
                  fontSize="48"
                  filter="url(#shadow)"
                >
                  {subtitle || ' '}
                </text>
              </g>

              {/* Minimal Border/Frame */}
              <rect x="20" y="20" width="1240" height="680" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" rx="16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
