/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { teachers, facilities } from '../data';
import { CheckCircle, ArrowLeft, ArrowRight, Award, Trophy, Sparkles, BookOpen, Compass } from 'lucide-react';

export default function AboutUs() {
  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);
  const [selectedTeacherDossier, setSelectedTeacherDossier] = useState<string | null>(null);

  const prevFacility = () => {
    setActiveFacilityIdx((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const nextFacility = () => {
    setActiveFacilityIdx((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const currentFacility = facilities[activeFacilityIdx];

  return (
    <div className="w-full bg-white font-sans py-12 md:py-16 px-4 md:px-8 text-left border-b border-gray-100" id="about-us-page">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Core Identity Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              ESTABLISHED 2012 &bull; MUNYONYO KAMPALA
            </span>
            <h2 className="font-display font-extrabold text-[#0B2147] text-3xl md:text-4xl tracking-tight leading-tight">
              Giving Your Child a Solid Moral &amp; Academic Concrete
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Mild Care Parents School was built on a bold premise: early childhood care is not a baby-sitting placeholder; it is the absolute foundation of human architecture. For over a decade, we have nurtured children in Kampala to become self-expressive, morally upright, and highly creative scholars.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-display font-bold text-[#0B2147] text-md">Our Mission Statement</h4>
                <p className="text-xs text-gray-500 mt-1 leading-normal">
                  To provide a secure, child-centered environment that promotes intellectual exploration, robust physical growth, and deep moral integrity.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-display font-bold text-[#0B2147] text-md">Our Strategic Vision</h4>
                <p className="text-xs text-gray-500 mt-1 leading-normal">
                  To be Kampala's premier early elementary school, celebrated for academic distinction, modern technology modeling, and moral leadership.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border-8 border-gray-100/50 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                alt="Beautiful school yard with green gardens"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Float values snippet card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-[#0F376A] to-blue-800 text-white p-5 rounded-2xl shadow-xl border-t border-blue-500 max-w-xs hidden sm:block">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Our Core Pillars</p>
              <div className="mt-2.5 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400">✔</span>
                  <span>Character Excellence &amp; Morality</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400">✔</span>
                  <span>Practical Science Inquiry</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400">✔</span>
                  <span>Active Parent Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Facilities Showcase Carousel Slider */}
        <div className="pt-8 border-t border-gray-100" id="facilities-portfolio">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-8">
            <div className="text-left space-y-1">
              <span className="text-xs font-bold text-[#1E5FAD] uppercase tracking-wider">Campus Showcase</span>
              <h3 className="font-display font-extrabold text-[#0B2147] text-2xl md:text-3xl tracking-tight">
                Our Safe, State-of-the-Art Facilities
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={prevFacility}
                className="p-3 bg-gray-100 hover:bg-[#1E5FAD] hover:text-white rounded-full transition-all cursor-pointer"
                id="facility-prev-btn"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextFacility}
                className="p-3 bg-[#0B2147] hover:bg-[#1E5FAD] text-white rounded-full transition-all cursor-pointer"
                id="facility-next-btn"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 items-center">
            <div className="lg:col-span-7">
              <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-sm relative">
                <img 
                  src={currentFacility.image} 
                  alt={currentFacility.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                />
                <span className="absolute bottom-4 right-4 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                  Photo {activeFacilityIdx + 1} of {facilities.length}
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-5 lg:pl-4 text-left">
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded border border-amber-200 uppercase tracking-widest">
                Safe &amp; Protected Environment
              </span>
              <h4 className="font-display font-bold text-[#0B2147] text-2xl tracking-tight">
                {currentFacility.name}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed md:text-sm">
                {currentFacility.description}
              </p>
              
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1E5FAD]" />
                  <span>24/7 CCTV security &amp; entry gate wardens</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1E5FAD]" />
                  <span>Daily hygiene clearance protocols</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1E5FAD]" />
                  <span>Age-segregated soft play elements</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Highly Qualified Team of Pedagogues */}
        <div className="pt-8 border-t border-gray-100" id="faculty-team">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold text-[#1E5FAD] uppercase tracking-wider">Meet Our Mentors</span>
            <h3 className="font-display font-extrabold text-[#0B2147] text-2xl md:text-3.5xl tracking-tight">
              Experienced, Certified Educational Leaders
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Our teachers are certified by pediatric care organizations and participate in monthly workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher) => (
              <div 
                key={teacher.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left hover:shadow-md hover:border-blue-100 transition-all cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedTeacherDossier(selectedTeacherDossier === teacher.id ? null : teacher.id)}
                id={`teacher-card-${teacher.id}`}
              >
                <div className="w-full h-60 relative overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0B2147]/90 text-white font-semibold text-[10px] px-2.5 py-1 rounded">
                    {teacher.experience}
                  </div>
                </div>

                <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="font-display font-bold text-[#0B2147] text-base leading-tight">
                      {teacher.name}
                    </h4>
                    <p className="text-xs text-amber-600 font-semibold">{teacher.role}</p>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#1E5FAD]">
                    <span>{selectedTeacherDossier === teacher.id ? 'Close Profile' : 'View Specialized Dossier'}</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dossier Expanded Overlay/Grid */}
          {selectedTeacherDossier && (
            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl mt-8 animate-in slide-in-from-top duration-300 text-left" id="teacher-expanded-dossier">
              {(() => {
                const teach = teachers.find(t => t.id === selectedTeacherDossier)!;
                return (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                        <img src={teach.image} alt={teach.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    <div className="md:col-span-9 space-y-3">
                      <h4 className="font-display font-bold text-[#0B2147] text-lg">{teach.name} &bull; Clinical Profile</h4>
                      <p className="text-xs text-gray-600 italic leading-relaxed">"{teach.bio}"</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                        <div>
                          <p className="font-bold text-gray-700">Specialty Domain:</p>
                          <p className="text-gray-500 mt-0.5">{teach.specialty}</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-700">Service Record:</p>
                          <p className="text-gray-500 mt-0.5">{teach.experience} in pediatric pedagogy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
