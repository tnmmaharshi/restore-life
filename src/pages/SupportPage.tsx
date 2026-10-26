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
  Laptop,
  Utensils,
  UserPlus,
  Video,
  CreditCard,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  AlertOctagon
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Technical & System Issue');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@restorelife.co.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !description.trim()) return;

    // Build mailto URL as requested: "Submissions will open your default email client addressed to support@restorelife.co.in."
    const mailtoSubject = encodeURIComponent(`[${category}] ${subject} - ${name}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nCategory: ${category}\nSubject: ${subject}\n\nDescription:\n${description}`
    );
    window.location.href = `mailto:support@restorelife.co.in?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
  };

  const supportFaqs = [
    {
      q: 'How do I reset or recover my account password?',
      a: 'Navigate to the Sign In screen on the RestoreLife app or portal and select "Forgot Password". Enter your registered email address, and you\'ll receive a secure reset link with one-time verification.',
    },
    {
      q: 'How are Google Calendar and Google Meet consultations handled?',
      a: 'Upon scheduling a consultation, RestoreLife automatically syncs with your Google Calendar and generates an end-to-end encrypted Google Meet video link, delivered via email and in-app reminder.',
    },
    {
      q: 'How do I export or print diet plans and client intake summaries?',
      a: 'Practitioners and clients can open any active meal plan or intake summary and select the "Print / Export PDF" option at the top right to download a clean, clinical report.',
    },
    {
      q: 'What should I do if a client has difficulty completing the onboarding questionnaire?',
      a: 'Our care coordinator can resend a simplified mobile intake link or conduct a brief assisted intake over phone or WhatsApp during office hours.',
    },
    {
      q: 'How do I add team members, dietitians, or clinic assistants?',
      a: 'Clinic administrators can navigate to Clinic Settings > Team Management to invite practitioners and assign granular role-based permissions (Dietitian, Coordinator, Billing).',
    },
    {
      q: 'How does Restore Life safeguard client health records?',
      a: 'Client data is stored in ISO-27001 and HIPAA/DISHA compliant cloud environments with TLS 1.3 transit encryption and AES-256 rest encryption. Only authorized dietitians have access.',
    },
    {
      q: 'How do I report a software bug or suggest an enhancement?',
      a: 'Submit a ticket through the form above selecting "Technical & System Issue" or email us directly at support@restorelife.co.in with screenshots and device details.',
    },
  ];

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
      <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8 bg-white">
        
        {/* Support Center Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Support Center</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
            Help &amp; Support
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            Need assistance with the Restore Life platform? Our dedicated team is available to assist practitioners and clients with clinical tools, account management, and troubleshooting.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-2 border-b border-slate-100 pb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-700 font-semibold">Effective Date: October 2026</span>
            <span>•</span>
            <span>Last Updated: October 16, 2026</span>
            <span>•</span>
            <span>Version: 1.0.0</span>
          </div>
        </div>

        {/* Nested "Official Support Channel" Card matching Screenshot 1 */}
        <div className="rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-6 sm:p-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#004b70] text-xs font-semibold shadow-2xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Support Channel</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0a1922] font-serif-display">
                We're Here to Help
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Have questions regarding our dietary suite, consultation scheduling, client onboarding, or billing? Reach out to our dedicated support team directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:support@restorelife.co.in?subject=Support%20Inquiry%20-%20Restore%20Life"
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

          <div className="pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-bold mb-0.5">
                Support Email
              </span>
              <a 
                href="mailto:support@restorelife.co.in" 
                className="font-bold text-[#004b70] text-sm hover:underline"
              >
                support@restorelife.co.in
              </a>
            </div>

            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-bold mb-0.5">
                Response Time
              </span>
              <span className="font-semibold text-slate-800">Within 24–48 hours</span>
            </div>

            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-bold mb-0.5">
                Operating Days
              </span>
              <span className="font-semibold text-slate-800">Mon – Sat, 9 AM – 6 PM IST</span>
            </div>

            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-bold mb-0.5">
                Data Privacy
              </span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Secure &amp; Confidential
              </span>
            </div>
          </div>
        </div>

        {/* What Can We Help You With? (6 Dedicated Support Areas) */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-normal text-[#0a1922] font-serif-display">
              What Can We Help You With?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore dedicated support areas covering every aspect of the Restore Life platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Technical & App Access */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <Laptop className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Technical &amp; App Access</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sign-in troubleshooting, two-factor authentication, system outages, and browser/app compatibility issues.
              </p>
            </div>

            {/* 2. Diet & Nutrition Planning */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <Utensils className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Diet &amp; Nutrition Planning</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Creating meal templates, macro calculators, food database management, and PDF report export questions.
              </p>
            </div>

            {/* 3. Client Onboarding */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <UserPlus className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Client Onboarding</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Client registration links, medical intake forms, dietary preference questionnaires, and client record updates.
              </p>
            </div>

            {/* 4. Appointments & Video Calls */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <Video className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Appointments &amp; Video Calls</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Google Calendar synchronization, Google Meet appointment links, consultation rescheduling, and reminders.
              </p>
            </div>

            {/* 5. Billing & Subscriptions */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <CreditCard className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Billing &amp; Subscriptions</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Invoices, payment ledger questions, team seat expansions, and clinic subscription management.
              </p>
            </div>

            {/* 6. Privacy & Compliance */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1922]">Privacy &amp; Compliance</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Health data protection questions, account deletion requests, Google API consent, and HIPAA/GDPR standards.
              </p>
            </div>
          </div>
        </div>

        {/* Send a Direct Message / Submit a Support Request Form */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-6 pt-8 border-t border-slate-100">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004b70]">
              Send a Direct Message
            </span>
            <h3 className="text-2xl font-normal text-[#0a1922] font-serif-display">
              Submit a Support Request
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill out the details below and we'll format your ticket directly for our support desk at{' '}
              <a href="mailto:support@restorelife.co.in" className="text-[#004b70] underline">
                support@restorelife.co.in
              </a>.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-serif-display text-xl text-emerald-900">Email Draft Prepared</h4>
              <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Your default email client was opened addressed to support@restorelife.co.in with your inquiry details. Our support team responds within 24–48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#004b70] underline cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
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
                  <label className="text-xs font-semibold text-slate-700">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
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

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Inquiry Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 text-slate-800 cursor-pointer"
                >
                  <option value="Technical & System Issue">Technical &amp; System Issue</option>
                  <option value="Account Access & Login">Account Access &amp; Login</option>
                  <option value="Diet Planning & Templates">Diet Planning &amp; Templates</option>
                  <option value="Client Onboarding">Client Onboarding</option>
                  <option value="Appointments & Scheduling">Appointments &amp; Scheduling</option>
                  <option value="Billing & Subscriptions">Billing &amp; Subscriptions</option>
                  <option value="Privacy & Security Request">Privacy &amp; Security Request</option>
                  <option value="General Feedback / Other">General Feedback / Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Subject Summary <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Question regarding diet plan PDF export or onboarding login"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Detailed Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please provide full details about the issue or question..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold shadow-md shadow-[#004b70]/20 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-emerald-300" />
                </button>
                <p className="text-[11px] text-slate-400">
                  Submissions will open your default email client addressed to support@restorelife.co.in.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Self-Service Help - Frequently Asked Questions (7 Specific Questions) */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004b70]">
              Self-Service Help
            </span>
            <h3 className="text-2xl font-normal text-[#0a1922] font-serif-display">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Find answers to common questions about using Restore Life, account configuration, and troubleshooting.
            </p>
          </div>

          <div className="space-y-3">
            {supportFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="luxury-card rounded-2xl overflow-hidden transition-all bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-medium text-slate-900 text-sm hover:text-[#004b70] transition-colors cursor-pointer select-none"
                  >
                    <span className="font-semibold">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#004b70] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Medical Emergency Disclaimer Box matching user text */}
        <div className="rounded-2xl border-2 border-rose-500/25 bg-rose-500/5 p-6 space-y-2.5">
          <div className="flex items-center gap-2 font-semibold text-rose-800">
            <AlertOctagon className="w-5 h-5 shrink-0 text-rose-600" />
            <h4 className="text-sm sm:text-base font-bold font-serif-display">
              Medical Emergency Disclaimer
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Restore Life is a clinical nutrition management and software platform for dietitians and clients. Restore Life does not provide emergency medical interventions. If you or someone under your care is experiencing an acute medical emergency, severe allergic reaction, or critical symptom, please contact your local emergency services (<strong>112</strong> or <strong>108</strong> in India, <strong>911</strong> in the US) or visit the nearest hospital emergency room immediately.
          </p>
        </div>

        {/* Footer line */}
        <div className="text-center pt-2 text-xs text-slate-400 border-t border-slate-100">
          <p>© 2026 Restore Life. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};
