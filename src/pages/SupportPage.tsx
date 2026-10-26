import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  Copy,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  Headphones
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [ticketCategory, setTicketCategory] = useState('Client Onboarding');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@restorelife.co.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const ref = `RL-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Headphones className="w-3.5 h-3.5" /> Care & Clinical Assistance
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          RestoreLife Support Desk
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Have questions about your clinical onboarding, meal plan access, appointment scheduling, or mobile app features? Our operations and care team are here to support you.
        </p>
      </div>

      {/* Official Channel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email Desk</p>
            <p className="text-sm font-bold text-slate-900 mt-1 truncate">support@restorelife.co.in</p>
          </div>
          <button
            onClick={handleCopyEmail}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Support Email'}</span>
          </button>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Response Window</p>
            <p className="text-sm font-bold text-slate-900 mt-1">Within 24–48 Business Hours</p>
          </div>
          <p className="text-xs text-slate-500">Urgent medical queries escalated immediately to assigned RDs.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Operating Schedule</p>
            <p className="text-sm font-bold text-slate-900 mt-1">Mon – Sat, 9 AM – 6 PM IST</p>
          </div>
          <p className="text-xs text-slate-500">Care desk closed on Indian National Holidays.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Data Privacy</p>
            <p className="text-sm font-bold text-slate-900 mt-1">Encrypted & Confidential</p>
          </div>
          <p className="text-xs text-slate-500">Compliant with health data and privacy standards.</p>
        </div>
      </div>

      {/* Main Support Form & Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form */}
        <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#004b70] font-heading">Submit a Support Request</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Need technical or dietary support? Fill in the details below and a care coordinator will connect with you.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 font-heading">
                Support Ticket Created! Reference #{ticketRef}
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Your ticket has been dispatched to our care desk under the <strong>{ticketCategory}</strong> queue. An acknowledgment has been sent to <strong>{email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs shadow-xs hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Inquiry Category *</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white focus:outline-none focus:border-[#004b70]"
                >
                  <option value="Client Onboarding">Client Onboarding & Initial Intake</option>
                  <option value="Appointments & Scheduling">Appointments & Video Consultation Scheduling</option>
                  <option value="Diet Planning & Templates">Diet Planning, Macro Targets & Recipes</option>
                  <option value="Technical & System Issue">Technical & System Issue on Portal/App</option>
                  <option value="Account Access & Login">Account Access & Login Issues</option>
                  <option value="Billing & Subscriptions">Billing, Invoices & Subscriptions</option>
                  <option value="Privacy & Security Request">Privacy, Health Data & Security Request</option>
                  <option value="General Feedback / Other">General Feedback / Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Detailed Message *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain how we can help you or describe any issue you encountered..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#004b70] hover:bg-[#003652] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Support Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Common Topics & Quick Answers */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileQuestion className="w-4 h-4 text-emerald-600" />
              <span>Common Support Topics</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 rounded-xl bg-white border border-slate-200/60 space-y-1">
                <strong className="text-slate-800">How do I reschedule a consultation?</strong>
                <p>Log in to your client app or reply to your appointment confirmation email at least 6 hours in advance.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/60 space-y-1">
                <strong className="text-slate-800">Where do I upload new blood lab reports?</strong>
                <p>You can upload PDF lab reports directly in your intake questionnaire or email them to your assigned dietitian.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/60 space-y-1">
                <strong className="text-slate-800">Can I request a vegetarian/vegan meal plan?</strong>
                <p>Yes. 100% of our clinical nutrition programs can be calibrated for Indian vegetarian, vegan, Jain, or gluten-sensitive diets.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => onNavigate('get-started')}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                New Client Onboarding Flow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
