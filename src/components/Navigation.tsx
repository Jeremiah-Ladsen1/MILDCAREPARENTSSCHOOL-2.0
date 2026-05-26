/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, User, Clock, Menu, X, 
  Sparkles, ShieldCheck, Compass, MessageSquare, PhoneCall, HelpCircle
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPortal: () => void;
  portalLoggedIn: boolean;
}

export default function Navigation({ activeTab, setActiveTab, onOpenPortal, portalLoggedIn }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 35, hours: 14, minutes: 22, seconds: 5 });

  // Countdown timer to July 1, 2026 (Intake deadline)
  useEffect(() => {
    const targetDate = new Date('2026-07-01T00:00:00Z').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'about', label: 'About & Team' },
    { id: 'interactive', label: 'Explore Hub' },
    { id: 'quiz', label: 'Readiness Quiz' },
    { id: 'admissions', label: 'Admissions & Contact' },
  ];

  return (
    <header className="w-full relative z-50 shadow-sm font-sans" id="main-header">
      {/* Upper Ribbon: Contact & Quick Info */}
      <div className="w-full bg-[#0B2147] text-gray-200 text-xs py-2 px-4 md:px-8 flex flex-wrap justify-between items-center border-b border-[#1A3668] gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="hover:text-amber-300 transition-colors">Cape Road, Munyonyo, Kampala</span>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <a href="tel:+256702987654" className="hover:text-amber-300 transition-colors">+256 702 987654</a>
          </span>
          <span className="flex items-center gap-1 hidden lg:inline-flex">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <a href="mailto:admissions@mildcareparents.com" className="hover:text-amber-300 transition-colors">info@mildcareparents.com</a>
          </span>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          {/* Urgency countdown indicator */}
          <div className="flex items-center gap-2 bg-[#1E3B70] px-2.5 py-1 rounded text-[10px] md:text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-semibold text-amber-400">Term II Intake Closes In:</span>
            <span className="font-mono bg-[#0B2147] px-1 py-0.5 rounded text-white">{timeLeft.days}d</span>
            <span className="font-mono bg-[#0B2147] px-1 py-0.5 rounded text-white">{timeLeft.hours}h</span>
            <span className="font-mono bg-[#0B2147] px-1 py-0.5 rounded text-white">{timeLeft.minutes}m</span>
            <span className="font-mono bg-[#0B2147] px-1 py-0.5 rounded text-white">{timeLeft.seconds}s</span>
          </div>

          <button 
            id="nav-lock-portal-btn"
            onClick={onOpenPortal}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-[#0B2147] hover:text-white font-bold px-3 py-1 rounded transition-all duration-200 cursor-pointer shadow-sm text-[10px] md:text-xs tracking-wide uppercase"
          >
            <User className="w-3.5 h-3.5" />
            {portalLoggedIn ? 'My Parent Portal' : 'Parent Portal'}
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <nav className="w-full bg-white border-b border-gray-100 py-3.5 px-4 md:px-8 flex justify-between items-center transition-all duration-200">
        {/* Brand Logo */}
        <div 
          onClick={() => { setActiveTab('home'); }}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
          id="brand-logo"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-tr from-[#0F376A] to-[#1E5FAD] flex justify-center items-center shadow-md shadow-blue-100 group-hover:scale-105 transition-all">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-[#0B2147] text-md md:text-lg leading-tight tracking-tight">
                MILD CARE
              </span>
              <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-amber-200 uppercase">
                Early Years
              </span>
            </div>
            <p className="text-[10px] text-gray-500 tracking-wider font-semibold uppercase leading-none md:leading-normal">
              Parents School &bull; Munyonyo
            </p>
          </div>
        </div>

        {/* Brand Bar Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('admissions')}
            className="hidden sm:inline-flex font-display font-semibold text-xs text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow shadow-green-100 px-4.5 py-2.5 rounded-full uppercase tracking-wider transition-all cursor-pointer border-t border-emerald-400"
          >
            Apply Online
          </button>
          
          <button
            onClick={onOpenPortal}
            className="font-display font-bold text-xs text-[#0B2147] bg-amber-400 hover:bg-amber-500 px-4 py-2.5 rounded-full uppercase tracking-wider transition-all cursor-pointer border-t border-amber-300 shadow-sm"
          >
            {portalLoggedIn ? 'My Portal Dashboard' : 'Open Portal'}
          </button>
        </div>
      </nav>

      {/* Horizontal Navigation Grid (Easy Accessibility across the entire website) */}
      <div className="w-full bg-white border-b border-gray-150 relative" id="horizontal-navigation-grid bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-gray-100 border-x border-gray-100">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const navConfig: Record<string, { icon: React.ReactNode; desc: string }> = {
              home: { icon: <Compass className="w-4 h-4" />, desc: 'Munyonyo Main Desk' },
              programs: { icon: <GraduationCap className="w-4 h-4" />, desc: 'Milestone Curriculums' },
              about: { icon: <ShieldCheck className="w-4 h-4" />, desc: 'About & Faculty Team' },
              interactive: { icon: <Sparkles className="w-4 h-4" />, desc: '360° & Fee Calculators' },
              quiz: { icon: <HelpCircle className="w-4 h-4" />, desc: 'Development Assessment' },
              admissions: { icon: <MessageSquare className="w-4 h-4" />, desc: 'Campus Tours & Inquire' },
            };
            const itemConf = navConfig[item.id] || { icon: <Compass className="w-4 h-4" />, desc: 'Explore Page' };
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                }}
                className={`flex flex-col items-center justify-center py-4 px-3 text-center transition-all duration-200 cursor-pointer relative select-none ${
                  isActive 
                    ? 'bg-blue-50/70 text-[#1E5FAD]' 
                    : 'text-gray-600 hover:text-[#1E5FAD] hover:bg-gray-50/60'
                }`}
              >
                {/* Visual Active top-bar indicator */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#111827] to-[#1E5FAD]"></div>
                )}
                
                <div className="flex items-center gap-2 mb-1">
                  <span className={`p-1 rounded-md transition-colors ${isActive ? 'bg-blue-100/60 text-[#1E5FAD]' : 'bg-gray-100 text-gray-500'}`}>
                    {itemConf.icon}
                  </span>
                  <span className="font-display font-extrabold text-[#0B2147] text-xs md:text-sm tracking-tight">
                    {item.label}
                  </span>
                </div>
                
                <span className="text-[10px] text-gray-400 font-medium leading-none hidden sm:inline-block max-w-[155px] truncate">
                  {itemConf.desc}
                </span>

                {item.id === 'quiz' && (
                  <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E5FAD] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E5FAD]"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
