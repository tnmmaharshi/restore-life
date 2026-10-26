export type NavigationPage = 
  | 'home' 
  | 'support'
  | 'terms'
  | 'privacy';

export interface HealthGoalOption {
  value: string;
  label: string;
}

export interface ConsultationForm {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  healthGoal: string;
  preferredMode: 'email' | 'phone' | 'video';
  notes?: string;
}
