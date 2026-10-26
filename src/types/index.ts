export type NavigationPage = 
  | 'home' 
  | 'get-started' 
  | 'programs' 
  | 'recipes' 
  | 'workouts' 
  | 'about' 
  | 'support'
  | 'terms'
  | 'privacy'
  | 'dashboard-preview';

export interface HealthGoalOption {
  id: string;
  label: string;
  description: string;
  iconName: string;
  category: 'metabolic' | 'fitness' | 'clinical' | 'hormonal';
  recommendedPace: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  targetFocus: string;
  description: string;
  durationWeeks: number;
  features: string[];
  keyBiomarkers: string[];
  workoutIntensity: 'Low-Impact Clinical' | 'Moderate Functional' | 'High-Performance' | 'Strength & Conditioning';
  dietFocus: string;
  iconName: string;
  gradient: string;
}

export interface CalculatorState {
  age: number;
  gender: 'male' | 'female';
  heightCm: number;
  weightKg: number;
  waistCm: number;
  neckCm: number;
  hipCm: number; // for female body fat formula
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'very' | 'athlete';
  goal: 'lose' | 'maintain' | 'gain';
}

export interface CalculatorResults {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  tdee: number;
  bodyFatPercent: number | null;
  leanBodyMassKg: number | null;
  dailyCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  waterTargetLiters: number;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Smoothie & Snacks' | 'Post-Workout Fuel';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTimeMinutes: number;
  tags: string[];
  image: string;
  benefits: string;
  ingredients: string[];
  instructions: string[];
}

export interface Workout {
  id: string;
  title: string;
  targetArea: string;
  level: 'Beginner Safe' | 'Functional Core' | 'Metabolic HIIT' | 'Strength & Hypertrophy';
  durationMinutes: number;
  caloriesBurnEstimate: number;
  equipment: string;
  heartRateZone: string;
  summary: string;
  exercises: {
    name: string;
    sets: number;
    reps: string;
    restSeconds: number;
    cue: string;
  }[];
}

export interface BiomarkerTransformation {
  id: string;
  clientName: string;
  age: number;
  city: string;
  primaryCondition: string;
  durationMonths: number;
  quote: string;
  avatar: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    change: string;
  }[];
}

export interface ConsultationForm {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  healthGoal: string;
  preferredMode: 'video' | 'phone' | 'whatsapp';
  activityLevel: string;
  medicalConditions: string;
  notes: string;
}
