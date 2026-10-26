import React, { useEffect, useState } from 'react';
import {
  HEALTH_GOALS,
  PREFERRED_MODES,
  FAQS,
  CLIENT_RESULTS,
  CLINICAL_CONDITIONS,
} from '../data/mockData';
import { ConsultationForm } from '../types';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  X,
  ShieldCheck,
  Clock,
  UserRound,
  Droplet,
  Scale,
  Flower2,
  HeartPulse,
  Leaf,
  Activity,
} from 'lucide-react';

interface HomePageProps {
  onNavigateSupport?: () => void;
}

const CONDITION_ICONS: Record<string, React.ElementType> = {
  diabetes: Droplet,
  weight: Scale,
  pcos: Flower2,
  'fatty-liver': HeartPulse,
  'gut-health': Leaf,
  thyroid: Activity,
};

const STEPS = [
  { title: 'Fill in a short form', text: 'Tell us a little about yourself and what you would like help with. It takes about 2 minutes.' },
  { title: 'We call you', text: 'Our team gets in touch within 24 hours to answer your questions and set up your account.' },
  { title: 'Meet your dietitian', text: 'A one-hour call to understand your health, routine and the food you enjoy.' },
  { title: 'Follow your plan', text: 'Get your meal plan in the RestoreLife app, track progress and chat with your dietitian anytime.' },
];

const EMPTY_FORM: ConsultationForm = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+91',
  phone: '',
  healthGoal: '',
  preferredMode: 'phone',
  notes: '',
};

const SectionHeading: React.FC<{ eyebrow: string; title: string; text?: string }> = ({ eyebrow, title, text }) => (
  <div className="max-w-2xl mx-auto text-center space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#004b70]">{eyebrow}</p>
    <h2 className="text-3xl sm:text-4xl font-normal text-[#0a1922] font-serif-display tracking-tight">{title}</h2>
    {text && <p className="text-base text-slate-600 leading-relaxed">{text}</p>}
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigateSupport }) => {
  const [formData, setFormData] = useState<ConsultationForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationForm | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const scrollToForm = (prefillGoal?: string) => {
    if (prefillGoal) {
      setFormData(prev => ({ ...prev, healthGoal: prefillGoal }));
    }
    const el = document.getElementById('onboarding-form');
    if (el) {
      window.history.replaceState({}, '', '#onboarding-form');
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const update = <K extends keyof ConsultationForm>(key: K, value: ConsultationForm[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'Please enter your first name';
    if (!formData.lastName.trim()) errs.lastName = 'Please enter your last name';

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'This email doesn’t look right';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!digitsOnly) {
      errs.phone = 'Please enter your phone number';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      errs.phone = 'Please check your phone number';
    }

    if (!formData.healthGoal) {
      errs.healthGoal = 'Please choose what you need help with';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setIsSuccessModalOpen(true);
      setFormData(EMPTY_FORM);
      setErrors({});
    }, 500);
  };

  const submittedModeLabel =
    PREFERRED_MODES.find(m => m.value === submittedData?.preferredMode)?.label.toLowerCase() ?? 'phone';

  return (
    <div className="home-page pb-24 overflow-hidden">

      {/* 1. HERO */}
      <section className="relative hero-mesh pt-14 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#004b70]">
              Personal nutrition care
            </p>

            <h1 className="text-[40px] sm:text-6xl font-normal text-[#0a1922] font-serif-display tracking-tight leading-[1.08]">
              Better health,<br />
              <span className="italic text-[#004b70]">one meal at a time.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Work one-on-one with a qualified dietitian who builds a simple food plan around your health, your routine and the food you enjoy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => scrollToForm()}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-[15px] font-semibold transition-colors cursor-pointer w-full sm:w-auto"
              >
                Book a free first call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-slate-700 hover:text-[#004b70] text-[15px] font-semibold transition-colors w-full sm:w-auto"
              >
                See how it works
              </a>
            </div>

            <ul className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-7 gap-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2"><UserRound className="w-4 h-4 text-[#004b70]" /> Your own dietitian</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#004b70]" /> Reply within 24 hours</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#004b70]" /> Private and secure</li>
            </ul>
          </div>

          {/* Simple progress card */}
          <div className="lg:col-span-5">
            <div className="luxury-card rounded-3xl p-7 sm:p-8 max-w-md mx-auto shadow-[0_24px_60px_-30px_rgba(0,75,112,0.25)]">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-[#0a1922]">Vikram’s progress</p>
                <p className="text-xs text-slate-500">16 weeks</p>
              </div>
              <p className="text-sm text-slate-500 mt-1">Goal: bring blood sugar back to normal</p>

              <div className="mt-7 space-y-6">
                {[
                  { label: 'Blood sugar (HbA1c)', before: '8.4%', after: '5.5%', note: 'Now in the healthy range', pct: 100 },
                  { label: 'Weight', before: '92 kg', after: '81 kg', note: '11 kg lost, steadily', pct: 72 },
                  { label: 'Energy during the day', before: 'Low', after: 'Good', note: 'As reported by Vikram', pct: 85 },
                ].map(row => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.label}</span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-slate-400">{row.before}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                        <span className="font-semibold text-[#0a1922]">{row.after}</span>
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-[#004b70]" style={{ width: `${row.pct}%` }} />
                    </div>
                    <p className="mt-1.5 text-xs text-slate-500">{row.note}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 pt-5 border-t border-slate-100 text-xs text-slate-400 leading-relaxed">
                An example client journey. Everyone’s results are different.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-24 sm:space-y-32 pt-20 sm:pt-24">

        {/* 2. WHAT WE HELP WITH */}
        <section id="specialties" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="What we help with"
            title="Care for the things that matter to you"
            text="Every plan is made for you. Choose the area you want help with, and your dietitian will take it from there."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLINICAL_CONDITIONS.map(cond => {
              const Icon = CONDITION_ICONS[cond.id] ?? Leaf;
              return (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => scrollToForm(cond.goal)}
                  className="luxury-card card-hover rounded-2xl p-7 text-left flex flex-col gap-4 group cursor-pointer"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#eef6f9] text-[#004b70] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="space-y-2">
                    <span className="block text-lg font-semibold text-[#0a1922]">{cond.title}</span>
                    <span className="block text-[15px] text-slate-600 leading-relaxed">{cond.description}</span>
                  </span>
                  <span className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <span className="text-slate-500">We track: {cond.checks}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#004b70] group-hover:translate-x-0.5 transition-all" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section id="how-it-works" className="bg-white border-y border-slate-200/70 py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <SectionHeading
              eyebrow="How it works"
              title="Getting started is easy"
              text="Four simple steps from your first message to your personal plan."
            />

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="relative space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-full border border-[#004b70]/25 text-[#004b70] font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {i < STEPS.length - 1 && <span aria-hidden="true" className="hidden lg:block h-px flex-1 bg-slate-200" />}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1922] pt-2">{step.title}</h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. CLIENT STORIES */}
        <section id="results" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-16">
          <SectionHeading
            eyebrow="Client stories"
            title="Real people, real progress"
            text="A few of the people we have worked with, in their own words."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLIENT_RESULTS.map(story => (
              <figure key={story.name} className="luxury-card rounded-2xl p-7 flex flex-col gap-6">
                <blockquote className="text-[15px] text-slate-700 leading-relaxed">
                  “{story.quote}”
                </blockquote>

                <div className="mt-auto rounded-xl bg-[#f6f9fb] px-4 py-3 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{story.result.label}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-slate-400">{story.result.before}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                    <span className="font-semibold text-[#0a1922]">{story.result.after}</span>
                  </span>
                </div>

                <figcaption className="flex items-center justify-between text-sm">
                  <span>
                    <span className="block font-semibold text-[#0a1922]">{story.name}</span>
                    <span className="block text-slate-500">{story.city} · {story.focus}</span>
                  </span>
                  <span className="text-xs text-slate-500">{story.duration}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400">
            Results vary from person to person. Always speak to your doctor before changing any medicine.
          </p>
        </section>

        {/* 5. SIGN-UP FORM */}
        <section id="onboarding-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="luxury-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">

            <div className="lg:col-span-2 bg-[#004b70] text-white p-8 sm:p-10 flex flex-col gap-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Get started</p>
                <h2 className="text-3xl sm:text-4xl font-normal font-serif-display leading-tight">
                  Book your free first call
                </h2>
                <p className="text-[15px] text-white/75 leading-relaxed">
                  Share a few details and we’ll get in touch to plan your first conversation with a dietitian.
                </p>
              </div>

              <ul className="space-y-4 text-[15px] text-white/85">
                {[
                  'No cost and no commitment',
                  'We reply within 24 hours',
                  'Your details stay private',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-sm text-white/60">
                Prefer email? Write to{' '}
                <a href="mailto:support@restorelife.co.in" className="text-white underline underline-offset-2">
                  support@restorelife.co.in
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 p-8 sm:p-10 space-y-5 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First name" error={errors.firstName} htmlFor="firstName">
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={e => update('firstName', e.target.value)}
                    aria-invalid={!!errors.firstName}
                    className="field"
                  />
                </Field>
                <Field label="Last name" error={errors.lastName} htmlFor="lastName">
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={e => update('lastName', e.target.value)}
                    aria-invalid={!!errors.lastName}
                    className="field"
                  />
                </Field>
              </div>

              <Field label="Email" error={errors.email} htmlFor="email">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  className="field"
                />
              </Field>

              <Field label="Phone number" error={errors.phone} htmlFor="phone">
                <div className="flex gap-2">
                  <span className="flex items-center px-4 rounded-xl border border-[#dbe2e8] bg-slate-50 text-sm text-slate-600 shrink-0 select-none">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel-national"
                    value={formData.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="98765 43210"
                    aria-invalid={!!errors.phone}
                    className="field"
                  />
                </div>
              </Field>

              <Field label="What would you like help with?" error={errors.healthGoal} htmlFor="healthGoal">
                <div className="relative">
                  <select
                    id="healthGoal"
                    value={formData.healthGoal}
                    onChange={e => update('healthGoal', e.target.value)}
                    aria-invalid={!!errors.healthGoal}
                    className={`field appearance-none pr-10 cursor-pointer ${!formData.healthGoal ? 'text-slate-400' : ''}`}
                  >
                    <option value="" disabled>Choose one</option>
                    {HEALTH_GOALS.map(goal => (
                      <option key={goal.value} value={goal.value} className="text-slate-800">
                        {goal.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </Field>

              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-slate-700 mb-2">How should we contact you?</legend>
                <div className="grid grid-cols-3 gap-2">
                  {PREFERRED_MODES.map(mode => {
                    const active = formData.preferredMode === mode.value;
                    return (
                      <button
                        key={mode.value}
                        type="button"
                        onClick={() => update('preferredMode', mode.value)}
                        aria-pressed={active}
                        className={`py-2.5 rounded-xl border text-sm font-medium transition-colors cursor-pointer ${
                          active
                            ? 'border-[#004b70] bg-[#eef6f9] text-[#004b70]'
                            : 'border-[#dbe2e8] text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <Field label="Anything else we should know?" optional htmlFor="notes">
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={e => update('notes', e.target.value)}
                  placeholder="For example: health conditions, medicines, or food preferences"
                  className="field resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-[15px] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? 'Sending…' : 'Request my free call'}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-xs text-center text-slate-400">
                By sending this form you agree to be contacted about RestoreLife. We never share your details.
              </p>
            </form>
          </div>
        </section>

        {/* 6. FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 scroll-mt-20">
          <SectionHeading eyebrow="Questions" title="Common questions" />

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 flex items-center justify-between gap-4 text-base font-semibold text-[#0a1922] hover:text-[#004b70] transition-colors cursor-pointer"
                  >
                    {faq.question}
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#004b70]' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="pb-6 -mt-1 pr-8 text-[15px] text-slate-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-slate-500">
            Still have a question?{' '}
            <a href="mailto:support@restorelife.co.in" className="text-[#004b70] font-semibold hover:underline underline-offset-2">
              Email us
            </a>
            {onNavigateSupport && (
              <>
                {' '}or visit{' '}
                <button
                  onClick={onNavigateSupport}
                  className="text-[#004b70] font-semibold hover:underline underline-offset-2 cursor-pointer"
                >
                  Help &amp; Support
                </button>
              </>
            )}
            .
          </p>
        </section>
      </div>

      {/* SUCCESS MODAL */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="success-title" className="bg-white rounded-3xl max-w-md w-full p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef6f9]">
                <CheckCircle2 className="h-7 w-7 text-[#004b70]" />
              </div>
              <h3 id="success-title" className="font-serif-display font-normal text-2xl text-[#0a1922]">
                Thank you{submittedData?.firstName ? `, ${submittedData.firstName}` : ''}!
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We’ve received your request. Our team will contact you by {submittedModeLabel} within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 space-y-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">What happens next</p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>We call to say hello and answer your questions</li>
                <li>You share any recent health reports (if you have them)</li>
                <li>You meet your dietitian and get your plan in the app</li>
              </ol>
            </div>

            <button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold h-12 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Field: React.FC<{
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}> = ({ label, htmlFor, error, optional, children }) => (
  <div className="space-y-2">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700">
      {label}
      {optional && <span className="text-slate-400 font-normal"> (optional)</span>}
    </label>
    {children}
    {error && <p className="text-sm text-rose-600">{error}</p>}
  </div>
);
