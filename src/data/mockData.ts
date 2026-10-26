import { HealthGoalOption } from '../types';

export const HEALTH_GOALS: HealthGoalOption[] = [
  { value: 'weight-management', label: 'Weight Loss & Metabolic Wellness' },
  { value: 'diabetes-reversal', label: 'Diabetes & Pre-Diabetes (HbA1c) Management' },
  { value: 'pcos-pcod', label: 'PCOS / PCOD Hormonal Health' },
  { value: 'gut-health', label: 'Gut Health, IBS & Digestive Wellness' },
  { value: 'cardiac-hypertension', label: 'Heart Health, Lipids & Blood Pressure' },
  { value: 'athletic-performance', label: 'Sports Nutrition & Athletic Performance' },
  { value: 'general-vitality', label: 'General Longevity & Preventive Care' },
];

export const PREFERRED_MODES = [
  { value: 'email', label: 'Email Communication' },
  { value: 'phone', label: 'Direct Phone Call' },
  { value: 'video', label: 'Telehealth Video Consultation' },
];

export const CLIENT_RESULTS = [
  {
    name: 'Vikramaditya S.',
    age: 44,
    condition: 'Pre-Diabetes & Metabolic Syndrome',
    duration: '16 Weeks',
    hba1c: { before: '6.8%', after: '5.4%' },
    weight: { before: '92.4 kg', after: '81.2 kg' },
    quote: 'My physician was ready to start me on lifelong medication. Within 16 weeks of RestoreLife medical nutrition therapy, my HbA1c dropped to 5.4% without any drugs.',
  },
  {
    name: 'Priya Narayanan',
    age: 31,
    condition: 'PCOS & Chronic Fatigue',
    duration: '12 Weeks',
    hba1c: { before: 'Irregular (60d)', after: 'Stable 30d Cycle' },
    weight: { before: '74 cm waist', after: '64 cm waist' },
    quote: 'After 5 years of extreme restrictive diets that made my cortisol spike, RestoreLife balanced my hormones with cycle-synced clinical nutrition.',
  },
  {
    name: 'Dr. Rohan Mehra',
    age: 38,
    condition: 'Hypertension & High ApoB',
    duration: '14 Weeks',
    hba1c: { before: '138 mg/dL', after: '72 mg/dL ApoB' },
    weight: { before: '144/92 mmHg', after: '118/76 mmHg BP' },
    quote: 'As an orthopedic surgeon, my schedule is hectic. RestoreLife designed meals I could eat between surgeries. My lipid profile is the best it has been since residency.',
  },
];

export const FAQS = [
  {
    question: 'Who can join RestoreLife?',
    answer: 'RestoreLife is an open public clinical nutrition service available to anyone looking to improve metabolic health, manage body weight, reverse or manage pre-diabetes and PCOS, address gut issues, or enhance long-term longevity under the care of certified clinical nutritionists.',
  },
  {
    question: 'Why does account activation require clinical onboarding?',
    answer: 'Unlike generic fitness apps, RestoreLife delivers medical nutrition therapy. Every meal plan is personalized to your clinical blood work, medical conditions, allergies, and metabolic profile by an assigned nutritionist. Our care team sets up your account and reviews your health background before publishing your clinical diet plan to the mobile application.',
  },
  {
    question: 'How quickly will our team reach out?',
    answer: 'Our care coordinator will reach out via WhatsApp, phone, or email within 24 business hours to guide you through account creation, answer questions, and schedule your initial 1-on-1 consultation.',
  },
  {
    question: 'What do I get inside the RestoreLife mobile app once enrolled?',
    answer: 'Your mobile app gives you access to custom weekly clinical meal plans, macro breakdowns, clinical recipe library, daily habit & hydration trackers, workout logging, and secure direct chat with your dedicated clinical nutrition team.',
  },
];
