import { HealthGoalOption } from '../types';

export const HEALTH_GOALS: HealthGoalOption[] = [
  { value: 'diabetes-reversal', label: 'Type 2 Diabetes & Pre-Diabetes (HbA1c Reversal)' },
  { value: 'weight-management', label: 'Metabolic Reset & Visceral Fat Reduction' },
  { value: 'pcos-pcod', label: 'PCOS / PCOD & Hormonal Balance' },
  { value: 'fatty-liver-lipids', label: 'Fatty Liver (NAFLD) & Lipid Optimization (ApoB/Triglycerides)' },
  { value: 'gut-health', label: 'Gut Health, IBS & Microbiome Restoration' },
  { value: 'thyroid-autoimmune', label: 'Thyroid Health (Hashimoto’s / Hypothyroidism)' },
  { value: 'athletic-longevity', label: 'Sports Nutrition, Muscle Mass & Preventive Longevity' },
];

export const PREFERRED_MODES = [
  { value: 'email', label: 'Email Communication' },
  { value: 'phone', label: 'Direct Phone Call' },
  { value: 'video', label: 'Telehealth Video Consultation' },
];

export interface ClinicalCondition {
  id: string;
  title: string;
  tagline: string;
  biomarkers: string[];
  protocol: string;
  badge: string;
}

export const CLINICAL_CONDITIONS: ClinicalCondition[] = [
  {
    id: 'diabetes',
    title: 'Type 2 Diabetes & Pre-Diabetes',
    tagline: 'Restore cellular insulin sensitivity and bring HbA1c back to healthy ranges through targeted glycemic management.',
    biomarkers: ['HbA1c', 'Fasting Blood Sugar', 'Fasting Insulin', 'HOMA-IR'],
    protocol: 'Low-glycemic variability protocol with continuous glucose monitoring (CGM) analysis.',
    badge: 'High Reversal Rate',
  },
  {
    id: 'pcos',
    title: 'PCOS & Hormonal Health',
    tagline: 'Balance androgens, regulate menstrual cycles, and resolve persistent weight plateaus through cycle-synced nutrition.',
    biomarkers: ['LH/FSH Ratio', 'Free Testosterone', 'AMH', 'DHEA-S'],
    protocol: 'Anti-inflammatory hormonal balance diet with micronutrient replenishment.',
    badge: 'Specialized Care',
  },
  {
    id: 'fatty-liver',
    title: 'Fatty Liver & Dyslipidemia',
    tagline: 'Reverse non-alcoholic fatty liver disease (NAFLD) and optimize lipid fractions beyond standard cholesterol tests.',
    biomarkers: ['ALT / AST Liver Enzymes', 'ApoB', 'Triglycerides', 'hs-CRP'],
    protocol: 'Hepatic-fat clearing dietary therapy and mitochondrial antioxidant support.',
    badge: 'Cardiometabolic',
  },
  {
    id: 'gut-health',
    title: 'Gut Health, IBS & Microbiome',
    tagline: 'Heal gut dysbiosis, eliminate bloating, and restore mucosal integrity with medical elimination and reintroduction protocols.',
    biomarkers: ['Zonulin', 'Calprotectin', 'SIBO Breath Screen', 'Food Intolerances'],
    protocol: 'Phased 4R gut restoration: Remove, Replace, Reinoculate, and Repair.',
    badge: 'Microbiome First',
  },
  {
    id: 'thyroid',
    title: 'Thyroid & Metabolic Sluggishness',
    tagline: 'Support active T3 conversion, curb autoimmune antibodies in Hashimoto’s, and revitalize sluggish metabolic rate.',
    biomarkers: ['Free T3 / Free T4', 'TSH', 'Anti-TPO Antibodies', 'Ferritin'],
    protocol: 'Nutrient-dense thyroid protocol with selenium, zinc, and elimination of inflammatory triggers.',
    badge: 'Endocrine Care',
  },
  {
    id: 'longevity',
    title: 'Longevity & Performance',
    tagline: 'Optimize lean muscle preservation, enhance metabolic flexibility, and minimize biological aging markers.',
    biomarkers: ['VO2 Max Nutrition', 'Visceral Fat Index', 'Homocysteine', 'Lipoprotein(a)'],
    protocol: 'Precision protein distribution, intermittent fasting windows, and zone-2 metabolic fueling.',
    badge: 'Preventive Health',
  },
];

export const CLIENT_RESULTS = [
  {
    name: 'Vikramaditya S.',
    age: 44,
    city: 'Bengaluru',
    condition: 'Pre-Diabetes & Metabolic Syndrome',
    duration: '16 Weeks',
    category: 'Diabetes & Glucose',
    hba1c: { before: '8.4%', after: '5.5%' },
    weight: { before: '92.4 kg', after: '81.2 kg' },
    extraMetric: { label: 'Fasting Insulin', before: '24.8 uIU', after: '8.2 uIU' },
    quote: 'My physician was ready to put me on daily medication. Within 16 weeks of RestoreLife clinical nutrition therapy, my HbA1c normalized to 5.5% without drugs.',
  },
  {
    name: 'Priya Narayanan',
    age: 31,
    city: 'Mumbai',
    condition: 'PCOS & Chronic Fatigue',
    duration: '12 Weeks',
    category: 'PCOS & Hormones',
    hba1c: { before: 'Cycle 65d', after: 'Stable 30d' },
    weight: { before: '72.0 kg', after: '61.5 kg' },
    extraMetric: { label: 'AMH Level', before: '8.4 ng/mL', after: '3.6 ng/mL' },
    quote: 'After 5 years of extreme restrictive diets that caused severe cortisol spikes, RestoreLife gave me a cycle-synced nutrition plan that actually worked.',
  },
  {
    name: 'Dr. Rohan Mehra',
    age: 48,
    city: 'New Delhi',
    condition: 'Fatty Liver (Grade 2) & High ApoB',
    duration: '14 Weeks',
    category: 'Liver & Lipids',
    hba1c: { before: 'Grade 2', after: 'Normal Liver' },
    weight: { before: 'Trig: 280 mg/dL', after: 'Trig: 112 mg/dL' },
    extraMetric: { label: 'ApoB', before: '142 mg/dL', after: '74 mg/dL' },
    quote: 'As an orthopedic surgeon with irregular hospital hours, I needed a science-backed protocol. RestoreLife tailored my meals around my surgery schedules.',
  },
  {
    name: 'Ananya Deshmukh',
    age: 39,
    city: 'Pune',
    condition: 'Hashimoto’s & Chronic Gut Dysbiosis',
    duration: '18 Weeks',
    category: 'Gut & Thyroid',
    hba1c: { before: 'Anti-TPO > 400', after: 'Anti-TPO 62' },
    weight: { before: 'Severe Bloat', after: 'Zero Flare-ups' },
    extraMetric: { label: 'TSH', before: '6.8 mIU/L', after: '2.1 mIU/L' },
    quote: 'The elimination protocol identified food intolerances no one had checked before. My gut inflammation resolved and my thyroid antibodies plummeted.',
  },
];

export const FAQS = [
  {
    question: 'Who can join RestoreLife?',
    answer: 'RestoreLife is open to any adult looking to reverse metabolic conditions, balance blood biomarkers, manage body composition, or improve digestive and hormonal health under the direct guidance of certified clinical dietitians and medical nutritionists.',
  },
  {
    question: 'Why does account activation require clinical onboarding?',
    answer: 'Unlike generic fitness apps that push generic calorie plans, RestoreLife delivers clinical medical nutrition therapy. Every plan is handcrafted around your blood biomarkers, medical history, dietary preferences, and allergies. Our clinical care team validates your health intake before assigning a dedicated dietitian and publishing your protocol to your mobile app.',
  },
  {
    question: 'How quickly will our team reach out?',
    answer: 'Our dedicated clinical care coordinator will contact you via WhatsApp, email, or direct phone call within 24 business hours to confirm your details, answer initial questions, and schedule your comprehensive 1-on-1 intake video consultation.',
  },
  {
    question: 'What do I get inside the RestoreLife mobile app once enrolled?',
    answer: 'Your mobile portal gives you dynamic weekly clinical meal plans, tailored macronutrient breakdowns, a clinical recipe library, biomarker tracking graphs, hydration & habit logs, and direct daily chat with your dedicated dietitian.',
  },
  {
    question: 'Can RestoreLife collaborate with my primary doctor or physician?',
    answer: 'Yes. Our dietitians are clinical practitioners who frequently collaborate with clients’ endocrinologists, cardiologists, and physicians. We provide structured biomarker progress reports and consult summaries that you can share with your doctor during check-ups.',
  },
  {
    question: 'Are blood tests required before starting?',
    answer: 'While existing blood tests from the past 3–6 months are welcome, they are not mandatory to request onboarding. If you need updated blood work, our clinical team can guide you on the specific metabolic panel (HbA1c, Lipid Profile, Liver Function, Thyroid, etc.) to get tested with your local lab.',
  },
];
