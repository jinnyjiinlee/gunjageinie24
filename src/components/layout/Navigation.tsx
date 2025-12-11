'use client';

import { useState } from 'react';

const menuItems = [
  { href: '#story', label: '스토리' },
  { href: '#about', label: '소개' },
  { href: '#seats', label: '좌석' },
  { href: '#price', label: '가격표' },
  { href: '#posters', label: '포스터' },
  { href: '#location', label: '위치' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopMenu />
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <a href="#" className="font-bold">
      <span className="text-white text-sm sm:text-lg md:text-xl">군자역</span>{' '}
      <span className="neon-text text-sm sm:text-lg md:text-xl">지니24</span>{' '}
      <span className="text-gray-400 text-xs sm:text-sm md:text-base">스터디카페</span>
    </a>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-400 hover:text-[#00FF88] transition"
        >
          {item.label}
        </a>
      ))}
      <CTAButton />
    </div>
  );
}

function CTAButton() {
  return (
    <a
      href="https://www.millionz.co.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
    >
      이용하기
    </a>
  );
}

function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button className="md:hidden p-2 text-white" onClick={onClick}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-400"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://www.millionz.co.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold text-center"
        >
          이용하기
        </a>
      </div>
    </div>
  );
}
