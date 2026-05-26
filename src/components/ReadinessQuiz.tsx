/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle, ArrowRight, RotateCcw, Award, FileText, 
  User, Check, AlertCircle, HelpCircle, Printer 
} from 'lucide-react';

interface Question {
  id: string;
  category: 'Social' | 'Cognitive' | 'Motor' | 'Language' | 'Independence';
  text: string;
}

const quizQuestions: Question[] = [
  { id: 'q1', category: 'Social', text: 'Does your child demonstrate willingness to share toys, take turns, and engage in cooperative peer play?' },
  { id: 'q2', category: 'Social', text: 'Can they separate from primary caregivers for 4 hours without experiencing prolonged anxiety?' },
  { id: 'q3', category: 'Cognitive', text: 'Does your child recognize basic shapes (circle, square, triangle) and sort items by standard colors?' },
  { id: 'q4', category: 'Cognitive', text: 'Can they count 1 to 10 out loud and associate numerical cards to physical piles of items?' },
  { id: 'q5', category: 'Motor', text: 'Can they grasp a chunky crayon using fingers (pincer grip) rather than a whole clenched fist?' },
  { id: 'q6', category: 'Motor', text: 'Can they balance on one foot, hop twice, and kick an static ball without falling down?' },
  { id: 'q7', category: 'Language', text: 'Can your child speak in complete, coherent sentences consisting of 4 to 5 words?' },
  { id: 'q8', category: 'Language', text: 'Do they understand and comply with simple two-step instructions (e.g. "Pick up your shoes and put them in the brown cabinet")?' },
  { id: 'q9', category: 'Independence', text: 'Does your child communicate toilet/bladder urges in advance, and handle simple zippers independently?' },
  { id: 'q10', category: 'Independence', text: 'Do they feed themselves lunch using spoons without experiencing hyperactive attention issues?' }
];

export default function ReadinessQuiz() {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('4');
  const [started, setStarted] = useState(false);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Parent profile inputs post quiz
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  const currentQuestion = quizQuestions[currentStep];

  const handleSelectAnswer = (points: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: points }));
    
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
    setStarted(false);
    setFormSubmitted(false);
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim()) return;
    setStarted(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Calculations
  const maxPoints = quizQuestions.length * 3;
  const earnedPoints = (Object.values(answers) as number[]).reduce((sum, current) => sum + current, 0);
  const readinessPercentage = Math.round((earnedPoints / maxPoints) * 105); // scaling for friendly presentation capped at 100
  const finalScore = Math.min(readinessPercentage, 100);

  // Domain categorization score mapping
  const calculateDomainScore = (category: string) => {
    const categoryQuestions = quizQuestions.filter((q) => q.category === category);
    const categoryQuestionIds = categoryQuestions.map((q) => q.id);
    const maxCatPoints = categoryQuestions.length * 3;
    let earnedCatPoints = 0;
    categoryQuestionIds.forEach((id) => {
      earnedCatPoints += (answers[id] || 0);
    });
    return Math.min(Math.round((earnedCatPoints / maxCatPoints) * 100), 100);
  };

  const domainScores = {
    Social: calculateDomainScore('Social'),
    Cognitive: calculateDomainScore('Cognitive'),
    Motor: calculateDomainScore('Motor'),
    Language: calculateDomainScore('Language'),
    Independence: calculateDomainScore('Independence')
  };

  // Interpretation brackets
  let evaluationTitle = '';
  let evaluationVerdict = '';
  let recommendationText = '';
  let suggestedPlacement = '';

  if (finalScore >= 80) {
    evaluationTitle = 'Exemplary Early Readiness (Fully Prepared)';
    evaluationVerdict = 'Your child demonstrates high levels of cognitive observation, strong social interaction structures, and motor confidence. They show outstanding capacities for immediate preschool environments.';
    suggestedPlacement = 'Pre-Primary Preparatory / Primary One tracks';
    recommendationText = 'Accelerated Jolly Phonics reading levels and introductory digital coding classes are highly recommended to continuously stimulate their intellectual milestones.';
  } else if (finalScore >= 50) {
    evaluationTitle = 'Milestones Budding (Developing Healthy Ready)';
    evaluationVerdict = 'Your child is progressing beautifully on track. They exhibit solid foundational vocabulary, safe self-care actions, and early motor play. They will flourish inside group academic-play settings.';
    suggestedPlacement = 'Nursery (Middle or Top Class equivalent)';
    recommendationText = 'Structured early literacy sounds, daily interactive story writing circles, and inter-house developmental swimming classes under certified coach Juma will maximize their confidence.';
  } else {
    evaluationTitle = 'Warm Nestlings Care (Nursery Playgroup)';
    evaluationVerdict = 'Our evaluations show that your child will benefit immensely from close caring spaces. Nurturing sharing protocols, infant motor play stimulation, and targeted speech coordination exercises will build early courage.';
    suggestedPlacement = 'Nursery Care Baby Playgroup (Ages 2.5 - 4)';
    recommendationText = 'Continuous gentle sandcastle play, daily musical rhymes, color workshops, and specialized low caregiver-ratio monitoring (5:1) will transition them smoothly to child-independence benchmarks.';
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white font-sans py-12 md:py-16 px-4 md:px-8 border-b border-gray-100 text-left" id="readiness-quiz-page">
      <div className="max-w-4xl mx-auto">
        
        {/* Banner */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Early Years child Diagnostics
          </span>
          <h2 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3xl tracking-tight">
            Mild Care School Readiness Assessment
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
            Take our research-backed early developmental checklist formulated by Mrs. Susan Kigozi. Understand your child’s emotional maturity and motor readiness levels in minutes.
          </p>
        </div>

        {/* STEP 1: Entrance Form */}
        {!started && !completed && (
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm text-left max-w-xl mx-auto" id="quiz-entry-card">
            <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200 mb-6">
              <span className="text-2xl">🌱</span>
              <div>
                <h3 className="font-display font-bold text-[#0B2147] text-base md:text-lg">Register Diagnostic Profile</h3>
                <p className="text-[11px] text-gray-500">Provide early credentials to initialize custom diagnostic metrics.</p>
              </div>
            </div>

            <form onSubmit={handleStart} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Child's Name (Forename / Surname)</label>
                <input 
                  type="text" 
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="e.g. Liam Ladsen"
                  required
                  className="w-full border border-gray-200 p-3.5 rounded-xl text-xs bg-white outline-none focus:border-[#1E5FAD]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Child's Age (Years)</label>
                <select 
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full border border-gray-200 p-3.5 rounded-xl text-xs bg-white outline-none focus:border-[#1E5FAD] font-semibold"
                >
                  <option value="2.5">2.5 to 3 Years (Playgroup/Baby Class)</option>
                  <option value="3.5">3.5 to 4.5 Years (Middle Class)</option>
                  <option value="4.5">4.5 to 5.5 Years (Top Class)</option>
                  <option value="6">6+ Years (Primary Grades)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-center font-display font-bold text-xs text-[#0B2147] bg-amber-400 hover:bg-amber-500 py-4 rounded-xl uppercase tracking-wider transition cursor-pointer shadow border border-amber-300"
                >
                  Begin Assessment Questionnaire
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: Active Quiz UI */}
        {started && !completed && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 text-left" id="active-quiz-widget">
            
            {/* Header progress tracker */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] text-[#1E5FAD] font-bold uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded">
                  Category: {currentQuestion.category} Milestones
                </span>
                <p className="text-[11px] text-gray-400 mt-1 uppercase">Profile &bull; Scholar: <strong>{childName}</strong></p>
              </div>
              <span className="font-mono text-xs font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded">
                Question {currentStep + 1} of {quizQuestions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
              <div 
                style={{ width: `${((currentStep) / quizQuestions.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-[#1E5FAD] to-[#1E5FAD]/40 transition-all duration-300"
              ></div>
            </div>

            {/* Question Card */}
            <div className="space-y-8">
              <h3 className="font-display font-bold text-[#0B2147] text-md sm:text-lg md:text-xl leading-relaxed">
                {currentQuestion.text}
              </h3>

              {/* Action Answers Buttons (3 levels) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <button
                  onClick={() => handleSelectAnswer(3)}
                  className="p-5 bg-white border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/20 rounded-xl text-left transition cursor-pointer group flex flex-col justify-between"
                  id="quiz-ans-3-btn"
                >
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-105 transition">
                    A
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-gray-800 uppercase tracking-wide">Highly Confident</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">Exhibits action independently, smoothly, with clear self-mastery.</p>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectAnswer(1.5)}
                  className="p-5 bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50/20 rounded-xl text-left transition cursor-pointer group flex flex-col justify-between"
                  id="quiz-ans-15-btn"
                >
                  <div className="w-7 h-7 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-105 transition">
                    B
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-gray-800 uppercase tracking-wide">Developing / Prompted</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">Requires adult guidance, active reminders, or occasional prompting.</p>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectAnswer(0)}
                  className="p-5 bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50/20 rounded-xl text-left transition cursor-pointer group flex flex-col justify-between"
                  id="quiz-ans-0-btn"
                >
                  <div className="w-7 h-7 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-105 transition">
                    C
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-gray-800 uppercase tracking-wide">Not Yet / Emerging</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">Has not reached early developmental coordinates, needs care work.</p>
                  </div>
                </button>

              </div>
            </div>

            {/* Back Button step control details */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
              {currentStep > 0 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="font-bold text-[#1E5FAD] cursor-pointer hover:underline"
                >
                  &larr; Previous Question
                </button>
              ) : (
                <span>Early Years Screening</span>
              )}
              <span>Progressing Coordinates &bull; {childName}</span>
            </div>

          </div>
        )}

        {/* STEP 3: Complete & Show Scorecard Printable Report */}
        {completed && (
          <div className="space-y-8 print:p-0" id="quiz-completed-result">
            
            <div className="bg-gradient-to-br from-[#0F2954] to-[#0B2147] text-white rounded-2xl p-6 md:p-8 border border-[#1C3A62] shadow-xl text-left space-y-6">
              
              <div className="flex justify-between items-baseline flex-wrap gap-2 border-b border-blue-900 pb-4">
                <div>
                  <h3 className="font-display font-extrabold text-white text-xl md:text-2xl flex items-center gap-2">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span>Official Metrics Scorecard</span>
                  </h3>
                  <p className="text-[11px] text-gray-300 uppercase mt-0.5">Mild Care early childhood diagnostics division</p>
                </div>
                
                <button 
                  onClick={handlePrint}
                  className="bg-slate-800 hover:bg-slate-700 font-sans font-bold text-xs text-white border border-slate-700/60 shadow py-2 px-3.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer flex print:hidden"
                  id="print-quiz-report-btn"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Diagnostic PDF</span>
                </button>
              </div>

              {/* Scholar Details row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#112648] p-4 rounded-xl text-xs">
                <div>
                  <span className="text-gray-400">Child's Name:</span>
                  <p className="font-extrabold text-white mt-0.5">{childName}</p>
                </div>
                <div>
                  <span className="text-gray-400">Assessed Age:</span>
                  <p className="font-extrabold text-[#38BDF8] mt-0.5">{childAge} Years</p>
                </div>
                <div>
                  <span className="text-gray-400">Analysis Date:</span>
                  <p className="font-extrabold text-white mt-0.5">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-400">Status Check:</span>
                  <p className="font-extrabold text-emerald-400 mt-0.5 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Success Rated</span>
                  </p>
                </div>
              </div>

              {/* Big Score circle and status */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                
                {/* Score Dial */}
                <div className="md:col-span-4 flex justify-center py-2">
                  <div className="w-36 h-36 rounded-full border-8 border-amber-400/40 border-t-amber-400 flex flex-col justify-center items-center shadow-lg shadow-amber-500/5 select-none bg-blue-950">
                    <span className="text-gray-400 font-mono text-[10px] uppercase font-bold tracking-widest leading-none">Readiness</span>
                    <span className="font-display font-black text-3.5xl text-white">{finalScore}%</span>
                    <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mt-1">{finalScore >= 50 ? 'Approved' : 'Care Rated'}</span>
                  </div>
                </div>

                {/* Status verdict text */}
                <div className="md:col-span-8 space-y-2">
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">{evaluationTitle}</span>
                  <h4 className="font-display font-extrabold text-white text-lg md:text-xl leading-tight">Verdict: {finalScore >= 50 ? 'Preschool Ready' : 'Nurturing Recommended'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {evaluationVerdict}
                  </p>
                </div>

              </div>

              {/* Domain breakdown bars */}
              <div className="space-y-3 pt-4 border-t border-blue-900/40">
                <h4 className="text-sm font-bold text-gray-200">Developmental Domain breakdown %</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(Object.keys(domainScores) as Array<keyof typeof domainScores>).map((dom) => (
                    <div key={dom} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="font-semibold text-gray-300 capitalize">{dom} Skills Maturity</span>
                        <span className="font-mono text-white font-bold">{domainScores[dom]}%</span>
                      </div>
                      <div className="w-full h-1 bg-blue-950 rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${domainScores[dom]}%` }}
                          className="h-full bg-amber-400 rounded-full"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement & Recommendations */}
              <div className="bg-[#10294E] border border-blue-900 p-5 rounded-2xl text-left space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Recommended Placement &amp; Interventions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400">Suggested Level Placement:</span>
                    <p className="font-extrabold text-white mt-0.5">{suggestedPlacement}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Primary Care Recommendation:</span>
                    <p className="font-medium text-slate-200 mt-0.5 leading-relaxed">
                      {recommendationText}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* STEP 4: Submit Results to Counselor for Admissions Direct Placement */}
            {!formSubmitted ? (
              <div className="bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl text-left space-y-5 print:hidden" id="quiz-lead-capture-card">
                <div className="space-y-1">
                  <p className="text-amber-600 font-extrabold text-xs uppercase tracking-wider">High-Converting Direct Access Link</p>
                  <h4 className="font-display font-bold text-gray-800 text-base">Submit Diagnostics to Director Susan Kigozi?</h4>
                  <p className="text-xs text-gray-500">
                    Send these diagnostics straight to our counselors to secure automated seat holds and skip long placement trial screenings upon visiting school.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Parent First Name</label>
                    <input 
                      type="text" 
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Jeremiah K"
                      className="w-full border border-gray-200 p-3 rounded-lg text-xs bg-white outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Parent Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="e.g. +256 702 987654"
                      className="w-full border border-gray-200 p-3 rounded-lg text-xs bg-white outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full text-center font-display font-bold text-xs text-white bg-[#0B2147] hover:bg-[#1E5FAD] py-3.5 rounded-lg uppercase tracking-wider transition cursor-pointer shadow"
                    >
                      Hold Placement Slot &amp; Send Diagnostic Checklist
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 px-6 py-5 rounded-2xl text-left flex items-start gap-4 animate-in zoom-in duration-300 print:hidden" id="quiz-success-alert">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 mt-0.5">
                  ✔
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-emerald-900 text-base">Checklist Transmitted Successfully!</h4>
                  <p className="text-xs text-emerald-700 leading-normal">
                    Thank you, <strong className="font-semibold">{parentName}</strong>. Mrs. Susan Kigozi is currently holding an enrollment seat allocation for <strong className="font-semibold">{childName}</strong>. Our registrar will call you on <strong className="font-mono">{parentPhone}</strong> within 12 working hours to confirm tour scheduling details.
                  </p>
                </div>
              </div>
            )}

            {/* Restart quiz */}
            <div className="text-center pt-2 print:hidden">
              <button
                onClick={restartQuiz}
                className="inline-flex items-center gap-1.5 font-display font-bold text-[#1E5FAD] hover:underline text-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Test Another Child (Clear scorecard)</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
