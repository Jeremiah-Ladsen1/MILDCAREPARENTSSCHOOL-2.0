/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calculator, Compass, Clock, Award, CheckCircle, Shield, 
  Sparkles, Coins, Users, ArrowRight, Check 
} from 'lucide-react';

export default function InteractiveHub() {
  const [activeSubTab, setActiveSubTab] = useState<'360' | 'simulator' | 'calculator'>('360');

  // --- 360 Tour State ---
  const [activeScene, setActiveScene] = useState<'classroom' | 'pool' | 'lab' | 'garden'>('classroom');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const tourScenes = {
    classroom: {
      title: 'Our Nursery Classroom & Reading Niche',
      image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=1200',
      hotspots: [
        { id: 'h1', label: 'Jolly Phonics Wall', top: '25%', left: '40%', text: 'Fully decorated soundboard panel containing sensory textures for all 42 primary phonetic phonemes.' },
        { id: 'h2', label: 'Anti-injury Soft Flooring', top: '75%', left: '50%', text: 'Dense thick rubberized padded tiles that absorb heavy falls completely, protecting young toddlers.' },
        { id: 'h3', label: 'Kids Library Corner', top: '45%', left: '80%', text: 'Stocked with 300+ child development books, picture catalogs, and cozy giant floor cushions.' }
      ]
    },
    pool: {
      title: 'Under-12 Aquatic Sanctuary',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200',
      hotspots: [
        { id: 'hp1', label: 'Solar Heating Panels', top: '20%', left: '60%', text: 'Continuous thermal recycling loops that maintain water temperatures at a warm, infant-safe 28°C.' },
        { id: 'hp2', label: 'Certified Lifeguard Bay', top: '35%', left: '20%', text: 'Occupied by two certified water-rescue professionals during all instructional hours.' },
        { id: 'hp3', label: 'Beginner Shallow Platform', top: '65%', left: '45%', text: 'A gently sloped 0.4-meter ledge allowing nervous toddlers of 3 years old to build initial splash confidence.' }
      ]
    },
    lab: {
      title: 'Digital Computer & Logic Suite',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
      hotspots: [
        { id: 'hl1', label: 'Logic Coding Workbenches', top: '40%', left: '30%', text: 'Fitted with Scratch Jr and MIT App Inventor logic card systems for screen-free coding algorithms.' },
        { id: 'hl2', label: 'Pedagogical internet Filter', top: '15%', left: '70%', text: 'Enterprise-grade firewall banning all outside network addresses, sealing scholars in safe kid-learning portals.' }
      ]
    },
    garden: {
      title: 'Organic Botanical Lab gardens',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
      hotspots: [
        { id: 'hg1', label: 'Toddler Seedling Beds', top: '60%', left: '25%', text: 'Assigned garden patches where pupils plant beans and maize to track daily botanical growth rates.' },
        { id: 'hg2', label: 'Scented Herbal Zone', top: '40%', left: '60%', text: 'Filled with mint, rosemary, and lemongrass to stimulate sensory smell pathways for nursery kids.' }
      ]
    }
  };

  // --- Day Simulator State ---
  const [activeHour, setActiveHour] = useState(0);
  const dayTimeline = [
    { time: '7:30 AM', title: 'Arrival & Sanitization Bay Check', desc: 'Teachers conduct rapid clinical eyes/touch checks while children step through sanitization lanes. Safe, reassuring start to their day.', quote: '"Morning assembly builds our moral focus: we sing regional anthems and share our daily targets!"' },
    { time: '8:30 AM', title: 'Interactive Reading & Jolly Phonics Circles', desc: 'Primary sounds chanting, physical air-spelling drills, and storytelling workshops. A noisy, joyful, high-energy brain workout.', quote: '"We study sounds with funny movements. I already can blend three-letter words all by myself!"' },
    { time: '10:30 AM', title: 'Fruit Platter Refreshment & Outdoor Care', desc: 'Children wash hands thoroughly to eat sliced papayas and watermelon, then migrate to climb towers or build custom sandcastles.', quote: '"Fruit hour is sweet! After eating, we race up the wooden Play Castle with coach Juma."' },
    { time: '12:00 PM', title: 'Mathematics & Early Digital Logic Labs', desc: 'Connecting shapes to real-world objects, solving physical balance puzzles, and executing simple kids Coding exercises in the computer lab.', quote: '"Computer class is my absolute favorite. I can program my digital frog to jump around on the screens!"' },
    { time: '1:00 PM', title: 'Nutritious Hot lunch & Nap/Clubs session', desc: 'Steaming matooke, groundnut paste, rice, and fresh vegetables are served. Nursery children drift into air-conditioned nap bags; primary classes head to Chess, Music, or swimming.', quote: '"Lunch is very delicious. Swimming is next, and our solar water feels like an warm bath!"' },
    { time: '4:30 PM', title: 'Orderly Commuter boarding & Safe Dispatch', desc: 'Children gather bags under checklist systems. Commuter shuttle attendants buckle coordinates securely into our school vans, checking off home keys.', quote: '"Nearing home, the bus caretaker reads us a story. They only hand me over to parents holding ID keycards."' }
  ];

  // --- Cost Calculator State ---
  const [gradeLevel, setGradeLevel] = useState<'nursery' | 'pre-primary' | 'primary'>('nursery');
  const [shuttleZone, setShuttleZone] = useState<'none' | 'zone1' | 'zone2' | 'zone3'>('none');
  const [advancedClubs, setAdvancedClubs] = useState({ swimming: false, coding: false, music: false });
  const [clearingWeekOne, setClearingWeekOne] = useState(false);
  const [referrals, setReferrals] = useState(0);
  const [siblings, setSiblings] = useState(0); // number of concurrently enrolled siblings

  // Constants mapping values in UGX
  const baseFees = { nursery: 750000, 'pre-primary': 850000, primary: 1100000 };
  const shuttleFees = { none: 0, zone1: 180000, zone2: 280000, zone3: 380000 };
  const clubPrices = { swimming: 120000, coding: 95000, music: 70000 };
  const referralDiscountAmount = 50000; // max discount per referral

  const calculatedBase = baseFees[gradeLevel];
  const calculatedShuttle = shuttleFees[shuttleZone];
  const calculatedClubs = 
    (advancedClubs.swimming ? clubPrices.swimming : 0) + 
    (advancedClubs.coding ? clubPrices.coding : 0) + 
    (advancedClubs.music ? clubPrices.music : 0);

  const subTotalBeforeDiscount = calculatedBase + calculatedShuttle + calculatedClubs;
  
  const earlyDiscount = clearingWeekOne ? Math.round(calculatedBase * 0.05) : 0;
  const referralDiscount = Math.min(referrals * referralDiscountAmount, 150000); // capped at 3 referrals / 150k
  const siblingDiscountPercent = siblings === 1 ? 0.10 : siblings === 2 ? 0.15 : siblings >= 3 ? 0.20 : 0;
  const siblingDiscount = Math.round(calculatedBase * siblingDiscountPercent);
  const totalDiscounts = earlyDiscount + referralDiscount + siblingDiscount;
  
  const finalTermCost = Math.max(subTotalBeforeDiscount - totalDiscounts, 300000);
  const finalTermCostUSD = Math.round(finalTermCost / 3750); // standard rate 3750 UGX per USD

  return (
    <div className="w-full bg-gray-50 font-sans py-12 md:py-16 px-4 md:px-8 border-b border-gray-100 text-left" id="interactive-hub-page">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Mild Care Interactive Hub
          </span>
          <h2 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight">
            Explore Mild Care Virtual Utilities
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Try our interactive gadgets to step into our classrooms, track a typical school day timetable, or estimate tuition fees instantly.
          </p>
        </div>

        {/* Local Toggle Header */}
        <div className="flex border-b border-gray-200 justify-center gap-2 max-w-2xl mx-auto mb-10 bg-white p-2 rounded-xl shadow-sm">
          <button 
            onClick={() => setActiveSubTab('360')}
            className={`w-full py-2.5 rounded-lg text-xs md:text-sm font-display font-bold transition-all cursor-pointer ${
              activeSubTab === '360' ? 'bg-[#1E5FAD] text-white shadow' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Virtual 360° Walkthrough
          </button>
          <button 
            onClick={() => setActiveSubTab('simulator')}
            className={`w-full py-2.5 rounded-lg text-xs md:text-sm font-display font-bold transition-all cursor-pointer ${
              activeSubTab === 'simulator' ? 'bg-[#1E5FAD] text-white shadow' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Daily School Day Simulator
          </button>
          <button 
            onClick={() => setActiveSubTab('calculator')}
            className={`w-full py-2.5 rounded-lg text-xs md:text-sm font-display font-bold transition-all cursor-pointer ${
              activeSubTab === 'calculator' ? 'bg-[#1E5FAD] text-white shadow' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Tuition Fee Estimator
          </button>
        </div>

        {/* WIDGET 1: 360 Walkthrough */}
        {activeSubTab === '360' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 animate-in fade-in duration-300" id="tour-360-widget">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Scene Viewport Area */}
              <div className="lg:col-span-8 relative">
                <div className="w-full h-80 sm:h-[450px] rounded-xl overflow-hidden border border-gray-200 relative shadow-inner">
                  
                  {/* Active Scene Panorama */}
                  <img 
                    src={tourScenes[activeScene].image} 
                    alt={tourScenes[activeScene].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-95 filter transition-all duration-500 scale-100"
                  />

                  {/* Panoramic Grid Cover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none"></div>

                  {/* Hotspot Indicators */}
                  {tourScenes[activeScene].hotspots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot.id === activeHotspot ? null : spot.id)}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute w-8 h-8 rounded-full bg-amber-400 text-amber-950 font-bold flex items-center justify-center animate-bounce shadow-lg border border-white cursor-pointer hover:scale-110 active:scale-95 transition-all text-xs"
                    >
                      ★
                    </button>
                  ))}

                  {/* Floating instructions */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-bold py-1.5 px-3 rounded shadow flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>Click stars on screen to inspect equipment</span>
                  </div>

                  {/* Hotspot Details Popup bubble overlay */}
                  {activeHotspot && (() => {
                    const spot = tourScenes[activeScene].hotspots.find(h => h.id === activeHotspot);
                    if (!spot) return null;
                    return (
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0B2147]/95 text-white rounded-xl border border-blue-400/30 text-xs animate-in slide-in-from-bottom duration-250 flex flex-col space-y-1 block max-w-md mx-auto">
                        <div className="flex justify-between items-center pb-1 border-b border-blue-900">
                          <span className="font-bold text-amber-400 uppercase tracking-widest">{spot.label}</span>
                          <button 
                            onClick={() => setActiveHotspot(null)}
                            className="text-gray-300 hover:text-white font-extrabold cursor-pointer text-xs"
                          >
                            ✖
                          </button>
                        </div>
                        <p className="text-gray-200 leading-normal leading-relaxed pt-1.5">{spot.text}</p>
                      </div>
                    );
                  })()}

                </div>
              </div>

              {/* Selection sidebar info */}
              <div className="lg:col-span-4 space-y-6 text-left">
                <span className="text-[10px] font-extrabold text-[#1E5FAD] border border-blue-200 px-2 py-0.5 rounded uppercase bg-blue-50 tracking-wider">
                  Campus Virtual Walk
                </span>
                <h3 className="font-display font-extrabold text-[#0B2147] text-xl md:text-2xl leading-tight">
                  {tourScenes[activeScene].title}
                </h3>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  Stepping physical bounds is not a limit. Switch coordinates below to inspect different rooms, our clean aquatics pool, or physical science gardens.
                </p>

                {/* Switch Selectors List */}
                <div className="flex flex-col gap-2.5">
                  {(Object.keys(tourScenes) as Array<keyof typeof tourScenes>).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveScene(key);
                        setActiveHotspot(null);
                      }}
                      className={`p-3.5 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between cursor-pointer ${
                        activeScene === key
                          ? 'bg-blue-50 border-[#1E5FAD] text-[#1E5FAD]'
                          : 'bg-white border-gray-100 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{tourScenes[key].title.split(' & ')[0].split(' and ')[0]}</span>
                      <span>&rarr;</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* WIDGET 2: Daily School Day Simulator */}
        {activeSubTab === 'simulator' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 animate-in fade-in duration-300" id="school-simulator-widget">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Hour Timeline list (Left Side) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 max-w-fit px-2 py-0.5 rounded uppercase tracking-wider">
                  Chronological Routine
                </span>
                <h3 className="font-display font-bold text-lg text-gray-800">A Day in a Scholar's Life</h3>
                
                <div className="space-y-2 mt-2">
                  {dayTimeline.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveHour(index)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex gap-3.5 items-center cursor-pointer ${
                        activeHour === index
                          ? 'bg-gradient-to-r from-blue-50 to-blue-50/20 border-[#1E5FAD]'
                          : 'bg-white border-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        activeHour === index ? 'bg-[#1E5FAD] text-white' : 'bg-gray-100 text-[#0B2147]'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className={`font-mono font-bold text-xs ${activeHour === index ? 'text-[#1E5FAD]' : 'text-gray-400'}`}>
                          {item.time}
                        </p>
                        <p className="font-sans font-bold text-xs text-gray-800 leading-tight block truncate max-w-[200px] sm:max-w-[300px]">
                          {item.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Milestone Card (Right Side) */}
              <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left space-y-6">
                
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <span className="font-mono text-xs text-[#1E5FAD] font-bold bg-white px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">
                    TIMETABLE STAGE {activeHour + 1} &bull; {dayTimeline[activeHour].time}
                  </span>
                  <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Checked &bull; Child Safety Approved</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display font-extrabold text-[#0B2147] text-xl md:text-2xl leading-tight">
                    {dayTimeline[activeHour].title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {dayTimeline[activeHour].desc}
                  </p>
                </div>

                {/* Animated Direct Child voice quote dialog */}
                <div className="bg-sky-50 border-l-4 border-sky-400 p-4.5 rounded-r-xl">
                  <span className="text-xl leading-none text-sky-400 font-serif mr-1">“</span>
                  <p className="inline text-xs sm:text-sm text-sky-800 italic leading-relaxed font-medium font-serif">
                    {dayTimeline[activeHour].quote.slice(1, -1)}
                  </p>
                  <span className="text-xl leading-none text-sky-400 font-serif ml-1">”</span>
                  <p className="text-[10px] text-sky-600 font-bold uppercase tracking-wider text-right mt-1.5">&#8212; Pre-Primary Scholar, Mild Care</p>
                </div>

                {/* Safety notes */}
                <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold leading-none flex items-center justify-center shrink-0">
                    🛡
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">Sanitization &amp; Safety Assurance</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5">Continuous attendance synchronization with parent notification relays.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* WIDGET 3: Cost Calculator */}
        {activeSubTab === 'calculator' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 animate-in fade-in duration-300" id="cost-calculator-widget">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Input options (Left) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase border border-amber-200 tracking-wider">
                  Ugandan Shillings (UGX) &bull; Transparent Ledger
                </span>
                <h3 className="font-display font-bold text-lg text-gray-800">Configure Your Term Enrollment Plan</h3>

                <div className="space-y-5">
                  
                  {/* Grade Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0B2147] uppercase tracking-wider">1. Select Target Academic Grade</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['nursery', 'pre-primary', 'primary'] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setGradeLevel(level)}
                          className={`p-3 rounded-xl border text-xs font-bold capitalize transition-all cursor-pointer ${
                            gradeLevel === level
                              ? 'bg-blue-50 border-[#1E5FAD] text-[#1E5FAD]'
                              : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {level.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Commuter Shuttle Zone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0B2147] uppercase tracking-wider">2. Safe Commuter Shuttle Service</label>
                    <select
                      value={shuttleZone}
                      onChange={(e) => setShuttleZone(e.target.value as any)}
                      className="w-full text-xs font-semibold text-gray-700 bg-white border border-gray-200 p-3.5 rounded-xl outline-none focus:border-[#1E5FAD]"
                    >
                      <option value="none">No Shuttle Transport needed (Parent drop-off)</option>
                      <option value="zone1">Zone 1 Range: Munyonyo / Buziga &bull; UGX 180,000 / term</option>
                      <option value="zone2">Zone 2 Range: Ggaba / Makindye / Kansanga &bull; UGX 280,000 / term</option>
                      <option value="zone3">Zone 3 Range: central Kampala / Kabalagala &bull; UGX 380,000 / term</option>
                    </select>
                  </div>

                  {/* Advanced Premium Clubs checkboxes */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0B2147] uppercase tracking-wider">3. Premium Athletics &amp; Skill Clubs</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      <button
                        onClick={() => setAdvancedClubs(prev => ({ ...prev, swimming: !prev.swimming }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition-all cursor-pointer ${
                          advancedClubs.swimming ? 'bg-blue-50/55 border-[#1E5FAD] text-[#1E5FAD]' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold">Swim Academy</span>
                          <span className="text-[10px] text-gray-400">+120,000 UGX</span>
                        </div>
                        {advancedClubs.swimming && <Check className="w-4 h-4 text-[#1E5FAD]" />}
                      </button>

                      <button
                        onClick={() => setAdvancedClubs(prev => ({ ...prev, coding: !prev.coding }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition-all cursor-pointer ${
                          advancedClubs.coding ? 'bg-blue-50/55 border-[#1E5FAD] text-[#1E5FAD]' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold">Kids Coding Club</span>
                          <span className="text-[10px] text-gray-400">+95,000 UGX</span>
                        </div>
                        {advancedClubs.coding && <Check className="w-4 h-4 text-[#1E5FAD]" />}
                      </button>

                      <button
                        onClick={() => setAdvancedClubs(prev => ({ ...prev, music: !prev.music }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition-all cursor-pointer ${
                          advancedClubs.music ? 'bg-blue-50/55 border-[#1E5FAD] text-[#1E5FAD]' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold">Music &amp; Drama</span>
                          <span className="text-[10px] text-gray-400">+70,000 UGX</span>
                        </div>
                        {advancedClubs.music && <Check className="w-4 h-4 text-[#1E5FAD]" />}
                      </button>

                    </div>
                               {/* Installment/Clearance options (Discounts) */}
                  <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/20 space-y-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800">4. Community Discounts &amp; Sibling Policies</p>
                    
                    {/* Sibling density select */}
                    <div className="space-y-1 pb-3 border-b border-amber-400/10">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-gray-700"><strong>Sibling Policy (Co-enrollment Discount)</strong>:</span>
                        <span className="bg-emerald-500 text-white font-extrabold px-2.5 py-0.5 rounded-full text-[10px]">
                          {siblings > 0 ? `${siblings === 1 ? '10%' : siblings === 2 ? '15%' : '20%'} Off Base` : 'No Sibling'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2 pt-1.5">
                        {([0, 1, 2, 3] as const).map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setSiblings(num)}
                            className={`py-2 rounded-xl text-xs font-bold font-sans text-center transition cursor-pointer ${
                              siblings === num 
                                ? 'bg-[#0B2147] text-white' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {num === 0 ? 'Only Child' : num === 3 ? '3+ Siblings' : `${num} Sibling${num > 1 ? 's' : ''}`}
                          </button>
                        ))}
                      </div>
                      <p className="text-[9px] text-gray-400 leading-normal mt-1">First sibling gets 10% off, second sibling gets 15% off, three or more siblings gets 20% off base tuition.</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="un-early-clear"
                        checked={clearingWeekOne}
                        onChange={(e) => setClearingWeekOne(e.target.checked)}
                        className="w-4.5 h-4.5 accent-[#0B2147] cursor-pointer"
                      />
                      <label htmlFor="un-early-clear" className="text-xs font-medium text-gray-700 cursor-pointer">
                        <strong>Early Payment Benefit</strong>: I will clear full tuition fees in Week One (5% off Tuition!)
                      </label>
                    </div>

                    <div className="space-y-1 pt-2.5 border-t border-amber-400/20">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-gray-700"><strong>Referral Program (Refer friends)</strong>:</span>
                        <span className="bg-amber-400 text-[#0B2147] font-extrabold px-2.5 py-0.5 rounded-full text-[10px]">
                          UGX {referrals * referralDiscountAmount} Disc
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <input 
                          type="range" 
                          min="0" 
                          max="3" 
                          value={referrals}
                          onChange={(e) => setReferrals(parseInt(e.target.value))}
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                        <span className="font-mono text-xs font-bold text-gray-800 shrink-0">{referrals} friends</span>
                      </div>
                      <p className="text-[9px] text-gray-400">Save 50,000 UGX off tuition ledger for each successful referral (capped at 150,000 UGX per term).</p>
                    </div>
                  </div>       </div>

                </div>
              </div>

              {/* Estimate Cost Ledger (Right Card) */}
              <div className="lg:col-span-5 bg-[#0B2147] text-white rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl space-y-6 text-left relative overflow-hidden">
                
                {/* Background glow accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#1A3E72] rounded-full blur-2xl pointer-events-none"></div>

                <div className="border-b border-slate-700 pb-3">
                  <h4 className="font-display font-extrabold text-base text-amber-400 uppercase tracking-widest">Termly Cost Breakdown</h4>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">Instant estimations calculated on Lake Victoria standard currency</p>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Base Tuition Program:</span>
                    <span className="font-mono text-white">UGX {calculatedBase.toLocaleString()}</span>
                  </div>
                  
                  {calculatedShuttle > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Certified School Shuttle:</span>
                      <span className="font-mono font-semibold">UGX {calculatedShuttle.toLocaleString()}</span>
                    </div>
                  )}

                  {calculatedClubs > 0 && (
                    <div className="flex justify-between text-gray-300 animate-in slide-in-from-left duration-200">
                      <span>Premium Extracurriculars:</span>
                      <span className="font-mono font-semibold">UGX {calculatedClubs.toLocaleString()}</span>
                    </div>
                  )}

                  {siblingDiscount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold animate-in zoom-in duration-200">
                      <span>Sibling Enrollment Discount:</span>
                      <span className="font-mono">- UGX {siblingDiscount.toLocaleString()}</span>
                    </div>
                  )}

                  {earlyDiscount > 0 && (
                    <div className="flex justify-between text-cyan-400 font-bold animate-in zoom-in duration-200">
                      <span>Early Week 1 Discount:</span>
                      <span className="font-mono">- UGX {earlyDiscount.toLocaleString()}</span>
                    </div>
                  )}

                  {referralDiscount > 0 && (
                    <div className="flex justify-between text-[#38BDF8] font-bold animate-in zoom-in duration-200">
                      <span>Referral Advocacy Discount:</span>
                      <span className="font-mono">- UGX {referralDiscount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="border-t border-slate-700 pt-4 flex flex-col space-y-1 block">
                    <p className="text-[10px] text-[#A5B4FC] font-extrabold uppercase tracking-wide">Net Enrollment Due:</p>
                    <div className="flex justify-between items-baseline">
                      <span className="font-display font-black text-2.5xl text-white">
                        UGX {finalTermCost.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-[11px] font-semibold">/ term</span>
                    </div>
                    {/* USD Equivalent conversion */}
                    <p className="text-[10px] text-[#A855F7] font-bold italic mt-1 font-mono">
                      Equivalent to approx. ${finalTermCostUSD.toLocaleString()} USD
                    </p>
                  </div>
                </div>

                {/* Flexible payment ledger projection */}
                <div className="p-4 bg-[#112F5E] rounded-xl border border-blue-900 space-y-1.5 text-slate-200 text-xs">
                  <p className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">Flexible Installment Schedule Plan</p>
                  <p className="text-[10px] text-gray-400">We allow the following installment allocations to help parents:</p>
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between border-b border-blue-950 pb-1">
                      <span>Week 1 Sign-in (50%):</span>
                      <strong className="font-mono text-white">UGX {Math.round(finalTermCost * 0.5).toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between border-b border-blue-950 pb-1">
                      <span>Mid-term check (25%):</span>
                      <strong className="font-mono text-white">UGX {Math.round(finalTermCost * 0.25).toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Week 10 Closing (25%):</span>
                      <strong className="font-mono text-white">UGX {Math.round(finalTermCost * 0.25).toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[9px] text-[#818CF8] uppercase font-bold tracking-widest mb-2 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>100% money back guarantees &bull; First week trial period</span>
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
