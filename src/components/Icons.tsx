import React from 'react';

const SedGradient = () => (
  <defs>
    <linearGradient id="sedGradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#3B82F6" />
      <stop offset="100%" stopColor="#10B981" />
    </linearGradient>
  </defs>
);

export const SedMainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <SedGradient />
    
    {/* Speed Trails / Track Lines indicating High-Speed Motion */}
    <path d="M 5 30 L 15 30 M 8 70 L 22 70 M 12 85 L 28 85" stroke="url(#sedGradient)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 4" opacity="0.6" />
    <path d="M 2 50 L 18 50" stroke="url(#sedGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    
    {/* Helmet Outer Aerodynamic Shell */}
    {/* Streamlined drop shape leaning forward into the speed */}
    <path d="M 30 82 C 12 60 25 15 60 15 C 80 15 92 28 95 48 C 96 60 90 75 80 82 C 60 92 40 88 30 82 Z" stroke="url(#sedGradient)" strokeWidth="4" strokeLinejoin="round" />

    {/* Dynamic Dark Visor - Aggressive Racing Field of View */}
    <path d="M 94 45 C 70 38 45 42 40 55 C 36 65 42 75 60 76 C 75 77 88 72 93 62 C 94 56 94.5 50 94 45 Z" fill="url(#sedGradient)" fillOpacity="0.15" stroke="url(#sedGradient)" strokeWidth="3" strokeLinejoin="round" />

    {/* Sharp Tech Flow Lines / Aerodynamic contour curve on jaw */}
    <path d="M 34 81 C 45 74 60 78 72 75" stroke="url(#sedGradient)" strokeWidth="2" strokeLinecap="round" />
    
    {/* Rear Vents / Exhaust Wings breaking wind resistance */}
    <path d="M 23 40 L 10 40 M 20 52 L 4 52 M 22 64 L 12 64" stroke="url(#sedGradient)" strokeWidth="3" strokeLinecap="round" />

    {/* Inner Hub / AI Node (The Agent's "Visual Processing Eye") */}
    <circle cx="55" cy="58" r="3" fill="url(#sedGradient)" />
    <circle cx="70" cy="52" r="1.5" fill="url(#sedGradient)" />
    <circle cx="45" cy="65" r="1.5" fill="url(#sedGradient)" />
    <path d="M 45 65 L 55 58 L 70 52" stroke="url(#sedGradient)" strokeWidth="1.5" strokeLinecap="round" />

    {/* "AI" Insignia subtly engraved on the upper side temple */}
    <text x="58" y="34" fontSize="13" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="url(#sedGradient)">AI</text>
  </svg>
);

export const SedGatewayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <SedGradient />
    <path d="M 42 85 A 35 35 0 1 1 58 85" stroke="url(#sedGradient)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 50 90 L 50 20 M 35 35 L 50 20 L 65 35" stroke="url(#sedGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SedAuthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <SedGradient />
    {/* Shield */}
    <path d="M 50 15 L 20 25 V 45 C 20 65 50 85 50 85 C 50 85 80 65 80 45 V 25 L 50 15 Z" stroke="url(#sedGradient)" strokeWidth="4" strokeLinejoin="round" />
    {/* Checkmark */}
    <path d="M 38 52 L 46 60 L 65 40" stroke="url(#sedGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Circuit trace 1 */}
    <circle cx="15" cy="45" r="3" fill="url(#sedGradient)" />
    <path d="M 15 45 L 30 45 L 40 35" stroke="url(#sedGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="35" r="3" fill="url(#sedGradient)" />
    {/* Circuit trace 2 */}
    <circle cx="85" cy="70" r="3" fill="url(#sedGradient)" />
    <path d="M 85 70 L 70 70 L 60 60" stroke="url(#sedGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="60" cy="60" r="3" fill="url(#sedGradient)" />
  </svg>
);

export const SedVaultIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <SedGradient />
    <circle cx="50" cy="50" r="35" stroke="url(#sedGradient)" strokeWidth="4" />
    <rect x="35" y="45" width="30" height="25" rx="4" stroke="url(#sedGradient)" strokeWidth="4" />
    <path d="M 40 45 V 35 C 40 28 60 28 60 35 V 45" stroke="url(#sedGradient)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="54" r="3" fill="url(#sedGradient)" />
    <path d="M 49 54 L 48 62 H 52 L 51 54 Z" fill="url(#sedGradient)" />
  </svg>
);

export const SedAutoRedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <SedGradient />
    {/* Concentric Rings */}
    <circle cx="50" cy="50" r="35" stroke="url(#sedGradient)" strokeWidth="4" />
    <circle cx="50" cy="50" r="22" stroke="url(#sedGradient)" strokeWidth="4" />
    {/* Crosshairs */}
    <path d="M 50 5 V 25 M 50 75 V 95 M 5 50 H 25 M 75 50 H 95" stroke="url(#sedGradient)" strokeWidth="4" strokeLinecap="round" />
    {/* Center Shield (small) */}
    <path d="M 50 35 L 42 38 V 48 C 42 55 50 62 50 62 C 50 62 58 55 58 48 V 38 L 50 35 Z" stroke="url(#sedGradient)" strokeWidth="3" strokeLinejoin="round" />
    {/* Checkmark */}
    <path d="M 46 50 L 49 53 L 54 46" stroke="url(#sedGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
