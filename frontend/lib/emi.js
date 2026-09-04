
export function calculateMonthlyAmount(principal, tenureMonths, annualInterestRate) {
  if (!annualInterestRate || annualInterestRate === 0) {
    return Math.round(principal / tenureMonths);
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const growth = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * growth) / (growth - 1);

  return Math.round(emi);
}

export function getEmiPlansForPrincipal(emiPlans, principal) {
  return emiPlans.map((plan) => ({
    ...plan,
    monthlyAmount: calculateMonthlyAmount(principal, plan.tenureMonths, plan.interestRate),
  }));
}
