import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Mail, 
  Copy, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft,
  Printer,
  LogIn,
  Check
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-20">
      {/* Sub-header navigation row matching Screenshot 5 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/60 pb-4 text-xs font-medium text-slate-500">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-slate-600 hover:text-[#004b70] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => onNavigate('support')}
            className="px-3 py-1 rounded-full bg-slate-200/70 text-[#004b70] font-bold transition-colors cursor-pointer"
          >
            Support
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#004b70] text-white font-medium hover:bg-[#003956] transition-colors cursor-pointer"
          >
            <LogIn className="w-3 h-3" /> Sign In
          </button>
        </div>
      </div>

      {/* Main Support Center Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#004b70]" /> Support Center
        </div>

        <h1 className="text-4xl sm:text-5xl font-normal text-[#0f2027] font-serif-display tracking-tight">
          Help & Support
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          Need assistance with the Restore Life platform? Our dedicated team is available to assist practitioners and clients with clinical tools, account management, and troubleshooting.
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Effective Date: October 2026</span>
          <span>•</span>
          <span>Last Updated: October 16, 2026</span>
          <span>•</span>
          <span>Version: 1.0.0</span>
        </div>
      </div>

      {/* Official Support Channel Card (matching Screenshot 5) */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-xs space-y-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" /> Official Support Channel
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h2 className="text-2xl font-normal text-[#0f2027] font-serif-display">
              We're Here to Help
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Have questions regarding our dietary suite, consultation scheduling, client onboarding, or billing? Reach out to our dedicated support team directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:support@restorelife.co.in"
              className="px-5 py-2.5 rounded-full bg-[#004b70] hover:bg-[#003956] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Email Support</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">Support Email</span>
            <a href="mailto:support@restorelife.co.in" className="font-bold text-[#004b70] text-sm hover:underline">
              support@restorelife.co.in
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Operating Days: <strong>Mon – Sat, 9 AM – 6 PM IST</strong></span>
            <span>•</span>
            <span>Response Time: <strong>Within 24–48 hours</strong></span>
          </div>
        </div>
      </div>

      {/* Support Request Form */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-xs space-y-6">
        <div>
          <h3 className="text-xl font-normal text-[#0f2027] font-serif-display">
            Send a Direct Message
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Submit your inquiry and our support team will respond to your registered email address.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="font-serif-display text-lg text-emerald-900">Message Received</h4>
            <p className="text-xs text-emerald-700 max-w-md mx-auto">
              Thank you, {name}. Your inquiry has been routed to our clinical support team. We will get back to you shortly at {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#004b70]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#004b70]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Inquiry Category *</label>
              <select
                value={ticketCategory}
                onChange={(e) => setTicketCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#004b70] text-slate-800"
              >
                <option value="Client Onboarding">Client Onboarding & Intake</option>
                <option value="Appointments & Scheduling">Appointments & Scheduling</option>
                <option value="Diet Planning & Templates">Diet Planning & Templates</option>
                <option value="Account Access & Login">Account Access & Login</option>
                <option value="Billing & Subscriptions">Billing & Subscriptions</option>
                <option value="Privacy & Security Request">Privacy & Security Request</option>
                <option value="General Feedback / Other">General Feedback / Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Message *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we assist you?"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#004b70]"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#004b70] hover:bg-[#003956] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
