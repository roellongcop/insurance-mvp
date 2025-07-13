// backend/src/services/recommendationService.ts
export function getRecommendation({
  age, income, dependents, risk
}: { age: number; income: number; dependents: number; risk: string }) {
  let plan = 'Term Life – $250,000 for 10 years'
  let explanation = 'Basic coverage for starters.'

  if (risk === 'high' && age < 40) {
    plan = 'Term Life – $500,000 for 20 years'
    explanation = 'High risk & young age: longer, larger term coverage.'
  } else if (risk === 'low') {
    plan = 'Whole Life – $100,000'
    explanation = 'Low risk: permanent coverage with cash value.'
  }

  return { plan, explanation }
}
