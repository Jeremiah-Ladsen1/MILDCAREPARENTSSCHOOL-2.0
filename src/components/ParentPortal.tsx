/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { studentProfiles, announcements } from '../data';
import { 
  Users, Calendar, Award, CheckCircle, Clock, AlertTriangle, 
  LayoutDashboard, Coins, MessageSquare, Image, FileText, 
  HelpCircle, ChevronDown, Send, Check, DollarSign, Download, Lock
} from 'lucide-react';

export default function ParentPortal() {
  const [activeStudentIdx, setActiveStudentIdx] = useState(0);
  const activeStudent = studentProfiles[activeStudentIdx];

  // Tab controls inside portal
  const [portalView, setPortalView] = useState<'dashboard' | 'academics' | 'fees' | 'messages' | 'gallery' | 'resources'>('dashboard');

  // Payment states
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card'>('momo');
  const [momoNumber, setMomoNumber] = useState('');
  const [payingState, setPayingState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Messaging state
  const [messageText, setMessageText] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'parent' | 'teacher', text: string, time: string }>>([
    { sender: 'teacher', text: 'Good morning! Liam had an award-winning swimming coordinator evaluation today. He is progressing extremely fast.', time: '09:12 AM' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Gated PDF trigger states
  const [showGateModal, setShowGateModal] = useState(false);
  const [gatedPdfName, setGatedPdfName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Standard feedback surveys state
  const [feedbackSurveyCompleted, setFeedbackSurveyCompleted] = useState(false);
  const [feedbackScore, setFeedbackScore] = useState(5);
  const [feedbackComments, setFeedbackComments] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMsg = { sender: 'parent' as const, text: messageText, time: 'Now' };
    setChatLog(prev => [...prev, newMsg]);
    const sentText = messageText;
    setMessageText('');
    setIsTyping(true);

    // Mock response after 1.5s
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Thank you for writing. I will observe this coordinate and update you in the daily diary details.";
      if (sentText.toLowerCase().includes('fee') || sentText.toLowerCase().includes('pay')) {
        replyText = "For ledger and fee installments, please visit the cost calculator or utilize the quick Mobile Money clearance bay inside your portal. Thank you!";
      } else if (sentText.toLowerCase().includes('homework') || sentText.toLowerCase().includes('read')) {
        replyText = "Liam has completed his Jolly Phonics worksheets. Consistent reading at home is highly beneficial!";
      } else if (sentText.toLowerCase().includes('swim') || sentText.toLowerCase().includes('sport')) {
        replyText = "Coach Juma reports that Liam is practicing breathing holding excellently. He is very safe in the shallow solar facility.";
      }
      setChatLog(prev => [...prev, { sender: 'teacher', text: replyText, time: 'Just now' }]);
    }, 1500);
  };

  const handlePayBalance = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAmount = parseInt(paymentAmount);
    if (!cleanAmount || cleanAmount <= 0) return;

    setPayingState('loading');
    setTimeout(() => {
      setPayingState('success');
      setTimeout(() => {
        // Adjust outstanding fees on local student state
        activeStudent.outstandingFees = Math.max(activeStudent.outstandingFees - cleanAmount, 0);
        activeStudent.paidFees += cleanAmount;
        activeStudent.paymentHistory.unshift({
          id: `pay-${Math.round(Math.random()*10000)}`,
          date: new Date().toLocaleDateString(),
          amount: cleanAmount,
          status: 'Paid',
          invoiceNo: `FC-MC-${Math.round(Math.random()*2000+1000)}`
        });
        
        setShowPaymentModal(false);
        setPayingState('idle');
        setPaymentAmount('');
      }, 1500);
    }, 1500);
  };

  const triggerGatedPdfDownload = (formName: string) => {
    setGatedPdfName(formName);
    setParentEmail('');
    setDownloadSuccess(false);
    setShowGateModal(true);
  };

  const handleGatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentEmail.trim()) return;

    setDownloadSuccess(true);
    setTimeout(() => {
      // Simulate file download trigger
      setShowGateModal(false);
      alert(`Success! Gated file "${gatedPdfName}" has been emailed to ${parentEmail} and local storage download started.`);
    }, 1200);
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSurveyCompleted(true);
  };

  return (
    <div className="w-full bg-slate-900 text-gray-100 font-sans py-12 px-4 md:px-8 text-left relative" id="portal-canvas">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Portal Upper Ribbon Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-800 p-5 rounded-2xl border border-slate-700/60 shadow-lg">
          
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-[#38BDF8] uppercase tracking-widest bg-[#1E3E6E] px-2.5 py-1 rounded inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Mild Care Parents Portal (Live)</span>
            </span>
            <h2 className="font-display font-black text-white text-lg sm:text-2xl tracking-tight leading-none">
              Family &amp; Scholar Dashboard
            </h2>
          </div>

          {/* Student Profile Switcher Selector Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:block">Active Scholar:</label>
            <div className="relative">
              <select
                value={activeStudentIdx}
                onChange={(e) => {
                  setActiveStudentIdx(parseInt(e.target.value));
                  setChatLog([
                    { sender: 'teacher', text: `Good morning! Checking on ${studentProfiles[parseInt(e.target.value)].name}'s progress. Everything is stellar!`, time: '09:12 AM' }
                  ]);
                }}
                className="bg-slate-950 text-white font-display font-bold text-xs border border-slate-700 p-3 rounded-xl pr-10 appearance-none outline-none focus:border-blue-400 cursor-pointer shadow-md select-none"
              >
                {studentProfiles.map((std, idx) => (
                  <option key={std.id} value={idx}>{std.name} ({std.class})</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Outer Grid: Sidebar Nav versus Portal Core View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Nav (Lg:3 Cols) */}
          <div className="lg:col-span-3 bg-slate-850 p-4.5 rounded-2xl border border-slate-800 space-y-3" id="portal-sidebar-nav">
            
            <button
              onClick={() => setPortalView('dashboard')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'dashboard' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Main Overview</span>
            </button>

            <button
              onClick={() => setPortalView('academics')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'academics' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Academics &amp; Remarks</span>
            </button>

            <button
              onClick={() => setPortalView('fees')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'fees' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
              id="portal-fee-tab"
            >
              <Coins className="w-4 h-4" />
              <span>Fees Ledger</span>
              {activeStudent.outstandingFees > 0 && (
                <span className="ml-auto w-2 h-2 rounded-full bg-red-500"></span>
              )}
            </button>

            <button
              onClick={() => setPortalView('messages')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'messages' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Two-Way Messaging</span>
            </button>

            <button
              onClick={() => setPortalView('gallery')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'gallery' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Scholar Activities</span>
            </button>

            <button
              onClick={() => setPortalView('resources')}
              className={`w-full text-left font-sans font-bold text-xs p-3.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer flex items-center gap-3 ${
                portalView === 'resources' ? 'bg-[#1E5FAD] text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Parent Library</span>
            </button>

            {/* Quick stats on the sidebar bottom */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800/80 text-[11px] space-y-3.5 text-slate-400 pt-5">
              <p className="font-extrabold uppercase tracking-wider text-slate-300">Quick Metrics Status</p>
              
              <div className="flex justify-between">
                <span>Registration No:</span>
                <span className="font-mono text-white font-semibold">{activeStudent.regNo}</span>
              </div>
              <div className="flex justify-between">
                <span>Class Level:</span>
                <span className="text-white font-semibold">{activeStudent.class}</span>
              </div>
              
              {/* Attendance percentage bar */}
              <div className="space-y-1 block border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span>Termly Attendance:</span>
                  <span className="text-[#38BDF8] font-bold font-mono">
                    {Math.round((activeStudent.attendance.present / activeStudent.attendance.total) * 100)}%
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${(activeStudent.attendance.present / activeStudent.attendance.total) * 100}%` }}
                    className="h-full bg-[#38BDF8] rounded-full"
                  ></div>
                </div>
              </div>

            </div>

          </div>

          {/* Portal Core Content Area (Lg:9 Cols) */}
          <div className="lg:col-span-9 bg-slate-850 p-6 rounded-2xl border border-slate-800 space-y-8 text-left" id="portal-core-output">
            
            {/* VIEW 1: Portal dashboard (OVERVIEW) */}
            {portalView === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in duration-200" id="portal-dashboard-view">
                
                {/* Upper Metrics Grid: 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="p-5 bg-[#0F264A] rounded-xl border border-[#214376]/50 space-y-1.5">
                    <span className="text-xs font-semibold text-blue-300 uppercase">Scholastic Standings</span>
                    <h3 className="font-display font-extrabold text-[#FACC15] text-2xl uppercase">EXCELLING</h3>
                    <p className="text-[11px] text-[#A5B4FC]">Avg score: {Math.round(activeStudent.grades.reduce((sum, g) => sum + g.score, 0) / activeStudent.grades.length)}% across subjects</p>
                  </div>

                  <div className="p-5 bg-emerald-950 rounded-xl border border-emerald-800/40 space-y-1.5">
                    <span className="text-xs font-semibold text-emerald-400 uppercase">Outstanding Ledger</span>
                    <h3 className="font-display font-extrabold text-white text-2xl font-mono">
                      {activeStudent.outstandingFees === 0 ? 'CLEARED' : `UGX ${activeStudent.outstandingFees.toLocaleString()}`}
                    </h3>
                    <p className="text-[11px] text-emerald-300">Total fees cleared this term: UGX {activeStudent.paidFees.toLocaleString()}</p>
                  </div>

                  <div className="p-5 bg-[#251b3d] rounded-xl border border-purple-900/40 space-y-1.5">
                    <span className="text-xs font-semibold text-purple-300 uppercase">Caretaker Remarks</span>
                    <h3 className="font-display font-extrabold text-white text-lg truncate">LIAM LEADS GRUP</h3>
                    <p className="text-[11px] text-purple-300">Click Academics tab to review detailed comments</p>
                  </div>

                </div>

                {/* Main school announcements board inside portal */}
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-white text-md tracking-tight">Active School Announcement Feeds</h3>
                  
                  <div className="space-y-4.5">
                    {announcements.map((ann) => (
                      <div 
                        key={ann.id}
                        className="p-5 bg-slate-900 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-4 text-left shadow-sm"
                      >
                        <div className="shrink-0">
                          {ann.priority === 'high' ? (
                            <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded border border-red-500/20 uppercase tracking-widest">Urgent Notice</span>
                          ) : (
                            <span className="bg-blue-500/10 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded border border-blue-500/20 uppercase tracking-widest">Information</span>
                          )}
                        </div>
                        <div className="space-y-2 flex-grow">
                          <div className="flex justify-between items-baseline flex-wrap gap-1">
                            <h4 className="font-display font-bold text-slate-100 text-sm md:text-base leading-snug">{ann.title}</h4>
                            <span className="font-mono text-[11px] text-slate-500">{ann.date}</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">{ann.content}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Dispatched: <strong className="text-slate-300 font-semibold">{ann.sender}</strong></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 2: Academics and Detailed Teacher Remarks */}
            {portalView === 'academics' && (
              <div className="space-y-8 animate-in fade-in duration-200" id="portal-academics-view">
                
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="font-display font-extrabold text-white text-lg md:text-xl">Subject-by-Subject Milestones Portfolio</h3>
                  <span className="font-mono text-xs text-slate-400">Class: <strong>{activeStudent.class}</strong></span>
                </div>

                {/* Render report table */}
                <div className="space-y-4">
                  {activeStudent.grades.map((g, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-left space-y-3"
                    >
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className="font-display font-bold text-slate-100 text-xs sm:text-sm">{g.subject}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs bg-slate-800 px-2 py-0.5 rounded text-gray-300">Grade Score: <strong>{g.score}%</strong></span>
                          <span className="bg-[#1E3E6E] hover:bg-blue-800 text-blue-300 text-[10px] font-bold px-2 py-1 rounded-sm">Grade: {g.grade}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal font-sans italic">"Remarks: {g.remarks}"</p>
                    </div>
                  ))}
                </div>

                {/* Class teacher & Headteacher writeups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                  <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-900/40 rounded-xl border border-slate-850 text-left space-y-2">
                    <p className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Class Teacher's Weekly Dairy Comment</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      "{activeStudent.teacherRemarks}"
                    </p>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase mt-2">&mdash; Lead Class Educator</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-900/40 rounded-xl border border-slate-850 text-left space-y-2">
                    <p className="text-[11px] font-bold text-purple-400 uppercase tracking-widest">Headteacher Mrs. Susan Kigozi's Evaluation</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      "{activeStudent.headTeacherRemarks}"
                    </p>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase mt-2">&mdash; School Administration head</p>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 3: Fees Ledger and Simulated MTN/Airtel MM Checkout */}
            {portalView === 'fees' && (
              <div className="space-y-8 animate-in fade-in duration-200" id="portal-fees-view">
                
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 flex-wrap gap-2">
                  <div className="text-left">
                    <h3 className="font-display font-extrabold text-white text-lg">Financial Statement Report</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 uppercase">Student Registry ID: {activeStudent.regNo}</p>
                  </div>
                  {activeStudent.outstandingFees > 0 && (
                    <button
                      onClick={() => {
                        setPaymentAmount(activeStudent.outstandingFees.toString());
                        setShowPaymentModal(true);
                        setPayingState('idle');
                      }}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wide px-5 py-3 rounded-xl transition"
                      id="trigger-payment-modal-btn"
                    >
                      Pay Outstanding Fee Balance
                    </button>
                  )}
                </div>

                {/* Ledger metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs">
                    <span className="text-slate-400">Total Billed this term:</span>
                    <p className="font-mono font-extrabold text-white text-base mt-1">UGX {(activeStudent.outstandingFees + activeStudent.paidFees).toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs text-emerald-400">
                    <span>Total Cleared &amp; Confirmed:</span>
                    <p className="font-mono font-extrabold text-white text-base mt-1">UGX {activeStudent.paidFees.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs text-red-400">
                    <span>Outstanding Balance:</span>
                    <p className="font-mono font-extrabold text-white text-base mt-1">UGX {activeStudent.outstandingFees.toLocaleString()}</p>
                  </div>
                </div>

                {/* Payment History List */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-white text-sm">Historical Payment Receipts logs</h4>
                  
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
                    <table className="w-full text-xs text-left text-slate-300">
                      <thead className="bg-[#11233F] text-slate-400 uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Invoice No</th>
                          <th className="p-3">Reference Date</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Settled Amount (UGX)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeStudent.paymentHistory.map((pt, idx) => (
                          <tr key={idx} className="border-b border-slate-800/60 last:border-0 hover:bg-slate-850/50">
                            <td className="p-3 font-mono text-white">{pt.invoiceNo}</td>
                            <td className="p-3">{pt.date}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                pt.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                              }`}>{pt.status}</span>
                            </td>
                            <td className="p-3 text-right font-mono font-bold text-white">UGX {pt.amount.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 4: Two-Way Direct Messaging Hub with simulated teacher answers */}
            {portalView === 'messages' && (
              <div className="space-y-6 animate-in fade-in duration-200" id="portal-messages-view">
                
                <div className="text-left space-y-1 pb-4 border-b border-slate-800">
                  <h3 className="font-display font-extrabold text-white text-lg">Parent-Teacher Live Chatroom</h3>
                  <p className="text-[11px] text-slate-400 uppercase">Messaging: Class coordinator &bull; Madame Sarah Nabukenya</p>
                </div>

                {/* Chat window viewport */}
                <div className="h-64 rounded-xl border border-slate-800 bg-slate-950 p-4 overflow-y-auto space-y-4 flex flex-col justify-end" id="chat-viewport">
                  {chatLog.map((chat, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col max-w-sm rounded-xl p-3.5 text-xs font-sans leading-relaxed ${
                        chat.sender === 'parent' 
                          ? 'bg-blue-600 text-white self-end text-right rounded-br-none' 
                          : 'bg-slate-800 text-gray-200 self-start text-left rounded-bl-none border border-slate-700/65'
                      }`}
                    >
                      <p className="leading-normal">{chat.text}</p>
                      <span className="text-[9px] text-indigo-200 mt-1 block font-mono">{chat.time}</span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="self-start text-xs text-slate-500 italic flex items-center gap-1">
                      <span className="animate-pulse">● ● ●</span>
                      <span>Teacher is typing reply...</span>
                    </div>
                  )}
                </div>

                {/* Chat editor */}
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input 
                    type="text" 
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type questions about homework, activities, or sick days..."
                    className="flex-grow bg-slate-950 border border-slate-800 p-3.5 rounded-xl text-xs text-white outline-none focus:border-blue-400"
                  />
                  <button
                    type="submit"
                    className="bg-[#1E5FAD] hover:bg-blue-600 active:scale-95 text-white font-bold px-5 py-3.5 rounded-xl transition flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>
            )}

            {/* VIEW 5: Scholar Activities Photos / Gallery */}
            {portalView === 'gallery' && (
              <div className="space-y-6 animate-in fade-in duration-200" id="portal-gallery-view">
                
                <div className="text-left space-y-1 pb-2">
                  <h3 className="font-display font-extrabold text-white text-lg">Scholar Portfolio Activities Logs</h3>
                  <p className="text-[11px] text-slate-400 uppercase">Recent school excursions, swimming meets, and science experiments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeStudent.activities.map((act, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-left"
                    >
                      <div className="w-full h-48 relative overflow-hidden">
                        <img src={act.image} alt={act.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <span className="absolute top-3 left-3 bg-[#0B2147]/90 text-[#38BDF8] text-[10px] uppercase font-bold px-2 py-0.5 rounded leading-none">
                          {act.date}
                        </span>
                      </div>
                      <div className="p-4 space-y-1">
                        <h4 className="font-display font-bold text-white text-sm">{act.title}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{act.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* VIEW 6: Parental resources library Download (Gated Leads PDF) */}
            {portalView === 'resources' && (
              <div className="space-y-8 animate-in fade-in duration-200" id="portal-resources-view">
                
                <div className="text-left space-y-1 border-b border-slate-800 pb-4">
                  <h3 className="font-display font-extrabold text-white text-lg">Parental Support &amp; Resource Guides</h3>
                  <p className="text-[11px] text-slate-400 uppercase">Instant PDF downloads of essential school forms and educational guidelines</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 text-left flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 text-amber-400 flex items-center justify-center font-bold rounded-lg shrink-0">
                      📄
                    </div>
                    <div className="space-y-2.5 flex-grow">
                      <div>
                        <h4 className="font-display font-bold text-white text-sm">Student Enrollment Package</h4>
                        <p className="text-[11px] text-slate-400 leading-normal">Required health codes, enrollment waivers, clothing sizes, and map rules.</p>
                      </div>
                      <button
                        onClick={() => triggerGatedPdfDownload('Student Enrollment Package')}
                        className="text-xs font-bold text-[#38BDF8] hover:underline cursor-pointer flex items-center gap-1 font-mono uppercase text-[10px]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Checklist</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 text-left flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 text-amber-400 flex items-center justify-center font-bold rounded-lg shrink-0">
                      🥗
                    </div>
                    <div className="space-y-2.5 flex-grow">
                      <div>
                        <h4 className="font-display font-bold text-white text-sm">Mental Health &amp; Menus Guideline</h4>
                        <p className="text-[11px] text-slate-400 leading-normal">Weekly dietary recipes, home bedtime rules, and emergency vitamins guides.</p>
                      </div>
                      <button
                        onClick={() => triggerGatedPdfDownload('Mental Health & Menus Guideline')}
                        className="text-xs font-bold text-[#38BDF8] hover:underline cursor-pointer flex items-center gap-1 font-mono uppercase text-[10px]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF guide</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Feedback Survey form block */}
                <div className="bg-[#1c1837] border border-purple-900/40 rounded-xl p-5 text-left space-y-4">
                  <p className="text-[11px] font-extrabold text-purple-300 uppercase tracking-widest leading-none">Monthly Survey &bull; Direct to Registrar</p>
                  
                  {!feedbackSurveyCompleted ? (
                    <form onSubmit={handleSendFeedback} className="space-y-4">
                      <div>
                        <h4 className="font-display font-bold text-white text-sm">How satisfied are you with our Term II Care coordination?</h4>
                        <p className="text-[11px] text-slate-450 mt-1">Select rating (1 to 10):</p>
                      </div>

                      <div className="flex gap-1.5 flex-wrap">
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFeedbackScore(num)}
                            className={`w-8 h-8 rounded text-xs font-bold cursor-pointer transition ${
                              feedbackScore === num ? 'bg-purple-600 text-white font-extraboldScale shadow-md' : 'bg-slate-950 text-slate-400 hover:bg-slate-900'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-1.5">
                        <textarea
                          placeholder="What can Madame Sarah Nabukenya or Director Susan Kigozi improve this month? Comments remain fully confidential..."
                          value={feedbackComments}
                          onChange={(e) => setFeedbackComments(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs text-white outline-none focus:border-purple-400 h-20 placeholder:text-slate-600 text-left"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-500 font-display font-bold text-[10px] uppercase tracking-wider text-white px-4 py-2.5 rounded-lg transition"
                      >
                        Dispatch Confidential Feedback Check
                      </button>
                    </form>
                  ) : (
                    <div className="bg-purple-950/40 border border-purple-800/40 p-4 rounded-lg flex items-start gap-3 text-xs text-purple-200 animate-in zoom-in duration-300">
                      <span className="text-purple-400 font-bold">✔</span>
                      <div className="space-y-1">
                        <h5 className="font-bold">Evaluation Registered Confirmed!</h5>
                        <p className="text-[11px] leading-normal pt-0.5">Thank you, parent. Your satisfaction index of {feedbackScore}/10 has been secured by Director Susan Kigozi's private administration cabinet rules.</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* MODAL 1: Payment Checkout Gateway (Simulated) */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200" id="payment-checkout-modal">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 w-full max-w-md overflow-hidden text-left shadow-2xl relative">
            
            <div className="bg-[#11233F] p-5 border-b border-blue-900 flex justify-between items-center text-white">
              <div>
                <h4 className="font-display font-extrabold text-sm uppercase tracking-wider">Simulated Payment Checkout</h4>
                <p className="text-[10px] text-gray-400 leading-none mt-1">Secured by Kampala National Finance relays</p>
              </div>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-300 hover:text-white font-black cursor-pointer text-xs"
              >
                ✖
              </button>
            </div>

            <form onSubmit={handlePayBalance} className="p-6 space-y-5 text-xs text-gray-300">
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                <span>Paying Fees for:</span>
                <strong className="text-white font-bold">{activeStudent.name}</strong>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Specify Settlement Amount (UGX)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    required
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    placeholder="e.g. 350000"
                    className="w-full bg-slate-950 border border-slate-850 p-3.5 rounded-xl text-xs text-white outline-none focus:border-blue-400 font-bold font-mono pl-12"
                  />
                  <span className="absolute left-4 top-3.5 font-bold font-mono text-slate-500">UGX</span>
                </div>
                <p className="text-[10px] text-gray-500">Max pending balance: UGX {activeStudent.outstandingFees.toLocaleString()}</p>
              </div>

              {/* Momo / Card selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Choose Gateway Channel</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('momo')}
                    className={`py-3.5 rounded-xl border font-bold text-[11px] uppercase transition cursor-pointer text-center ${
                      paymentMethod === 'momo' ? 'border-amber-400 bg-amber-400/10 text-amber-400' : 'border-slate-800 font-semibold'
                    }`}
                  >
                    Mobile Money (MTN / Airtel)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3.5 rounded-xl border font-bold text-[11px] uppercase transition cursor-pointer text-center ${
                      paymentMethod === 'card' ? 'border-[#38BDF8] bg-blue-500/15 text-[#38BDF8]' : 'border-slate-800 font-semibold'
                    }`}
                  >
                    VISA / Mastercard Credit
                  </button>
                </div>
              </div>

              {paymentMethod === 'momo' ? (
                <div className="space-y-1.5 animate-in slide-in-from-top duration-150">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-left">Recipient Telephone Number (Uganda Carrier)</label>
                  <input 
                    type="tel" 
                    required
                    value={momoNumber}
                    onChange={(e) => setMomoNumber(e.target.value)}
                    placeholder="e.g. 0772 123456 or 0701 987654"
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-xl text-xs text-white outline-none focus:border-blue-400 font-mono"
                  />
                  <p className="text-[9px] text-[#A5B4FC]">A simulated push-notification will be fired to register checkout codes.</p>
                </div>
              ) : (
                <div className="space-y-1.5 animate-in slide-in-from-top duration-150">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">VISA / Credit Card Token No</label>
                  <input 
                    type="text" 
                    required
                    placeholder="•••• •••• •••• ••••"
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-xl text-xs text-white outline-none focus:border-blue-400 font-mono"
                  />
                </div>
              )}

              {/* Status loader */}
              {payingState === 'idle' && (
                <button
                  type="submit"
                  className="w-full text-center font-display font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 py-4 rounded-xl uppercase tracking-wider transition cursor-pointer shadow border border-amber-300"
                >
                  Initiative Quick Tele-payment
                </button>
              )}

              {payingState === 'loading' && (
                <div className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-2">
                  <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="font-mono text-[10px] text-amber-400 uppercase">Synchronizing Mobile Money API tunnels...</p>
                </div>
              )}

              {payingState === 'success' && (
                <div className="w-full p-4 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-xl text-center font-bold animate-in zoom-in duration-200">
                  ✔ Confirmation code matched! Ledger refreshed.
                </div>
              )}

            </form>

          </div>
        </div>
      )}

      {/* MODAL 2: Gated Leads Library (Email Capture) */}
      {showGateModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200" id="gated-resource-modal">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-sm overflow-hidden text-left relative space-y-5">
            
            <div className="flex justify-between items-start pb-2 border-b border-slate-800 text-white">
              <div>
                <span className="text-amber-400 text-[10px] uppercase font-bold tracking-widest bg-amber-400/10 px-2 py-0.5 rounded">Gated Resource Download</span>
                <h4 className="font-display font-extrabold text-sm mt-1">{gatedPdfName}</h4>
              </div>
              <button 
                onClick={() => setShowGateModal(false)}
                className="text-gray-400 hover:text-white font-black cursor-pointer text-xs"
              >
                ✖
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              To verify your parenting credential and email you the updated, print-ready PDF guidelines directly, please register your private email address.
            </p>

            <form onSubmit={handleGatedSubmit} className="space-y-4 text-xs text-gray-300">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Parent Primary Email</label>
                <input 
                  type="email" 
                  required
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="e.g. jeremiah@example.com"
                  className="w-full bg-slate-950 border border-slate-850 p-3.5 rounded-xl text-xs text-white outline-none focus:border-blue-400"
                />
              </div>

              {downloadSuccess ? (
                <div className="py-2.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-xl text-center font-bold text-[10px] uppercase tracking-wider animate-in zoom-in">
                  Preparing file... Transmitting to mailbox
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-center font-display font-bold text-xs text-[#0B2147] bg-amber-400 hover:bg-amber-500 py-3.5 rounded-xl uppercase tracking-wider transition cursor-pointer shadow border border-amber-305"
                >
                  Unseal and Dispatch PDF Guide
                </button>
              )}
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
