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
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'video', label: 'Video Call' },
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
