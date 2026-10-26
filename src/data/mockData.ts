import { HealthGoalOption } from '../types';

export const HEALTH_GOALS: HealthGoalOption[] = [
  { value: 'diabetes-reversal', label: 'Diabetes or high blood sugar' },
  { value: 'weight-management', label: 'Healthy weight loss' },
  { value: 'pcos-pcod', label: 'PCOS / PCOD and hormones' },
  { value: 'fatty-liver-lipids', label: 'Fatty liver or high cholesterol' },
  { value: 'gut-health', label: 'Gut health, bloating or IBS' },
  { value: 'thyroid-autoimmune', label: 'Thyroid health' },
  { value: 'athletic-longevity', label: 'Fitness, strength and healthy ageing' },
];

export const PREFERRED_MODES = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone call' },
  { value: 'video', label: 'Video call' },
] as const;

export interface ClinicalCondition {
  id: string;
  goal: string;
  title: string;
  description: string;
  checks: string;
}

export const CLINICAL_CONDITIONS: ClinicalCondition[] = [
  {
    id: 'diabetes',
    goal: 'diabetes-reversal',
    title: 'Diabetes & blood sugar',
    description: 'Bring your blood sugar into a healthy range with meals that keep you full and steady through the day.',
    checks: 'HbA1c and fasting sugar',
  },
  {
    id: 'weight',
    goal: 'weight-management',
    title: 'Healthy weight loss',
    description: 'Lose weight at a steady pace without crash diets, and keep it off with habits that fit your life.',
    checks: 'Weight and waist size',
  },
  {
    id: 'pcos',
    goal: 'pcos-pcod',
    title: 'PCOS & hormones',
    description: 'Support regular cycles, more energy and easier weight control with food that suits your body.',
    checks: 'Cycle length and hormone tests',
  },
  {
    id: 'fatty-liver',
    goal: 'fatty-liver-lipids',
    title: 'Fatty liver & cholesterol',
    description: 'Lower liver fat and improve your cholesterol with simple changes to what and when you eat.',
    checks: 'Liver tests and cholesterol',
  },
  {
    id: 'gut-health',
    goal: 'gut-health',
    title: 'Gut health',
    description: 'Find the foods that trigger bloating or discomfort, and build a calm, comfortable gut step by step.',
    checks: 'Symptoms and food reactions',
  },
  {
    id: 'thyroid',
    goal: 'thyroid-autoimmune',
    title: 'Thyroid health',
    description: 'Eat in a way that supports your thyroid, helps with tiredness and works alongside your medicine.',
    checks: 'TSH and thyroid levels',
  },
];

export interface ClientStory {
  name: string;
  city: string;
  focus: string;
  duration: string;
  result: { label: string; before: string; after: string };
  quote: string;
}

export const CLIENT_RESULTS: ClientStory[] = [
  {
    name: 'Vikram S.',
    city: 'Bengaluru',
    focus: 'High blood sugar',
    duration: '16 weeks',
    result: { label: 'HbA1c', before: '8.4%', after: '5.5%' },
    quote: 'I was close to starting daily medicine. The plan was simple to follow, and my sugar levels came back to normal.',
  },
  {
    name: 'Priya N.',
    city: 'Mumbai',
    focus: 'PCOS',
    duration: '12 weeks',
    result: { label: 'Weight', before: '72 kg', after: '61.5 kg' },
    quote: 'After years of strict diets, this was the first plan that felt normal. My cycles are regular again.',
  },
  {
    name: 'Rohan M.',
    city: 'New Delhi',
    focus: 'Fatty liver',
    duration: '14 weeks',
    result: { label: 'Triglycerides', before: '280', after: '112' },
    quote: 'I work long, irregular hours. My dietitian planned meals around my schedule, not the other way round.',
  },
];

export const FAQS = [
  {
    question: 'Who is RestoreLife for?',
    answer: 'Any adult who wants to improve their health through food — whether you have a condition like diabetes, PCOS or fatty liver, or simply want to eat better and feel more energetic.',
  },
  {
    question: 'What happens after I fill in the form?',
    answer: 'Someone from our team will contact you within 24 hours on your chosen channel. They will answer your questions and book your first call with a dietitian.',
  },
  {
    question: 'Do I need blood test reports to start?',
    answer: 'No. If you have recent reports from the last 3–6 months, please share them. If not, your dietitian will tell you which simple tests are useful.',
  },
  {
    question: 'What do I get in the app?',
    answer: 'Your weekly meal plan, easy recipes, a place to track your progress, and chat with your dietitian whenever you need help.',
  },
  {
    question: 'Can I keep seeing my own doctor?',
    answer: 'Yes, and we encourage it. We work alongside your doctor and can share progress reports for your check-ups. Please never change your medicine without your doctor’s advice.',
  },
  {
    question: 'Will I have to give up the food I like?',
    answer: 'No. Your plan is built around your usual meals, culture and taste. We make small, practical changes rather than asking you to start from scratch.',
  },
];
