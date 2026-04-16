import React from 'react';

export const TruSafeMainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    {/* Sharp, professional stylized A */}
    <path 
      d="M32 85L50 15L68 85" 
      stroke="url(#logoGradient)" 
      strokeWidth="9" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M40 65C55 65 70 85 90 85" 
      stroke="url(#logoGradient)" 
      strokeWidth="9" 
      strokeLinecap="round" 
    />
    <path 
      d="M60 45C75 45 85 55 85 70C85 85 75 95 60 95" 
      stroke="url(#logoGradient)" 
      strokeWidth="9" 
      strokeLinecap="round" 
    />
  </svg>
);

export const TrustGatewayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="45" stroke="#1E40AF" strokeWidth="6" />
    <path d="M50 85V15" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
    <path d="M30 40L50 15L70 40" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="10" stroke="#10B981" strokeWidth="6" fill="#0F172A" />
    <circle cx="50" cy="50" r="3" fill="#10B981" />
  </svg>
);

export const TrustAuthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Outer Ring with Nodes */}
    <circle cx="50" cy="50" r="42" stroke="#1E40AF" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 50 + 42 * Math.cos(rad);
      const y = 50 + 42 * Math.sin(rad);
      return (
        <React.Fragment key={angle}>
          <line x1="50" y1="50" x2={x} y2={y} stroke="#1E40AF" strokeWidth="2" opacity="0.3" />
          <circle cx={x} cy={y} r="4" fill="#1E40AF" />
        </React.Fragment>
      );
    })}
    {/* Shield */}
    <path 
      d="M50 75C50 75 70 65 70 45V30L50 22L30 30V45C30 65 50 75 50 75Z" 
      stroke="#1E40AF" 
      strokeWidth="6" 
      fill="#1E40AF1A"
      strokeLinejoin="round" 
    />
    {/* Checkmark */}
    <path d="M40 48L47 55L60 40" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrustVaultIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="45" stroke="#1E40AF" strokeWidth="6" />
    {/* Lock Body */}
    <rect x="30" y="45" width="40" height="32" rx="4" stroke="#1E40AF" strokeWidth="6" fill="#1E40AF33" />
    {/* Shackle */}
    <path d="M40 45V35C40 29.4772 44.4772 25 50 25C55.5228 25 60 29.4772 60 35V45" stroke="#1E40AF" strokeWidth="6" strokeLinecap="round" />
    {/* Keyhole */}
    <circle cx="50" cy="61" r="4" fill="white" />
    <path d="M50 65V70" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TrustAutoRedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="42" stroke="#1E40AF" strokeWidth="5" />
    <circle cx="50" cy="50" r="28" stroke="#1E40AF" strokeWidth="3" />
    {/* Crosshair Lines */}
    <path d="M50 5V20M50 80V95M5 50H20M80 50H95" stroke="#1E40AF" strokeWidth="5" strokeLinecap="round" />
    {/* Inner Shield */}
    <path 
      d="M50 65C50 65 62 58 62 45V35L50 30L38 35V45C38 58 50 65 50 65Z" 
      fill="#1E40AF" 
      stroke="#1E40AF" 
      strokeWidth="2" 
    />
  </svg>
);
