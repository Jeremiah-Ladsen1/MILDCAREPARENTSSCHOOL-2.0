/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2, 
  Sparkles, GraduationCap, Microscope, Trees, Landmark, RotateCcw, Volume2, Info
} from 'lucide-react';

interface ExcellenceItem {
  id: string;
  type: 'alumni' | 'current';
  name: string;
  roleOrClass: string;
  title: string;
  fieldOrTopic: string;
  summary: string;
  impact: string;
  image: string;
  icon: React.ReactNode;
  duration: string;
  captions: { time: number; text: string }[];
}

export default function StudentExcellence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'alumni' | 'current'>('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);

  const excellenceData: ExcellenceItem[] = [
    {
      id: 'alumni-1',
      type: 'alumni',
      name: 'Dr. Arthur Ssewankambo',
      roleOrClass: 'Alumnus (Class of 2012) &bull; Pediatric Surgeon',
      title: 'Pediatric Medicine & Clinical Surgery',
      fieldOrTopic: 'Medical Sciences (Mulago Hospital)',
      summary: 'Arthur shares how the tactile plant care and early organic science beds at Mild Care nursery ignited his passion for systemic biology.',
      impact: 'Mild Care\'s sensory school gardens and encouraging class teachers molded my clinical observation skills at age four.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=650',
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
      duration: '0:42',
      captions: [
        { time: 0, text: "Hello! I am Dr. Arthur Ssewankambo, pediatric surgeon at Mulago National Hospital." },
        { time: 6, text: "Parents often ask where my lifelong passion for children's medicine first took root." },
        { time: 13, text: "It traces directly back to the physical botanic patches at Mild Care Parents School." },
        { time: 20, text: "At age four, Madame Sarah had us observe tiny seed sprouts with magnifying glasses." },
        { time: 27, text: "That daily sensory interaction stripped all fear of biology and made curiosity a playful habit." },
        { time: 35, text: "Mild Care does not just teach—it sets permanent structural foundations for future leaders!" }
      ]
    },
    {
      id: 'alumni-2',
      type: 'alumni',
      name: 'Eng. Brenda Nabwire',
      roleOrClass: 'Alumna (Class of 2014) &bull; Energy Grid Architect',
      title: 'Decentralized Solar Grid Architectures',
      fieldOrTopic: 'Renewable Engineering (ERA Uganda)',
      summary: 'Brenda discusses how her weekly primary computer literacy keys laid the analytical algorithmic groundwork for designing power grids.',
      impact: 'The school computer suite gave us direct 1-on-1 machine access, turning digital commands into a natural language.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=650',
      icon: <Award className="w-5 h-5 text-indigo-500" />,
      duration: '0:36',
      captions: [
        { time: 0, text: "Hi there! I am Brenda Nabwire, power controller for clean solar grid systems." },
        { time: 7, text: "Designing solar matrices requires absolute comfort with software logic and variables." },
        { time: 13, text: "My very first programming sequences were written at Munyonyo in the school tech suite." },
        { time: 21, text: "We loaded early Scratch blocks to make digital frogs navigate virtual rivers." },
        { time: 28, text: "The hands-on 1-on-1 computer lab access removed any mystery about technology." },
        { time: 33, text: "It gave me the confidence that I could build anything in code. Thank you, Mild Care!" }
      ]
    },
    {
      id: 'current-1',
      type: 'current',
      name: 'Liam Ssenyange & Team',
      roleOrClass: 'Pre-Primary Scholar &bull; Top Class Inventor',
      title: 'The Clean-Water Density Ferry Model',
      fieldOrTopic: 'Practical Science Lab Exercise',
      summary: 'Liam presents his floating motorboat model constructed from hollow plastic bottles and cardboard to study water density laws.',
      impact: 'Our class is tracking the buoyancy of different household items, charting how water supports heavy volumes.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=650',
      icon: <Microscope className="w-5 h-5 text-[#1E5FAD]" />,
      duration: '0:28',
      captions: [
        { time: 0, text: "Hello, my name is Liam! Today I want to show you my water density ferry model." },
        { time: 6, text: "During science lab hour, we learned that hollow things hold trapped air." },
        { time: 11, text: "By strapping lightweight plastic bottles under recycled cardboard boxes..." },
        { time: 16, text: "We increase the volume without adding too much weight! Look, it floats!" },
        { time: 21, text: "Even when I load building blocks, it stays steady! This is how Lake Victoria ships float." }
      ]
    },
    {
      id: 'current-2',
      type: 'current',
      name: 'Chloe Kemigisha',
      roleOrClass: 'Primary Two Prefect &bull; Green Ambassador',
      title: 'Sensory Soil Nutrition Tracking',
      fieldOrTopic: 'Environmental Science Garden',
      summary: 'Chloe walks us through her bean plant botany tracker, showing how organic coffee husks produce robust crops.',
      impact: 'We recorded leaf heights and color shades daily to verify how organic nutrients improve physical soil aeration.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=650',
      icon: <Trees className="w-5 h-5 text-emerald-500" />,
      duration: '0:30',
      captions: [
        { time: 0, text: "Webale nyo! I am Chloe, and this is our environmental botanical garden station." },
        { time: 6, text: "We planted two identical bean seeds: one in plain soil, and one in compost soil." },
        { time: 12, text: "Look at the differences! The compost bean is taller, with beautiful dark leaves." },
        { time: 18, text: "Compost coffee husks act like healthy vitamins, letting the soil trap moisture." },
        { time: 24, text: "Our class diary keeps track of the leaves water levels every morning before sports!" }
      ]
    },
    {
      id: 'current-3',
      type: 'current',
      name: 'P6 Patriotism Guild',
      roleOrClass: 'Primary Six &bull; Historical Research Group',
      title: 'Democratic Milestones: Uganda\'s Journey to 1962',
      fieldOrTopic: 'Civics & Political History Study',
      summary: 'A group recitation detailing the patriotic pioneers, Key treaty agreements, flag symbols, and the collective sovereignty of Uganda.',
      impact: 'Fostering deep local consciousness, civic responsibility, and positive pride in our national motto.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=650',
      icon: <Landmark className="w-5 h-5 text-amber-600" />,
      duration: '0:40',
      captions: [
        { time: 0, text: "Greetings, we represent the P6 Patriotism Guild, presenting Uganda's political milestones." },
        { time: 7, text: "On October 9, 1962, our nation claimed independent sovereignty with pride." },
        { time: 14, text: "The Union Jack was lowered, and the Black, Yellow, and Red flag arose for the first time." },
        { time: 21, text: "The Black represents our rich African heritage; Yellow, our glowing sunshine; Red, sisterhood." },
        { time: 29, text: "Our standard motto is 'For God and My Country' - instructing us to lead with integrity." },
        { time: 35, text: "At Mild Care Parents School, we study history to become ethical leaders for tomorrow!" }
      ]
    },
    {
      id: 'alumni-3',
      type: 'alumni',
      name: 'Advocate Timothy Lumu',
      roleOrClass: 'Alumnus (Class of 2009) &bull; Constitutional Litigator',
      title: 'Constitutional Protections & Civic Defense',
      fieldOrTopic: 'Litigation and Public Advocacy',
      summary: 'Timothy explains how P4 inter-house debate sessions coached his mental defense posture and public articulation.',
      impact: 'Standing before peer examiners at Mild Care is what taught me to frame structured constitutional arguments.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=650',
      icon: <Landmark className="w-5 h-5 text-purple-600" />,
      duration: '0:35',
      captions: [
        { time: 0, text: "Good day, I am Timothy Lumu. I represent civic protections before judicial tribunals." },
        { time: 6, text: "Litigation requires presenting compound logic under tight pressure without fading." },
        { time: 12, text: "I discovered my voice in Primary Four, when our headteacher Mrs. Susan drafted me into debating." },
        { time: 21, text: "We researched local administrative rights, refining our delivery speed and posture." },
        { time: 28, text: "That early school arena is what built my backbone to stand tall in any courthouse." }
      ]
    }
  ];

  const filteredData = filter === 'all' 
    ? excellenceData 
    : excellenceData.filter(item => item.type === filter);

  // Auto adjusting index range when filter changes
  useEffect(() => {
    setActiveIndex(0);
    setIsPlaying(false);
    setPlaybackTime(0);
  }, [filter]);

  // Video playback simulation hook
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackTime((prev) => {
          const maxSeconds = 40; // cap standard duration simulation
          if (prev >= maxSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeItem = filteredData[activeIndex] || filteredData[0];

  // Helper to extract active caption text based on current time
  const getActiveCaption = () => {
    if (!activeItem) return '';
    const sorted = [...activeItem.captions].sort((a,b) => b.time - a.time);
    const matched = sorted.find(c => playbackTime >= c.time);
    return matched ? matched.text : activeItem.captions[0].text;
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredData.length);
    setIsPlaying(false);
    setPlaybackTime(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
    setIsPlaying(false);
    setPlaybackTime(0);
  };

  return (
    <div className="w-full bg-[#FCFDFE] py-16 px-4 md:px-8 text-left border-b border-gray-150 relative overflow-hidden" id="student-excellence-corridor">
      
      {/* Background soft design anchors */}
      <div className="absolute top-1/4 -left-36 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4 border-b border-gray-100">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              Student Excellence Corridor
            </span>
            <h2 className="font-display font-black text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight leading-tight">
              Sovereign Leaders &bull; Practical Innovations in Action
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Explore firsthand testimonials from our successful alumni detailing how Mild Care’s developmental blueprints shaped their professions. Check live videos of current students demonstrating local science labs, environmental projects, and reciting Uganda's political milestones.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wide transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'bg-[#0B2147] text-white shadow' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setFilter('alumni')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wide transition-all cursor-pointer ${
                filter === 'alumni' 
                  ? 'bg-[#0B2147] text-white shadow' 
                  : 'text-gray-500 hover:text-[#1E5FAD]'
              }`}
            >
              Successful Alumni
            </button>
            <button
              onClick={() => setFilter('current')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wide transition-all cursor-pointer ${
                filter === 'current' 
                  ? 'bg-[#0B2147] text-white shadow' 
                  : 'text-gray-500 hover:text-emerald-500'
              }`}
            >
              Scholars' Exhibit
            </button>
          </div>
        </div>

        {/* Dynamic content card wrapper */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white rounded-3xl border border-gray-150 shadow-md p-6 md:p-10 relative overflow-hidden min-h-[500px]">
            
            {/* Left Column: Simulated Digital Video Studio Viewport (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              
              {/* Media Container Board */}
              <div className="w-full bg-slate-950 rounded-2xl relative overflow-hidden shadow-2xl aspect-[4/3] flex flex-col justify-end group border border-slate-800">
                
                {/* Image Poster Underlay */}
                <img 
                  src={activeItem.image} 
                  alt={activeItem.name} 
                  className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-700 ${
                    isPlaying ? 'scale-105 brightness-[0.25] blur-[1px]' : 'scale-100 brightness-75 group-hover:brightness-50'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Soft scanning lines decorative layer */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none"></div>

                {/* Live simulation banner */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] uppercase font-mono tracking-widest z-20">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-black ${
                    isPlaying ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-800 text-gray-300'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    {isPlaying ? 'PLAYING VIDEO' : 'VIDEO PREVIEW'}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-amber-400 font-bold border border-amber-400/20">
                    MILD CARE TV
                  </span>
                </div>

                {/* Subtitle / Caption Layer overlay (Synched) */}
                <div className="w-full px-5 pb-5 z-20 relative space-y-4">
                  
                  {/* Dynamic caption ticker */}
                  <AnimatePresence mode="wait">
                    {showCaptions && (
                      <motion.div 
                        key={playbackTime}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-black/75 border border-slate-700/50 backdrop-blur-md px-4 py-3 rounded-lg text-xs md:text-sm text-center text-white font-medium font-sans min-h-[64px] flex items-center justify-center leading-normal"
                      >
                        <p>{isPlaying ? getActiveCaption() : `Click Play to watch ${activeItem.name}'s walkthrough presentation`}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Scrubber / timeline simulation bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-slate-800 rounded-full h-1 relative overflow-hidden">
                      <div 
                        className="bg-[#1E5FAD] h-full transition-all duration-1000" 
                        style={{ width: isPlaying ? `${(playbackTime / 40) * 100}%` : '5%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                      <span>0:{playbackTime < 10 ? `0${playbackTime}` : playbackTime}</span>
                      <span>{activeItem.duration}</span>
                    </div>
                  </div>

                </div>

                {/* Center Big Play Button overlay */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-12 flex justify-center items-center z-30">
                  <button
                    onClick={() => {
                      if (isPlaying) {
                        setIsPlaying(false);
                      } else {
                        setIsPlaying(true);
                        if (playbackTime === 0) setPlaybackTime(0);
                      }
                    }}
                    className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-xl hover:shadow-amber-400/20 border-3 border-white flex justify-center items-center cursor-pointer group-hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-7 h-7 fill-slate-950" /> : <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />}
                  </button>
                </div>

              </div>

              {/* Player control buttons */}
              <div className="flex justify-between items-center text-xs py-1 px-2 border border-gray-100 rounded-xl bg-gray-50/70">
                <button
                  onClick={() => setShowCaptions(!showCaptions)}
                  className={`px-3 py-1 rounded-lg font-bold border cursor-pointer transition-all ${
                    showCaptions ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-200 text-gray-500'
                  }`}
                >
                  [CC] Subtitles: {showCaptions ? 'On' : 'Off'}
                </button>

                <div className="flex gap-2.5 text-gray-400 items-center font-semibold">
                  <Volume2 className="w-4 h-4 text-[#1E5FAD]" />
                  <span className="text-[10px] uppercase font-mono">Simulated Audio Track (EN)</span>
                </div>

                {playbackTime > 0 && (
                  <button
                    onClick={() => { setPlaybackTime(0); setIsPlaying(true); }}
                    className="flex items-center gap-1 hover:text-[#0B2147] transition cursor-pointer font-bold text-gray-500 font-sans"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Scholar Bio, School Contribution, and Slide Navigation (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2 text-left space-y-6">
              
              {/* Header and Badge representation */}
              <div className="space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className={`px-3.5 py-1 rounded-full text-[10px] uppercase font-black font-display flex items-center gap-1.5 border tracking-wider ${
                    activeItem.type === 'alumni' 
                      ? 'bg-amber-50 text-amber-800 border-amber-200' 
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  }`}>
                    {activeItem.type === 'alumni' ? '★ Alumni Progression Altar' : '☘ Living Scholar Exhibit'}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Slide {activeIndex + 1} of {filteredData.length}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-[#0B2147] text-2xl md:text-3.5xl tracking-tight leading-none">
                    {activeItem.name}
                  </h3>
                  <p 
                    className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5"
                    dangerouslySetInnerHTML={{ __html: activeItem.roleOrClass }}
                  />
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl space-y-3.5 border border-gray-150 relative">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 shrink-0">
                      {activeItem.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#1E5FAD] uppercase">Field / Subject Focus</p>
                      <h4 className="text-xs font-extrabold text-[#0B2147] leading-tight mt-0.5">{activeItem.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 leading-normal pl-1.5 border-l-2 border-amber-400 italic">
                    {activeItem.summary}
                  </p>
                </div>
              </div>

              {/* "How the School Helped Me" or Core Innovation Summary Block */}
              <div className="bg-[#0B2147] text-white p-5 rounded-2xl space-y-3 border-t border-blue-900/60 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-950/40 rounded-full blur-xl pointer-events-none"></div>
                <h4 className="text-[11px] font-black uppercase text-[#38BDF8] tracking-widest flex items-center gap-1">
                  <span>⚓</span>
                  <span>Impact Profile &amp; Leadership Blueprint</span>
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-200 font-medium">
                  "{activeItem.impact}"
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold tracking-wider uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Mild Care Pedagogical Record</span>
                </div>
              </div>

              {/* Slider Navigation Arrows and indicators */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-150">
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all cursor-pointer text-gray-700 active:scale-95 shrink-0"
                    title="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-[#0B2147] text-white hover:bg-[#1E5FAD] flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0 shadow-md"
                    title="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-1.5">
                  {filteredData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsPlaying(false);
                        setPlaybackTime(0);
                      }}
                      className={`h-2 rounded-full cursor-pointer transition-all ${
                        activeIndex === idx ? 'w-6 bg-[#0B2147]' : 'w-2 bg-gray-200 hover:bg-gray-400'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-150 space-y-3">
            <Info className="w-10 h-10 text-gray-400 mx-auto" />
            <h4 className="font-display font-bold text-[#0B2147] text-md">No excellence tracks registered under this filter</h4>
            <p className="text-xs text-gray-400">Please choose another categories or switch to All Tracks.</p>
          </div>
        )}

      </div>
    </div>
  );
}
