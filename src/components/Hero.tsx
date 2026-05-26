/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Sparkles, ShieldCheck, Compass, HelpCircle, ArrowRight, Award, 
  Users, Calendar, ThumbsUp, CheckCircle, Calculator, Compass as TourIcon
} from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onOpenPortal: () => void;
}

export default function Hero({ onNavigate, onOpenPortal }: HeroProps) {
  return (
    <div className="w-full bg-white text-left font-sans" id="hero-section">
      {/* Hero Body */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F2954] via-[#0C244C] to-[#041126] text-white py-16 md:py-24 px-4 md:px-8 border-b-4 border-amber-400">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5FAD]/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Text Segment */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-in fade-in duration-500">
            <div className="inline-flex items-center gap-2 bg-[#1E3E72] border border-[#2B5494] px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Uganda’s Premier Early Care &amp; Primary School</span>
            </div>

            <h1 className="font-display font-extrabold text-3.5xl sm:text-4.5xl md:text-5.5xl leading-tight tracking-tight">
              Nurturing Hearts,<br/>
              <span className="text-amber-400 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Inspiring Brilliant Minds
              </span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
              At <strong className="text-white font-semibold">Mild Care Parents School Munyonyo</strong>, we combine top-tier Jolly Phonics, personalized UNEB academic coaching, swimming, and computing to raise well-rounded, moral leaders. Experience a school that values family values and individual potential.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('quiz')}
                className="w-full sm:w-auto text-center font-display font-bold text-xs text-[#0B2147] bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 active:scale-95 px-7 py-4 rounded-xl shadow-lg shadow-amber-500/10 uppercase tracking-wider transition-all cursor-pointer border-t border-amber-300 flex items-center justify-center gap-2"
              >
                <span>Take Child Readiness Quiz</span>
                <ArrowRight className="w-4 h-4 text-[#0B2147]" />
              </button>
              
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full sm:w-auto text-center font-display font-bold text-xs text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 active:scale-95 px-7 py-4 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book School Tour</span>
                <Calendar className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* High-Converting Client Reviews snippet */}
            <div className="pt-4 border-t border-blue-900/40 flex items-center gap-3.5 flex-wrap">
              <div className="flex -space-x-3">
                <img className="w-9 h-9 rounded-full border-2 border-[#10274C]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Parent avatar" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full border-2 border-[#10274C]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Parent avatar" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full border-2 border-[#10274C]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Parent avatar" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-400 font-extrabold text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="text-white text-xs font-bold">4.9/5 Rating</span>
                </div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider text-left">Trusted by 450+ Munyonyo Families &bull; Est. 2012</p>
              </div>
            </div>
          </div>

          {/* Hero Media Segment: Modern Interactive Concept Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#040E1B] border-4 border-slate-700/50">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                alt="Happy African Classroom Scholars playing"
                referrerPolicy="no-referrer"
                className="w-full h-80 md:h-96 object-cover"
              />
              {/* Overlapping badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>UNEB Certified</span>
              </div>
              
              {/* Overlapping CTA prompt */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black via-black/85 to-transparent text-left">
                <p className="text-amber-300 font-bold text-[10px] md:text-xs uppercase tracking-wider leading-none mb-1">Interactive Feature Inside</p>
                <h3 className="font-display font-bold text-sm md:text-base text-white">Simulate Tuition &amp; Meals instantly in the Explore Hub!</h3>
                <button
                  onClick={() => onNavigate('interactive')}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-white bg-[#1E5FAD] hover:bg-blue-600 px-3.5 py-1.5 rounded-md font-semibold transition"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Fee Estimator</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Indicators Bar (4 Columns) */}
      <div className="w-full py-8 bg-[#F4F6F9] px-4 md:px-8 border-b border-gray-100" id="trust-metrics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="space-y-1 py-2 text-left md:text-center border-r border-gray-200 last:border-0 pl-4 md:pl-0">
            <div className="flex items-center justify-start md:justify-center gap-2 text-[#0B2147]" id="trust-ple">
              <Award className="w-5 h-5 text-[#1E5FAD]" />
              <span className="font-display font-extrabold text-2xl md:text-3.5xl">100%</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">PLE Div 1 &amp; 2 Rankings</p>
            <p className="text-xs text-gray-500 leading-snug hidden md:block">Unbroken records of educational distinction</p>
          </div>

          <div className="space-y-1 py-2 text-left md:text-center border-r border-[#F4F6F9] lg:border-r-gray-200 pl-4 md:pl-0">
            <div className="flex items-center justify-start md:justify-center gap-2 text-[#0B2147]" id="trust-ratio">
              <Users className="w-5 h-5 text-[#1E5FAD]" />
              <span className="font-display font-extrabold text-2xl md:text-3.5xl">10 : 1</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Care Ratio (Toddlers)</p>
            <p className="text-xs text-gray-500 leading-snug hidden md:block">Ensuring detailed child health &amp; safe monitoring</p>
          </div>

          <div className="space-y-1 py-2 text-left md:text-center border-r border-gray-200 last:border-0 pl-4 md:pl-0">
            <div className="flex items-center justify-start md:justify-center gap-2 text-[#0B2147]" id="trust-clubs">
              <Calendar className="w-5 h-5 text-[#1E5FAD]" />
              <span className="font-display font-extrabold text-2xl md:text-3.5xl">12+</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Integrated Enrichment Clubs</p>
            <p className="text-xs text-gray-500 leading-snug hidden md:block">Including Swimming, Robotics, Coding, Choir</p>
          </div>

          <div className="space-y-1 py-2 text-left md:text-center last:border-0 pl-4 md:pl-0">
            <div className="flex items-center justify-start md:justify-center gap-2 text-[#0B2147]" id="trust-satisfaction">
              <ThumbsUp className="w-5 h-5 text-[#1E5FAD]" />
              <span className="font-display font-extrabold text-2xl md:text-3.5xl">98%</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Parent Retention Score</p>
            <p className="text-xs text-gray-500 leading-snug hidden md:block">Overwhelmingly positive family referral rates</p>
          </div>

        </div>
      </div>

      {/* Unique Selling Pitch Grid */}
      <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto" id="usp-section">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display font-extrabold text-2xl md:text-3.5xl text-[#0B2147] tracking-tight">
            Why Discerning Parents Select Mild Care
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Our comprehensive model ensures structural academic outcomes while retaining play, morality, and digital capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-left space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-[#1E5FAD] rounded-xl flex items-center justify-center font-bold">
              📚
            </div>
            <h3 className="font-display font-bold text-[#0B2147] text-lg">Systematic Sound Phonics</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We employ structured phonic sounds (Jolly Phonics schemes) starting in our nestling Baby and Middle Class layers. By age 5, our young scholars read complete sentences confidently, setting them up for immediate outstanding Primary One entry.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all text-left space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
              🏊
            </div>
            <h3 className="font-display font-bold text-[#0B2147] text-lg">Mandatory Aquatic Coordination</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Water safety is an essential life skill. Every Pre-Primary and Primary class undergoes weekly swimming drills led by certified, kid-loving instructors inside our custom solar-heated shallow facility, boosting physical motor coordination.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all text-left space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold">
              🖥️
            </div>
            <h3 className="font-display font-bold text-[#0B2147] text-lg">Early Digital Sovereignty</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our modern computer suite operates 1-on-1 pupil-to-screen training. Learners do not just learn standard cursor mechanics; they interact with kid-safe logic blocks, early research paths, and typing drills, prepping them for a digitized world.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
