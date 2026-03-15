'use client';

import React from 'react';
import AetherHero from "@/components/main/hero";
import Navbar from "@/components/main/navbar";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <AetherHero 
        maxWidth={2000} // 큰 크기를 허용하여 전체 화면 레이아웃 사용
      >
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          minHeight: '80vh',
          flexDirection: 'row',
          gap: '2rem',
          fontFamily: "'Indie Flower', cursive, ui-sans-serif, system-ui",
        }}>
          {/* Left Side (3 Ratio) */}
          <div style={{
            flex: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // 약간 투명한 검은색 배경 덮기
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}>
            {/* Top: YouTube Video */}
            <div style={{
              width: '100%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" // Placeholder 예시 영상 (변경 가능)
                title="YouTube Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Bottom: Big Text */}
            <h1 style={{
              fontSize: 'clamp(4rem, 8vw, 8rem)',
              fontWeight: 700,
              margin: '2rem 0 0 0',
              color: 'white',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
            }}>
              NAILART
            </h1>
          </div>

          {/* Right Side (2 Ratio - Login Card) */}
          <div style={{
            flex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '450px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white', fontWeight: 'bold' }}>Welcome Back</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center' }}>
                Sign in to shape your next beautiful thumbnail.
              </p>

              {/* Google Login Button */}
              <button 
               onClick={async () => {
                 const { createClient } = await import('@/utils/supabase/client');
                 const supabase = createClient();
                 await supabase.auth.signInWithOAuth({
                   provider: 'google',
                   options: {
                     redirectTo: `${window.location.origin}/auth/callback`,
                   },
                 });
               }}
               style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Indie Flower', cursive, ui-sans-serif, system-ui",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <p style={{
                marginTop: '2rem',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: 'center',
                lineHeight: 1.5,
                fontFamily: "'Indie Flower', cursive, ui-sans-serif, system-ui",
              }}>
                By clicking continue, you agree to our <br/>
                <Link href="#" style={{ color: 'white', textDecoration: 'underline' }}>Terms of Service</Link> and <Link href="#" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </AetherHero>

      {/* 모바일 등 작은 화면에서는 세로로 보이도록 하는 스타일 (선택적) */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="flexDirection: 'row'"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </main>
  );
}
