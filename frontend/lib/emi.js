/**
 * Calculates the monthly EMI amount for a given principal.
 *
 * @param {number} principal - the variant's selling price
 * @param {number} tenureMonths - loan tenure in months
 * @param {number} annualInterestRate - annual interest rate as a percentage (e.g. 10.5). Pass 0 for a no-cost EMI.
 * @returns {number} the rounded monthly installment amount
 */
export function calculateMonthlyAmount(principal, tenureMonths, annualInterestRate) {
  if (!annualInterestRate || annualInterestRate === 0) {
    return Math.round(principal / tenureMonths);
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const growth = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * growth) / (growth - 1);

  return Math.round(emi);
}

/**
 * Takes a product's EMI plan templates (tenureMonths, interestRate, cashback)
 * and a principal amount (the selected variant's price), and returns the
 * plans with a computed monthlyAmount for that principal.
 */
export function getEmiPlansForPrincipal(emiPlans, principal) {
  return emiPlans.map((plan) => ({
    ...plan,
    monthlyAmount: calculateMonthlyAmount(principal, plan.tenureMonths, plan.interestRate),
  }));
}
