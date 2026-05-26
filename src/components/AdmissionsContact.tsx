/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Calendar, Clock, Award, 
  CheckCircle, Shield, Sparkles, Smile, ArrowRight, Check 
} from 'lucide-react';
import { TourBooking } from '../types';

export default function AdmissionsContact() {
  const [success, setSuccess] = useState(false);
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('Nursery Baby Class');
  
  // Interactive scheduler dates
  const [chosenDate, setChosenDate] = useState('May 28, 2026');
  const [chosenTime, setChosenTime] = useState('10:00 AM');

  const tourDates = [
    { label: 'Thu May 28', value: 'May 28, 2026' },
    { label: 'Fri May 29', value: 'May 29, 2026' },
    { label: 'Mon Jun 01', value: 'June 01, 2026' },
    { label: 'Tue Jun 02', value: 'June 02, 2026' }
  ];

  const tourTimes = ['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM'];

  // Newsletter signup state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    
    setSuccess(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="w-full bg-white font-sans py-12 md:py-16 px-4 md:px-8 text-left border-b border-gray-100" id="admissions-contact-page">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-[#1E5FAD] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Admissions Open: Term II Intake
          </span>
          <h2 className="font-display font-extrabold text-[#0B2147] text-2.5xl sm:text-3.5xl tracking-tight">
            Schedule a Private Tour &bull; Secure Placement
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Experience our classrooms, meet leading class teachers, and verify our heated swimming facility. Walk-ins are welcome from Monday to Friday.
          </p>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Calendar Tour Scheduler Form (Lg: 7 Cols) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-150 shadow-sm text-left space-y-6" id="tour-scheduler-card">
            
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <span className="text-2xl">📅</span>
              <div>
                <h3 className="font-display font-bold text-[#0B2147] text-base md:text-lg">Reserve Campus Walk Slots</h3>
                <p className="text-[11px] text-gray-500 leading-none mt-1">Select dates below to lock standard automated booking registers.</p>
              </div>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 2 Cols row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Jeremiah Ladsen"
                      className="w-full border border-gray-200 bg-white p-3.5 rounded-xl outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Child's Name &amp; age</label>
                    <input 
                      type="text" 
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Liam Ladsen (Age 4)"
                      className="w-full border border-gray-200 bg-white p-3.5 rounded-xl outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                </div>

                {/* Contacts row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Your phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +256 702 987654"
                      className="w-full border border-gray-200 bg-white p-3.5 rounded-xl outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-700 uppercase">Your Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. info@example.com"
                      className="w-full border border-gray-200 bg-white p-3.5 rounded-xl outline-none focus:border-[#1E5FAD]"
                    />
                  </div>
                </div>

                {/* Dropdown level check */}
                <div className="space-y-1.5 text-xs">
                  <label className="text-[11px] font-bold text-gray-700 uppercase">Grade Level of Interest</label>
                  <select 
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border border-gray-200 bg-white p-3.5 rounded-xl font-semibold outline-none focus:border-[#1E5FAD]"
                  >
                    <option>Nursery Care Baby Playgroup (Ages 2.5 - 4)</option>
                    <option>Pre-Primary Preparatory class (Ages 4 - 6)</option>
                    <option>Primary Level Grade P1 to P3 (Lower Elementary)</option>
                    <option>Primary Level Grade P4 to P7 (Primary Leaving Examination tracking)</option>
                  </select>
                </div>

                {/* SELECTING TOUR DATE (Interactive button rows) */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wide block text-left">Select Tour Reference Date</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {tourDates.map((td) => (
                      <button
                        key={td.value}
                        type="button"
                        onClick={() => setChosenDate(td.value)}
                        className={`py-3 rounded-xl border text-xs font-bold font-display text-center transition cursor-pointer select-none ${
                          chosenDate === td.value 
                            ? 'bg-[#1E5FAD] text-white border-transparent shadow-md' 
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {td.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SELECTING TOUR HOUR */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wide block text-left">Select Arrival window</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {tourTimes.map((tc) => (
                      <button
                        key={tc}
                        type="button"
                        onClick={() => setChosenTime(tc)}
                        className={`py-3 rounded-xl border text-xs font-mono font-bold text-center transition cursor-pointer select-none ${
                          chosenTime === tc 
                            ? 'bg-amber-400 text-slate-900 border-transparent shadow' 
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {tc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full text-center font-display font-bold text-xs text-white bg-[#0B2147] hover:bg-[#1E5FAD] py-4 rounded-xl uppercase tracking-wider transition cursor-pointer shadow-lg"
                  >
                    Lock Private Tour on {chosenDate} @ {chosenTime}
                  </button>
                </div>

              </form>
            ) : (
              <div className="p-6 bg-emerald-50 border border-emerald-250 rounded-2xl space-y-3 text-emerald-800 animate-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0">
                  ✔
                </div>
                <h4 className="font-display font-bold text-base md:text-lg text-emerald-900">Tour Booking Confirmed Successful!</h4>
                <p className="text-xs leading-relaxed">
                  Thank you, <strong className="font-semibold">{parentName}</strong>. Our registrar Mrs. Susan Kigozi has locked a specialized slot on <strong className="font-semibold text-emerald-950 font-mono">{chosenDate} at {chosenTime}</strong> for your scholar <strong className="font-semibold">{childName}</strong>.
                </p>
                <div className="p-4 bg-white/70 rounded-xl text-left text-xs space-y-1 block border border-emerald-200/50">
                  <p className="font-bold text-gray-800">Arrival Instructions:</p>
                  <p className="text-gray-500 leading-normal">Please report to our Cape Road, Munyonyo gate entrance with your reference telephone <strong className="font-mono text-gray-800">{phone}</strong>. A class caretaker has been assigned to coordinate your walks.</p>
                </div>
              </div>
            )}

          </div>

          {/* Location Map & Carrier Info (Lg: 5 Cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-[#0B2147] text-lg sm:text-xl">Contact Information</h3>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 text-xs leading-normal">
                  <MapPin className="w-4.5 h-4.5 text-[#1E5FAD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 block font-sans">Physical Address:</strong>
                    <span className="text-gray-500">Cape Road, Munyonyo near Commonwealth Resort &bull; Kampala, Uganda</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs leading-normal font-sans">
                  <Phone className="w-4.5 h-4.5 text-[#1E5FAD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 block">Enrollment Telephone lines:</strong>
                    <a href="tel:+256702987654" className="text-gray-500 block hover:text-[#1E5FAD] transition">+256 702 987654 (Direct Registration)</a>
                    <a href="tel:+256772123456" className="text-gray-500 block hover:text-[#1E5FAD] transition">+256 772 123456 (Administrative head)</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs leading-normal">
                  <Mail className="w-4.5 h-4.5 text-[#1E5FAD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 block">Digital electronic letters:</strong>
                    <a href="mailto:admissions@mildcareparents.com" className="text-gray-500 hover:text-[#1E5FAD] transition block">admissions@mildcareparents.com</a>
                    <a href="mailto:info@mildcareparents.com" className="text-gray-500 hover:text-[#1E5FAD] transition block">info@mildcareparents.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector Map layout representatively */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4 shadow-md relative overflow-hidden">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 uppercase tracking-widest leading-none">Directions Satellite Guide</span>
              <h4 className="font-display font-bold text-sm">Where To Find Us in Munyonyo</h4>
              
              {/* Decorative visual map blocks */}
              <div className="h-44 bg-slate-950 rounded-xl relative overflow-hidden border border-slate-800 flex items-center justify-center p-4">
                
                {/* Simulated streets lines representatively */}
                <div className="absolute w-full h-[2px] bg-slate-800 top-1/2 left-0 pointer-events-none"></div>
                <div className="absolute h-full w-[2px] bg-slate-800 left-1/3 top-0 pointer-events-none"></div>
                <div className="absolute h-full w-[2px] bg-slate-800 left-2/3 top-0 pointer-events-none"></div>
                
                {/* Landmarks marker */}
                <div className="absolute top-8 left-8 bg-[#11233F] text-[9px] px-2 py-0.5 rounded text-gray-300 font-bold border border-blue-900">
                  Commonwealth Resort
                </div>

                <div className="absolute bottom-6 right-8 bg-[#1B3F11] text-[9px] px-2 py-0.5 rounded text-[#81F54B] font-bold border border-green-900">
                  Lake Victoria view
                </div>

                {/* Our School Flag anchor */}
                <div className="absolute top-1/2 left-1/3 -mt-6 -ml-5 flex flex-col items-center gap-1 z-10 animate-pulse">
                  <div className="bg-amber-400 text-slate-950 font-bold text-[10px] uppercase font-display px-2 py-1 rounded shadow-lg border border-white flex items-center gap-1">
                    <span>⚓</span>
                    <span>MILD CARE</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white"></div>
                </div>

              </div>
              
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                Proceed off Cape Road from Munyonyo Commonwealth Resort, follow the custom blue "Mild Care Parents School" markers exactly 450 meters down on your left. Parking is fully secure and free inside.
              </p>
            </div>

            {/* Newsletter Subscription block */}
            <div className="bg-[#1c1837] border border-purple-900/40 p-6 rounded-2xl text-left space-y-4">
              <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">Child Care newsletters</span>
              <h4 className="font-display font-bold text-white text-base">Subscribe for parenting booklets</h4>
              <p className="text-xs text-slate-350 leading-relaxed">
                Receive Mrs. Susan Kigozi's monthly child-development books, detailing Jolly Phonics homework tools and speech coordination. No spam, ever.
              </p>

              {!newsletterSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2.5">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="e.g. parent@example.com"
                    className="flex-grow bg-[#0c091f] border border-purple-950 p-3 rounded-xl text-xs text-white outline-none focus:border-purple-400"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-500 font-display font-bold text-xs text-white px-5 rounded-xl transition cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-purple-950/50 text-purple-200 rounded-lg text-xs flex items-center gap-2 font-semibold">
                  <span>✔</span>
                  <span>Registered successfully! Check code in mailbox.</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
