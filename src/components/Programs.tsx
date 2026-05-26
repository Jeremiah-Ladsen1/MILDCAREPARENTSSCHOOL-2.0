/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { programs } from '../data';
import { 
  CheckCircle, ArrowRight, BookOpen, Clock, Calendar, Award, User
} from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
  onNavigate: (tabId: string) => void;
}

export default function Programs({ onSelectProgram, onNavigate }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState('nursery');

  const selectedProgram = programs.find(p => p.id === activeTab) || programs[0];

  return (
    <div className="w-full bg-white font-sans py-12 md:py-16 px-4 md:px-8 border-b border-gray-100 text-left" id="programs-page">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Ages 2.5 to 12 Years
          </span>
          <h2 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight">
            Our Early Childhood &amp; Elementary Pathways
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Discover a curriculum designed to foster critical query, self-management, and high academic proficiency at every milestone level.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex border-b border-gray-200 justify-center gap-1 sm:gap-4 max-w-3xl mx-auto mb-12 flex-wrap sm:flex-nowrap">
          {programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`w-full sm:w-auto text-center font-display font-bold py-4 px-6 border-b-2 text-sm transition-all focus:outline-none cursor-pointer ${
                activeTab === prog.id
                  ? 'border-[#1E5FAD] text-[#1E5FAD] font-extrabold bg-blue-50/30 rounded-t-xl'
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-200'
              }`}
            >
              {prog.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Program Core Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="active-program-view">
          
          {/* Left Block: Text, Curriculum, Features */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold max-w-fit mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedProgram.ageGroup}</span>
              </div>
              <h3 className="font-display font-extrabold text-[#0B2147] text-2xl md:text-3xl tracking-tight">
                {selectedProgram.name}
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {selectedProgram.description}
            </p>

            {/* Curriculum Stack */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-gray-900 text-md flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1E5FAD]" />
                <span>Core Curricular Targets</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProgram.curriculum.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-gray-600 leading-normal">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Spotlight */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="font-display font-semibold text-gray-900 text-md">
                Special Parenting Benefits Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProgram.features.map((feat, idx) => (
                  <div key={idx} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-[#0B2147] text-xs font-bold leading-none flex items-center justify-center shrink-0 mt-0.5">
                      ★
                    </div>
                    <span className="text-xs font-medium text-gray-700 leading-normal text-left">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Schedule Info */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex gap-3 text-left">
              <Clock className="w-5 h-5 text-[#1E5FAD] shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">Weekly Operations timetable</p>
                <p className="text-xs text-gray-600 mt-1">{selectedProgram.schedule}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="inline-flex items-center gap-2 text-xs font-display font-bold text-white bg-[#0B2147] hover:bg-[#1E5FAD] px-6 py-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <span>Inquire About Enrollment</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Block: Image, Quick Stats, CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
              <img 
                src={selectedProgram.image} 
                alt={selectedProgram.name} 
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-amber-400 text-[#0B2147] font-bold text-[10px] md:text-xs uppercase tracking-wider px-3 py-1 rounded shadow-md">
                Highly Popular
              </div>
            </div>

            {/* Program Quick Intake Form teaser */}
            <div className="bg-amber-400/10 border border-amber-400/30 p-6 rounded-2xl text-left space-y-4">
              <p className="text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-2">Admissions Quick Check</p>
              <h4 className="font-display font-bold text-gray-900 text-base">Is your child ready for {selectedProgram.name.split(' (')[0]}?</h4>
              <p className="text-xs text-gray-600 leading-normal">
                Use our diagnostic early-child development checklist to gauge social play, vocabulary, and gross motor strength in under 3 minutes.
              </p>
              <button
                onClick={() => onNavigate('quiz')}
                className="w-full text-center text-xs font-display font-bold text-amber-950 bg-amber-400 hover:bg-amber-500 py-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-sm border border-amber-300"
              >
                Launch Diagnostic Quiz
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
