import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Mail, 
  Copy, 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  Printer,
  LogIn,
  Check,
  Shield,
  FileText,
  Globe,
  Clock
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [ticketCategory, setTicketCategory] = useState('Client Onboarding & Intake');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@restorelife.co.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-24">
      {/* Sub-header navigation row matching Screenshot 1 */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 text-xs font-medium text-slate-500">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 text-slate-600 hover:text-[#004b70] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              onNavigate('privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy</span>
          </button>

          <button
            onClick={() => {
              onNavigate('terms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms</span>
          </button>

          <button
            onClick={() => {
              onNavigate('support');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#004b70]/30 bg-white text-[#004b70] font-bold shadow-2xs cursor-default"
          >
            <Globe className="w-3.5 h-3.5 text-[#004b70]" />
            <span>Support</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('onboarding-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#004b70] text-white font-semibold hover:bg-[#003854] transition-all shadow-xs cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      {/* Main Support Center Header Card matching Screenshot 1 */}
      <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Support Center</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[#0f2027] font-serif-display tracking-tight">
            Help &amp; Support
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            Need assistance with the Restore Life platform? Our dedicated team is available to assist practitioners and clients with clinical tools, account management, and troubleshooting.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium">Effective Date: October 2026</span>
            <span>•</span>
            <span>Last Updated: October 16, 2026</span>
            <span>•</span>
            <span>Version: 1.0.0</span>
          </div>
        </div>

        {/* Nested "Official Support Channel" Card matching Screenshot 1 */}
        <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6 sm:p-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#004b70] text-xs font-semibold shadow-2xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Support Channel</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0f2027] font-serif-display">
                We're Here to Help
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Have questions regarding our dietary suite, consultation scheduling, client onboarding, or billing? Reach out to our dedicated support team directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:support@restorelife.co.in"
                className="px-6 py-3 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 text-emerald-300" />
                <span>Email Support</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer hover:border-slate-300 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-bold mb-0.5">
                Support Email
              </span>
              <a 
                href="mailto:support@restorelife.co.in" 
                className="font-bold text-[#004b70] text-sm sm:text-base hover:underline"
              >
                support@restorelife.co.in
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon – Sat, 9:00 AM – 7:00 PM IST</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Response: <strong>&lt; 24 hours</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Support Inquiry Form */}
      <div className="luxury-card rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-normal text-[#0f2027] font-serif-display">
            Send an Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Submit your question and our clinical care desk will follow up directly at your email.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-serif-display text-xl text-emerald-900">Inquiry Received</h4>
            <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
              Thank you, {name}. Your ticket has been logged with reference to "{ticketCategory}". A care coordinator will contact you at {email} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Category *</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 text-slate-800 cursor-pointer"
                >
                  <option value="Client Onboarding & Intake">Client Onboarding &amp; Intake</option>
                  <option value="Dietitian Consultation Scheduling">Dietitian Consultation Scheduling</option>
                  <option value="Mobile App Access & Credentials">Mobile App Access &amp; Credentials</option>
                  <option value="Lab Biomarker Upload Help">Lab Biomarker Upload Help</option>
                  <option value="Billing & Invoicing">Billing &amp; Invoicing</option>
                  <option value="General Health Care Question">General Health Care Question</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">How can we help? *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide details about your question, account, or preferred consultation timing..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold shadow-md shadow-[#004b70]/20 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4 text-emerald-300" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
