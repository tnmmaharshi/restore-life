import { CalculatorState, CalculatorResults } from '../types';

export function computeHealthMetrics(state: CalculatorState): CalculatorResults {
  const { age, gender, heightCm, weightKg, waistCm, neckCm, hipCm, activityLevel, goal } = state;

  // 1. BMI calculation
  const heightM = heightCm / 100;
  const bmiRaw = heightM > 0 ? weightKg / (heightM * heightM) : 0;
  const bmi = Math.round(bmiRaw * 10) / 10;

  let bmiCategory = 'Normal';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi < 25) bmiCategory = 'Optimal / Normal';
  else if (bmi < 30) bmiCategory = 'Overweight';
  else bmiCategory = 'Obese (Clinical Focus)';

  // 2. BMR (Mifflin-St Jeor formula)
  let bmrRaw = 10 * weightKg + 6.25 * heightCm - 5 * age;
  if (gender === 'male') {
    bmrRaw += 5;
  } else {
    bmrRaw -= 161;
  }
  const bmr = Math.round(bmrRaw);

  // 3. TDEE
  const multipliers: Record<CalculatorState['activityLevel'], number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    athlete: 1.9,
  };
  const multiplier = multipliers[activityLevel] || 1.375;
  const tdee = Math.round(bmr * multiplier);

  // 4. Target Daily Calories
  let dailyCalories = tdee;
  if (goal === 'lose') {
    dailyCalories = Math.max(1200, Math.round(tdee - 500));
  } else if (goal === 'gain') {
    dailyCalories = Math.round(tdee + 350);
  }

  // 5. Protein calculation
  let proteinFactor = 1.6;
  if (goal === 'lose') proteinFactor = 2.0;
  else if (goal === 'gain') proteinFactor = 2.2;
  const proteinGrams = Math.round(weightKg * proteinFactor);

  // 6. Fat & Carbs breakdown
  const fatCalories = dailyCalories * 0.25;
  const fatGrams = Math.round(fatCalories / 9);

  const proteinCalories = proteinGrams * 4;
  const remainingCaloriesForCarbs = Math.max(0, dailyCalories - proteinCalories - fatCalories);
  const carbsGrams = Math.round(remainingCaloriesForCarbs / 4);

  // 7. Water Target (35ml per kg)
  const waterTargetLiters = Math.round((weightKg * 35) / 100) / 10;

  // 8. US Navy Body Fat % estimate
  let bodyFatPercent: number | null = null;
  let leanBodyMassKg: number | null = null;

  try {
    if (gender === 'male' && waistCm > neckCm && heightCm > 0) {
      const logWaistNeck = Math.log10(waistCm - neckCm);
      const logHeight = Math.log10(heightCm);
      const bf = 495 / (1.0324 - 0.19077 * logWaistNeck + 0.15456 * logHeight) - 450;
      if (bf > 3 && bf < 60) {
        bodyFatPercent = Math.round(bf * 10) / 10;
        leanBodyMassKg = Math.round(weightKg * (1 - bf / 100) * 10) / 10;
      }
    } else if (gender === 'female' && waistCm + hipCm > neckCm && heightCm > 0) {
      const logWaistHipNeck = Math.log10(waistCm + hipCm - neckCm);
      const logHeight = Math.log10(heightCm);
      const bf = 495 / (1.29579 - 0.35004 * logWaistHipNeck + 0.221 * logHeight) - 450;
      if (bf > 8 && bf < 65) {
        bodyFatPercent = Math.round(bf * 10) / 10;
        leanBodyMassKg = Math.round(weightKg * (1 - bf / 100) * 10) / 10;
      }
    }
  } catch {
    bodyFatPercent = null;
    leanBodyMassKg = null;
  }

  return {
    bmi,
    bmiCategory,
    bmr,
    tdee,
    bodyFatPercent,
    leanBodyMassKg,
    dailyCalories,
    proteinGrams,
    carbsGrams,
    fatGrams,
    waterTargetLiters,
  };
}
