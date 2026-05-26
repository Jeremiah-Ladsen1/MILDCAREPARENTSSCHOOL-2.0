/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AboutUs from './components/AboutUs';
import InteractiveHub from './components/InteractiveHub';
import ReadinessQuiz from './components/ReadinessQuiz';
import AdmissionsContact from './components/AdmissionsContact';
import ParentPortal from './components/ParentPortal';
import StudentExcellence from './components/StudentExcellence';
import { faqs, articles, events } from './data';
import { 
  Lock, KeyRound, CheckCircle, GraduationCap, Phone, 
  Mail, MapPin, ArrowRight, BookOpen, AlertCircle, Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showPortalLogin, setShowPortalLogin] = useState<boolean>(false);
  const [portalLoggedIn, setPortalLoggedIn] = useState<boolean>(false);
  
  // Login input triggers
  const [portalRegNo, setPortalRegNo] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  // FAQ state
  const [activeFaqIdx, setActiveFaqIdx] = useState<string | null>(null);
  const [faqCategory, setFaqCategory] = useState<'All' | 'Admissions' | 'Academics' | 'Fees' | 'Facilities'>('All');

  // Staggered layout animations or slide triggers on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handlePortalLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = portalRegNo.trim().toUpperCase();
    
    if (cleanCode === 'MCPS/2024/0932' || cleanCode === 'LIAM' || cleanCode === 'GUEST' || cleanCode === 'CHLOE') {
      setPortalLoggedIn(true);
      setShowPortalLogin(false);
      setActiveTab('portal');
      setLoginError('');
    } else {
      setLoginError('Invalid Registry Code. Tip: Type "GUEST" or "LIAM" to log in instantly.');
    }
  };

  const handleOpenPortal = () => {
    if (portalLoggedIn) {
      setActiveTab('portal');
    } else {
      setPortalRegNo('GUEST'); // prefill for easy access
      setShowPortalLogin(true);
    }
  };

  const filteredFaqs = faqCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === faqCategory);

  return (
    <div className="min-h-screen bg-white relative flex flex-col font-sans selection:bg-amber-100 selection:text-amber-800" id="app-root">
      
      {/* Top Header & Dual Navigation Strip */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenPortal={handleOpenPortal} 
        portalLoggedIn={portalLoggedIn}
      />

      {/* Main Core View Router switcher */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-300" id="home-view">
            
            {/* Hero Main fold Section */}
            <Hero onNavigate={setActiveTab} onOpenPortal={handleOpenPortal} />

            {/* Teaser Sections for other tabs */}
            
            {/* Quick Programs Grid Teaser */}
            <div className="w-full py-16 px-4 md:px-8 bg-gray-50 text-left border-y border-gray-100">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#1E5FAD] uppercase tracking-wider block">Academics Portfolio</span>
                    <h3 className="font-display font-extrabold text-[#0B2147] text-2xl sm:text-3xl tracking-tight">Our Milestone Learning Pathways</h3>
                  </div>
                  <button 
                    onClick={() => setActiveTab('programs')}
                    className="group text-xs font-display font-bold text-[#1E5FAD] hover:text-[#0B2147] transition flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <span>View Curriculum Details</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Nursery class teaser */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase leading-none tracking-wide text-left inline-block">Baby &bull; Middle &bull; Top</span>
                    <h4 className="font-display font-bold text-[#0B2147] text-lg">Nursery Division Care</h4>
                    <p className="text-xs text-gray-450 leading-relaxed">Systematic motor control playrooms, basic phonics training sounds, nutrition programs, and low caretaker allocations.</p>
                  </div>
                  
                  {/* Pre Primary Class teaser */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase leading-none tracking-wide text-left inline-block">Milestone Bridging</span>
                    <h4 className="font-display font-bold text-[#0B2147] text-lg">Pre-Primary Preparatory</h4>
                    <p className="text-xs text-gray-450 leading-relaxed">Structured phonics reading diaries, simple mental arithmetic, weekly swimming classes, and early scientific inquiry.</p>
                  </div>

                  {/* Primary classes teaser */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase leading-none tracking-wide text-left inline-block">UNEB Prep Tracking</span>
                    <h4 className="font-display font-bold text-[#0B2147] text-lg">Primary Education (P1 – P7)</h4>
                    <p className="text-xs text-gray-450 leading-relaxed">Rigorous national curriculum, basic scratch computer keys coding workshops, sports leagues, and intensive examiners coaching.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Testimonial Video Wall / Feedback Hub */}
            <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto text-left" id="testimonials-hub">
              <div className="text-center space-y-3 mb-12">
                <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                  Parent Advocates
                </span>
                <h3 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight">
                  What Kampala Families Say About Mild Care
                </h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
                <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed text-center">
                  Review verified statements from families whose children completed our primary and nursery care divisions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:scale-101 transition-all flex flex-col justify-between">
                  <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed font-serif">
                    "Transitioning our daughter Chloe to Primary levels was flawless. By Middle Class, she had already established solid Jolly Phonics rules allowing her to read complete headlines independently. The computer labs are outstanding!"
                  </p>
                  <div className="pt-5 border-t border-gray-150 flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 bg-amber-400 rounded-full text-[#0B2147] font-bold font-display text-xs flex justify-center items-center shrink-0">
                      MK
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-[#0B2147] text-xs">Madame Kemigisha Maureen</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Chloe's Mom (Primary Two Scholar)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:scale-101 transition-all flex flex-col justify-between">
                  <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed font-serif">
                    "Mild Care provides unparalleled safety records. Their shuttle bus services are staffed with reliable attendants who buckle our son diligently. Furthermore, the solar heated pool means swimming is healthy and warm year-round."
                  </p>
                  <div className="pt-5 border-t border-gray-150 flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 bg-[#1E5FAD] rounded-full text-white font-bold font-display text-xs flex justify-center items-center shrink-0">
                      JS
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-[#0B2147] text-xs">Mr. Ssenyange Justine</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Liam's Father (Pre-Primary Top Class)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:scale-101 transition-all flex flex-col justify-between">
                  <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed font-serif">
                    "Their installment financial ledgers and transparency represent tremendous help to parents. Rather than charging rigid fees in Week One, they support us with flexible mid-term allocations. The teachers write diary logs daily."
                  </p>
                  <div className="pt-5 border-t border-gray-150 flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 bg-emerald-500 text-white font-bold font-display text-xs flex justify-center items-center shrink-0">
                      RN
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-[#0B2147] text-xs">Madame Rebecca Nabossa</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Alumni Parent (Munyonyo Developer)</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Student Excellence Slide Showcase Channel */}
            <StudentExcellence />

            {/* Child Development Hub Highlights */}
            <div className="w-full py-16 px-4 md:px-8 bg-gray-50 text-left border-y border-gray-100" id="blogs-hub">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                    Educational Blog Series
                  </span>
                  <h3 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight">
                    Nurturing Early Developmental Milestones
                  </h3>
                  <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {articles.map((art) => (
                    <div 
                      key={art.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-left flex flex-col justify-between"
                    >
                      <div className="w-full h-48 relative overflow-hidden shrink-0">
                        <img src={art.image} alt={art.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <span className="absolute top-3 left-3 bg-[#0B2147]/90 text-amber-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded leading-none">
                          {art.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-3.5 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <p className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">{art.date} &bull; {art.readTime}</p>
                          <h4 className="font-display font-bold text-[#0B2147] text-sm md:text-base leading-snug tracking-tight">
                            {art.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                            {art.summary}
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveTab('interactive')}
                          className="pt-2.5 border-t border-gray-100 text-left text-xs font-bold text-[#1E5FAD] hover:underline cursor-pointer flex items-center justify-between"
                        >
                          <span>Explore Gated Guides inside</span>
                          <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* School Events and Calendar */}
            <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto text-left" id="events-hub">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Upcoming Events (Lg: 8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2 pb-2 border-b border-gray-150">
                    <span className="text-xs font-bold text-[#1E5FAD] uppercase tracking-wider">Activity Calendars</span>
                    <h3 className="font-display font-extrabold text-[#0B2147] text-xl md:text-2.5xl leading-tight">Term II Active Excursions Schedules</h3>
                  </div>

                  <div className="space-y-4">
                    {events.map((evt) => (
                      <div 
                        key={evt.id}
                        className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm flex gap-4 text-left hover:border-blue-100 transition-all cursor-pointer"
                      >
                        {/* Event Date badge block */}
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex flex-col justify-center items-center text-center shrink-0 border border-blue-100">
                          <span className="font-display font-black text-xs md:text-sm text-[#0B2147] leading-none mb-0.5">{evt.date.split(' ')[1].slice(0, 2)}</span>
                          <span className="font-mono text-[9px] text-[#1E5FAD] font-bold uppercase tracking-widest">{evt.date.split(' ')[0]}</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans font-bold text-[#0B2147] text-sm md:text-base leading-tight">{evt.title}</h4>
                          <p className="text-[11px] text-gray-400 font-semibold uppercase">{evt.time} &bull; Classification: <strong className="text-[#1E5FAD] font-bold uppercase">{evt.category}</strong></p>
                          <p className="text-xs text-gray-500 leading-normal pt-1">{evt.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Teaser accordion (Lg: 4 Cols) */}
                <div className="lg:col-span-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-6" id="faq-accordions">
                  <div className="space-y-1 block border-b border-gray-200 pb-3">
                    <span className="text-xs font-bold text-[#1E5FAD] uppercase tracking-wider">Frequent Queries</span>
                    <h4 className="font-display font-bold text-[#0B2147] text-base md:text-lg">Academics &amp; Logistics FAQs</h4>
                  </div>

                  {/* FAQ list */}
                  <div className="space-y-3.5">
                    {faqs.slice(0, 3).map((item) => {
                      const isOpen = activeFaqIdx === item.id;
                      return (
                        <div 
                          key={item.id}
                          className="bg-white rounded-xl border border-gray-100 shadow-sm"
                          id={`faq-item-${item.id}`}
                        >
                          <button
                            onClick={() => setActiveFaqIdx(isOpen ? null : item.id)}
                            className="w-full p-4 text-left font-display font-bold text-xs sm:text-sm text-gray-800 flex justify-between items-center cursor-pointer hover:text-[#1E5FAD]"
                          >
                            <span>{item.question}</span>
                            <span className="text-gray-400 text-sm font-extrabold">{isOpen ? '−' : '+'}</span>
                          </button>
                          
                          {isOpen && (
                            <div className="px-4 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-2.5 animate-in slide-in-from-top duration-150">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="w-full text-center text-xs font-display font-bold text-[#0B2147] hover:underline flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Read all FAQs &amp; Inquire</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Outer Switch Tabs views */}
        {activeTab === 'programs' && (
          <Programs onSelectProgram={() => {}} onNavigate={setActiveTab} />
        )}

        {activeTab === 'about' && (
          <AboutUs />
        )}

        {activeTab === 'interactive' && (
          <InteractiveHub />
        )}

        {activeTab === 'quiz' && (
          <ReadinessQuiz />
        )}

        {activeTab === 'admissions' && (
          <AdmissionsContact />
        )}

        {activeTab === 'portal' && (
          <ParentPortal />
        )}
      </main>

      {/* Modern High-End Educational Footer layout */}
      <footer className="w-full bg-[#07162E] text-slate-300 font-sans border-t-8 border-amber-400 py-12 px-4 md:px-8 text-left" id="main-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-amber-400 flex items-center justify-center font-bold">
                🎓
              </div>
              <span className="font-display font-extrabold text-white tracking-tight uppercase">MILD CARE PARENTS SCHOOL</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Nurturing hearts and raising excellent leaders with top-tier Jolly Phonics, certified UNEB prep classes, swimming academy, and information computer suites.
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-left">
            <p className="font-display font-bold text-white uppercase tracking-wider text-sm">Quick Navigation</p>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-amber-400 transition cursor-pointer">Homepage Hub</button></li>
              <li><button onClick={() => setActiveTab('programs')} className="hover:text-amber-400 transition cursor-pointer">Milestone Programs</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-amber-400 transition cursor-pointer">School History &amp; Team</button></li>
              <li><button onClick={() => setActiveTab('interactive')} className="hover:text-amber-400 transition cursor-pointer">Explore Cost Estimators</button></li>
              <li><button onClick={() => setActiveTab('quiz')} className="hover:text-amber-400 transition cursor-pointer">Readiness Assessment</button></li>
              <li><button onClick={() => setActiveTab('admissions')} className="hover:text-amber-400 transition cursor-pointer">Admissions Tour Bookings</button></li>
            </ul>
          </div>

          <div className="space-y-3.5 text-xs text-left font-sans">
            <p className="font-display font-bold text-white uppercase tracking-wider text-sm">Target Contacts</p>
            <p className="text-slate-400">Cape Road, Munyonyo near Commonwealth Resort &bull; Kampala, Uganda</p>
            <p className="text-slate-400 flex flex-col gap-0.5 space-y-0.5 mt-0.5">
              <span>Registrar line: +256 702 987654</span>
              <span>Information line: +256 772 123456</span>
              <span>Email: admissions@mildcareparents.com</span>
            </p>
          </div>

          <div className="space-y-4.5 text-xs text-left">
            <p className="font-display font-bold text-white uppercase tracking-wider text-sm">Governance &bull; UNEB approved</p>
            <p className="text-slate-400 leading-relaxed">
              We operate strictly certified early childcare methods compliant with Ministry of Education standards. License Registry ID: UNEB/No. 2012/MCPS.
            </p>
            <div className="flex gap-2 font-display font-bold text-[10px] uppercase tracking-widest text-[#38BDF8]">
              <span>🛡 SAFETY CERTIFIED</span>
              <span>&bull;</span>
              <span>☘ HYGIENE SECURED</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Mild Care Parents School, Munyonyo. All rights reserved.</p>
          <div className="flex gap-4 justify-center">
            <span className="hover:underline">Privacy compliance rules</span>
            <span>&bull;</span>
            <span className="hover:underline">Parent agreements</span>
          </div>
        </div>
      </footer>

      {/* DIALOG 1: Parent Portal Login (Overlay locked view) */}
      {showPortalLogin && (
        <div className="fixed inset-0 bg-slate-950/90 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200" id="portal-login-overlay">
          <div className="bg-[#0B2147] text-white rounded-2xl border border-blue-900 w-full max-w-sm overflow-hidden text-left shadow-2xl p-6 md:p-8 space-y-5 relative">
            
            <button 
              onClick={() => setShowPortalLogin(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white font-extrabold cursor-pointer text-xs"
            >
              ✖
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center mx-auto text-xl shadow-md border-2 border-white">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-white text-lg sm:text-lg uppercase tracking-wider">Unlock Parents Portal</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Access private scholar progression registers, test marks diaries, financial ledgers, and direct teacher chat lines.</p>
            </div>

            <form onSubmit={handlePortalLoginSubmit} className="space-y-4 text-xs text-gray-300">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Input Scholar Registry Code / Password</label>
                <input 
                  type="text" 
                  required
                  value={portalRegNo}
                  onChange={(e) => setPortalRegNo(e.target.value)}
                  placeholder="e.g. MCPS/2024/0932 or type 'LIAM'"
                  className="w-full bg-slate-950 border border-slate-800 p-3.5 rounded-xl text-xs text-white outline-none focus:border-amber-400 font-mono text-center font-bold tracking-widest uppercase text-amber-300"
                />
              </div>

              {loginError && (
                <p className="text-red-400 font-semibold text-[11px] leading-tight text-center flex items-center justify-center gap-1">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </p>
              )}

              <button
                type="submit"
                className="w-full text-center font-display font-bold text-xs text-slate-950 bg-[#FACC15] hover:bg-amber-400 py-3.5 rounded-xl uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 border-t border-amber-300 font-black shadow"
              >
                <KeyRound className="w-4 h-4 text-slate-950" />
                <span>Gain Authorative Entrance</span>
              </button>

              {/* Login Tips help text */}
              <div className="p-3 bg-blue-950/60 border border-blue-900 rounded-lg text-[10px] text-gray-400 leading-relaxed">
                <strong>Tip</strong>: To log in instantly as guest, type <strong className="text-[#38BDF8]">GUEST</strong> or <strong className="text-amber-400">LIAM</strong> or <strong className="text-amber-400">CHLOE</strong> and press the entrance button.
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
