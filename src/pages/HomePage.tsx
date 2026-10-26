import React, { useEffect, useState } from 'react';
import {
  HEALTH_GOALS,
  PREFERRED_MODES,
  FAQS,
  CLIENT_RESULTS,
  CLINICAL_CONDITIONS,
} from '../data/mockData';
import { IMAGES, CONDITION_IMAGES } from '../data/images';
import { ConsultationForm } from '../types';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  X,
  ShieldCheck,
  Clock,
  UserRound,
  Leaf,
  Quote,
  Utensils,
  HeartHandshake,
  Sprout,
  MessageCircle,
  LineChart,
  BookOpen,
  Droplets,
  Mail,
} from 'lucide-react';

interface HomePageProps {
  onNavigateSupport?: () => void;
}

const STEPS = [
  { title: 'Fill in a short form', text: 'Tell us a little about yourself and what you would like help with. It takes about 2 minutes.' },
  { title: 'We call you', text: 'Our team gets in touch within 24 hours to answer your questions and set up your account.' },
  { title: 'Meet your dietitian', text: 'A one-hour call to understand your health, routine and the food you enjoy.' },
  { title: 'Follow your plan', text: 'Get your meal plan in the RestoreLife app, track progress and chat with your dietitian anytime.' },
];

const MARQUEE_ITEMS = [
  'Diabetes & blood sugar',
  'Healthy weight loss',
  'PCOS & hormones',
  'Fatty liver',
  'Cholesterol',
  'Gut health',
  'Thyroid',
  'Healthy ageing',
];

const SAMPLE_DAY = [
  { meal: 'Breakfast', time: '8:00', dish: 'Moong dal chilla with mint chutney' },
  { meal: 'Lunch', time: '1:30', dish: '2 rotis, dal, mixed sabzi and salad' },
  { meal: 'Snack', time: '5:00', dish: 'Fruit with a handful of nuts' },
  { meal: 'Dinner', time: '8:00', dish: 'Vegetable millet khichdi with curd' },
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

const SectionHeading: React.FC<{
  script: string;
  title: React.ReactNode;
  text?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}> = ({ script, title, text, align = 'center', dark }) => (
  <div className={`max-w-2xl space-y-3 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <p className={`font-script text-2xl ${dark ? 'text-[#a6dc95]' : 'text-[#3f7f33]'}`}>{script}</p>
    <h2 className={`text-3xl sm:text-[44px] font-normal font-serif-display tracking-tight text-balance leading-[1.12] ${dark ? 'text-white' : 'text-[#0a1922]'}`}>
      {title}
    </h2>
    {text && <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>}
  </div>
);

const Photo: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} loading="lazy" decoding="async" className={`object-cover bg-[#f4ede2] ${className}`} />
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigateSupport }) => {
  const [formData, setFormData] = useState<ConsultationForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationForm | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [storyIndex, setStoryIndex] = useState(0);

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

  const story = CLIENT_RESULTS[storyIndex];
  const stepStory = (dir: 1 | -1) =>
    setStoryIndex(i => (i + dir + CLIENT_RESULTS.length) % CLIENT_RESULTS.length);

  return (
    <div className="home-page overflow-hidden">

      {/* 1. HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-20 sm:pb-28">
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#eaf1e5] blur-3xl opacity-70 -z-10" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          <div className="space-y-7 text-center lg:text-left">
            <p className="font-script text-[28px] text-[#3f7f33] leading-none">Hello, we’re RestoreLife</p>

            <h1 className="text-[42px] sm:text-6xl lg:text-[68px] font-normal text-[#0a1922] font-serif-display tracking-tight leading-[1.06] isolate">
              Better health,<br />
              <span className="brush italic text-[#004b70]">one meal</span> at a time.
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Work one-on-one with a qualified dietitian who builds a simple food plan around your health, your routine and the food you already love.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => scrollToForm()}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-[15px] font-semibold transition-colors cursor-pointer w-full sm:w-auto shadow-[0_12px_30px_-12px_rgba(0,75,112,0.6)]"
              >
                Book a free first call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-[#0a1922]/15 hover:border-[#004b70] text-slate-800 hover:text-[#004b70] text-[15px] font-semibold transition-colors w-full sm:w-auto"
              >
                See how it works
              </a>
            </div>

            <ul className="pt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-sm text-slate-600 [&>li]:whitespace-nowrap">
              <li className="flex items-center gap-2"><UserRound className="w-4 h-4 text-[#3f7f33]" /> Your own dietitian</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#3f7f33]" /> Reply within 24 hours</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#3f7f33]" /> Private and secure</li>
            </ul>
          </div>

          {/* Photo collage */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none lg:pl-10">
            <div className="relative aspect-[4/5] w-[82%] ml-auto">
              <Photo src={IMAGES.heroBowl} alt="A colourful bowl of vegetables, grains and greens" className="arch w-full h-full shadow-[0_30px_60px_-30px_rgba(10,25,34,0.45)]" />
              <span aria-hidden="true" className="absolute -z-10 -top-4 -right-4 w-full h-full arch border-2 border-[#6fb85a]/50" />
            </div>

            <div className="absolute left-0 bottom-[14%] w-[38%] aspect-square rounded-full border-[6px] border-[#fbf8f3] overflow-hidden shadow-xl">
              <Photo src={IMAGES.dietitian} alt="A smiling dietitian" className="w-full h-full" />
            </div>

            <div className="absolute left-[2%] top-[8%] bg-white rounded-2xl px-4 py-3 shadow-[0_16px_40px_-16px_rgba(10,25,34,0.3)] flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#eaf1e5] text-[#3f7f33] flex items-center justify-center">
                <Leaf className="w-4.5 h-4.5" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-semibold text-[#0a1922]">Indian meals</span>
                <span className="block text-xs text-slate-500">made healthier</span>
              </span>
            </div>

            <div className="absolute right-[-2%] bottom-[-4%] bg-white rounded-2xl p-4 w-[56%] max-w-[230px] shadow-[0_16px_40px_-16px_rgba(10,25,34,0.3)]">
              <p className="text-xs text-slate-500">Vikram’s blood sugar</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-sm text-slate-400 line-through">8.4%</span>
                <span className="text-2xl font-serif-display text-[#004b70]">5.5%</span>
              </p>
              <p className="mt-1 text-xs font-medium text-[#3f7f33]">Back to normal in 16 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCROLLING STRIP */}
      <div className="bg-[#004b70] text-white py-5 overflow-hidden" aria-label="Areas we help with">
        <div className="marquee-track flex w-max">
          {[0, 1].map(copy => (
            <ul key={copy} aria-hidden={copy === 1} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map(item => (
                <li key={item} className="flex items-center gap-6 px-6 text-lg sm:text-xl font-serif-display whitespace-nowrap">
                  {item}
                  <Leaf className="w-4 h-4 text-[#a6dc95]" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* 3. OUR APPROACH */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <Photo src={IMAGES.thali} alt="A home-style Indian thali with dal, sabzi and roti" className="col-span-2 w-full aspect-[16/10] rounded-[28px]" />
            <Photo src={IMAGES.idli} alt="Idli with sambar and chutney" className="w-full aspect-square rounded-[28px]" />
            <Photo src={IMAGES.dosa} alt="Dosa with chutneys" className="w-full aspect-square arch arch-square" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <SectionHeading
              align="left"
              script="Our approach"
              title={<>Real food, <span className="italic text-[#004b70]">not a diet.</span></>}
              text="You don’t need to give up dal, roti, rice or your favourite dishes. Your dietitian makes small, practical changes to the meals you already eat — so the plan feels normal and actually lasts."
            />

            <ul className="space-y-5">
              {[
                { Icon: Utensils, title: 'Built around your kitchen', text: 'Vegetarian, Jain, non-veg or anything in between.' },
                { Icon: HeartHandshake, title: 'A real person by your side', text: 'The same dietitian guides you from start to finish.' },
                { Icon: Sprout, title: 'Steady, lasting change', text: 'No crash diets, no pills — just habits that stick.' },
              ].map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-[#eaf1e5] text-[#3f7f33] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-[#0a1922]">{title}</span>
                    <span className="block text-slate-600">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE HELP WITH */}
      <section id="specialties" className="bg-white px-4 sm:px-6 lg:px-8 py-24 sm:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto space-y-14">
          <SectionHeading
            script="What we help with"
            title="Care for the things that matter to you"
            text="Choose the area you want help with, and your dietitian will take it from there."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {CLINICAL_CONDITIONS.map(cond => (
              <button
                key={cond.id}
                type="button"
                onClick={() => scrollToForm(cond.goal)}
                className="group text-left flex flex-col cursor-pointer"
              >
                <span className="block overflow-hidden rounded-[24px]">
                  <Photo
                    src={CONDITION_IMAGES[cond.id]}
                    alt=""
                    className="w-full aspect-[4/3] group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </span>
                <span className="pt-5 space-y-2">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-xl font-serif-display text-[#0a1922] group-hover:text-[#004b70] transition-colors">{cond.title}</span>
                    <span className="w-9 h-9 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#004b70] group-hover:border-[#004b70] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                  <span className="block text-[15px] text-slate-600 leading-relaxed">{cond.description}</span>
                  <span className="inline-block text-xs font-medium text-[#3f7f33] bg-[#eaf1e5] rounded-full px-3 py-1">
                    We track: {cond.checks}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="relative bg-[#0b3550] text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-28 scroll-mt-16 overflow-hidden">
        <Photo src={IMAGES.vegFlatlay} alt="" className="absolute inset-0 w-full h-full opacity-[0.08]" />
        <div className="relative max-w-6xl mx-auto space-y-16">
          <SectionHeading
            dark
            script="How it works"
            title="Getting started is easy"
            text="Four simple steps from your first message to your personal plan."
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-white/[0.06] border border-white/10 p-7 space-y-4 backdrop-blur-sm">
                <span className="font-serif-display text-5xl text-[#a6dc95] leading-none">0{i + 1}</span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="text-center">
            <button
              onClick={() => scrollToForm()}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#004b70] text-[15px] font-semibold hover:bg-[#eaf1e5] transition-colors cursor-pointer"
            >
              Start with step one
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CLIENT STORIES */}
      <section id="results" className="bg-[#eaf1e5] px-4 sm:px-6 lg:px-8 py-24 sm:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="hidden lg:block lg:col-span-5">
            <Photo src={IMAGES.chanaRice} alt="A plate of chana masala with rice" className="arch w-full max-w-sm mx-auto aspect-[4/5]" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="font-script text-2xl text-[#3f7f33]">Client stories</p>

            <figure key={story.name} className="space-y-8">
              <Quote className="w-10 h-10 text-[#6fb85a]" />
              <blockquote className="text-2xl sm:text-[32px] font-serif-display text-[#0a1922] leading-snug">
                “{story.quote}”
              </blockquote>

              <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <span className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#004b70] text-white font-semibold flex items-center justify-center">
                    {story.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#0a1922]">{story.name}</span>
                    <span className="block text-sm text-slate-600">{story.city} · {story.focus}</span>
                  </span>
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm flex items-center gap-2">
                  <span className="text-slate-500">{story.result.label}</span>
                  <span className="text-slate-400 line-through">{story.result.before}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  <span className="font-semibold text-[#004b70]">{story.result.after}</span>
                  <span className="text-slate-400">· {story.duration}</span>
                </span>
              </figcaption>
            </figure>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => stepStory(-1)}
                aria-label="Previous story"
                className="w-11 h-11 rounded-full border border-[#0a1922]/15 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => stepStory(1)}
                aria-label="Next story"
                className="w-11 h-11 rounded-full border border-[#0a1922]/15 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2 ml-2">
                {CLIENT_RESULTS.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setStoryIndex(i)}
                    aria-label={`Show story ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${i === storyIndex ? 'w-6 bg-[#004b70]' : 'w-2 bg-[#004b70]/25'}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Results vary from person to person. Always speak to your doctor before changing any medicine.
            </p>
          </div>
        </div>
      </section>

      {/* 7. APP PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeading
              align="left"
              script="The RestoreLife app"
              title="Your plan, in your pocket"
              text="Everything you need between calls is in one simple app — so you always know what to eat next."
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { Icon: Utensils, title: 'Daily meal plan', text: 'Clear, simple meals for every day.' },
                { Icon: MessageCircle, title: 'Chat with your dietitian', text: 'Ask questions whenever you need.' },
                { Icon: LineChart, title: 'Track your progress', text: 'Weight, reports and how you feel.' },
                { Icon: BookOpen, title: 'Easy recipes', text: 'Healthy versions of food you know.' },
              ].map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 text-[#3f7f33] mt-0.5 shrink-0" />
                  <span>
                    <span className="block font-semibold text-[#0a1922]">{title}</span>
                    <span className="block text-sm text-slate-600">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center">
            <div aria-hidden="true" className="absolute top-8 w-80 h-80 rounded-full bg-[#eaf1e5]" />
            <div className="relative w-[290px] rounded-[44px] bg-[#0a1922] p-3 shadow-[0_40px_80px_-30px_rgba(10,25,34,0.55)]">
              <div className="rounded-[34px] bg-[#fbf8f3] overflow-hidden">
                <div className="px-5 pt-6 pb-4 bg-[#004b70] text-white">
                  <p className="text-xs text-white/70">Good morning, Priya</p>
                  <p className="font-serif-display text-xl mt-0.5">Today’s plan</p>
                </div>
                <ul className="p-4 space-y-2.5">
                  {SAMPLE_DAY.map((m, i) => (
                    <li key={m.meal} className="bg-white rounded-2xl p-3 flex items-start gap-3 border border-[#ece6dc]">
                      <span className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center ${i < 2 ? 'bg-[#6fb85a] text-white' : 'border-2 border-slate-200'}`}>
                        {i < 2 && <CheckCircle2 className="w-5 h-5" />}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center justify-between text-[11px] text-slate-500">
                          <span className="font-semibold uppercase tracking-wide text-[#004b70]">{m.meal}</span>
                          <span>{m.time}</span>
                        </span>
                        <span className="block text-[13px] text-[#0a1922] leading-snug mt-0.5">{m.dish}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mx-4 mb-5 rounded-2xl bg-[#eaf1e5] p-3 flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-[#004b70]" />
                  <span className="flex-1">
                    <span className="block text-[11px] text-slate-600">Water today</span>
                    <span className="mt-1 flex gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 5 ? 'bg-[#004b70]' : 'bg-white'}`} />
                      ))}
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-[#004b70]">5/8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIGN-UP FORM */}
      <section id="onboarding-form" className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_30px_80px_-40px_rgba(10,25,34,0.4)]">

          <div className="relative lg:col-span-2 text-white p-8 sm:p-10 flex flex-col gap-8 overflow-hidden">
            <Photo src={IMAGES.thaliDark} alt="" className="absolute inset-0 w-full h-full" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#004b70]/95 via-[#004b70]/90 to-[#0b3550]/95" />

            <div className="relative space-y-3">
              <p className="font-script text-2xl text-[#a6dc95]">Let’s begin</p>
              <h2 className="text-3xl sm:text-4xl font-normal font-serif-display leading-tight">
                Book your free first call
              </h2>
              <p className="text-[15px] text-white/75 leading-relaxed">
                Share a few details and we’ll get in touch to plan your first conversation with a dietitian.
              </p>
            </div>

            <ul className="relative space-y-4 text-[15px] text-white/90">
              {['No cost and no commitment', 'We reply within 24 hours', 'Your details stay private'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a6dc95] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:support@restorelife.co.in"
              className="relative mt-auto flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 px-4 py-3 hover:bg-white/15 transition-colors"
            >
              <Mail className="w-5 h-5 text-[#a6dc95]" />
              <span className="text-sm">
                <span className="block text-white/60">Prefer email?</span>
                <span className="block font-medium">support@restorelife.co.in</span>
              </span>
            </a>
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
              className="w-full py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-[15px] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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

      {/* 9. FAQ */}
      <section id="faq" className="bg-white px-4 sm:px-6 lg:px-8 py-24 sm:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <SectionHeading align="left" script="Questions?" title="We’ve got answers" />
            <div className="rounded-3xl bg-[#fbf8f3] border border-[#ece6dc] p-6 space-y-3">
              <p className="font-semibold text-[#0a1922]">Still not sure?</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our team is happy to help, Monday to Saturday, 9 AM – 7 PM.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                <a href="mailto:support@restorelife.co.in" className="text-[#004b70] hover:underline underline-offset-2">
                  Email us
                </a>
                {onNavigateSupport && (
                  <button onClick={onNavigateSupport} className="text-[#004b70] hover:underline underline-offset-2 cursor-pointer">
                    Help &amp; Support →
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#ece6dc] border-y border-[#ece6dc]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 text-lg font-serif-display text-[#0a1922] hover:text-[#004b70] transition-colors cursor-pointer"
                  >
                    {faq.question}
                    <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#004b70] text-white' : 'bg-[#fbf8f3] text-slate-500'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 -mt-2 pr-12 text-[15px] text-slate-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf1e5]">
                <CheckCircle2 className="h-7 w-7 text-[#3f7f33]" />
              </div>
              <h3 id="success-title" className="font-serif-display font-normal text-2xl text-[#0a1922]">
                Thank you{submittedData?.firstName ? `, ${submittedData.firstName}` : ''}!
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We’ve received your request. Our team will contact you by {submittedModeLabel} within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fbf8f3] p-5 space-y-3 text-sm text-slate-600">
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
