"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function ProductDetail({ product }) {
  const colors = useMemo(
    () => [...new Set(product.variants.map((v) => v.color))],
    [product.variants]
  );
  const storages = useMemo(
    () => [...new Set(product.variants.map((v) => v.storage))],
    [product.variants]
  );

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(storages[0]);
  const [selectedTenure, setSelectedTenure] = useState(product.emiPlans[0].tenureMonths);
  const [confirmedPlan, setConfirmedPlan] = useState(null);

  // Fall back to the first variant that matches color if the exact
  // color+storage combination doesn't exist for this product.
  const variant =
    product.variants.find(
      (v) => v.color === selectedColor && v.storage === selectedStorage
    ) || product.variants.find((v) => v.color === selectedColor) || product.variants[0];

  const selectedPlan = product.emiPlans.find((p) => p.tenureMonths === selectedTenure);

  const handleProceed = () => {
    setConfirmedPlan(selectedPlan);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="aspect-square bg-gray-50 rounded-xl relative overflow-hidden">
        <Image src={variant.image} alt={product.name} fill className="object-cover" />
      </div>

      {/* Details */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400">{product.brand}</p>
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-500 mb-4">{variant.storage}</p>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-2xl font-bold text-gray-900">
            ₹{variant.price.toLocaleString("en-IN")}
          </span>
          {variant.mrp > variant.price && (
            <span className="text-gray-400 line-through">
              ₹{variant.mrp.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Color selector */}
        {colors.length > 1 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Color</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    selectedColor === color
                      ? "border-brand-orange bg-orange-50 text-brand-orange"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Storage selector */}
        {storages.length > 1 && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Storage</p>
            <div className="flex gap-2">
              {storages.map((storage) => (
                <button
                  key={storage}
                  onClick={() => setSelectedStorage(storage)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    selectedStorage === storage
                      ? "border-brand-orange bg-orange-50 text-brand-orange"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* EMI plans */}
        <h2 className="font-semibold text-gray-900 mb-2">EMI plans backed by mutual funds</h2>
        <div className="space-y-2 mb-6">
          {product.emiPlans.map((plan) => (
            <label
              key={plan.tenureMonths}
              className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                selectedTenure === plan.tenureMonths
                  ? "border-brand-orange bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="emi-plan"
                  checked={selectedTenure === plan.tenureMonths}
                  onChange={() => setSelectedTenure(plan.tenureMonths)}
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    ₹{plan.monthlyAmount.toLocaleString("en-IN")} x {plan.tenureMonths} months
                  </p>
                  {plan.cashback > 0 && (
                    <p className="text-xs text-brand-green">
                      Additional cashback of ₹{plan.cashback.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {plan.interestRate === 0 ? "0% interest" : `${plan.interestRate}% interest`}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleProceed}
          className="w-full bg-brand-orange text-white font-medium py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Proceed with {selectedTenure}-month plan
        </button>

        {confirmedPlan && (
          <p className="text-sm text-brand-green mt-3">
            Selected: ₹{confirmedPlan.monthlyAmount.toLocaleString("en-IN")} x{" "}
            {confirmedPlan.tenureMonths} months — proceeding to checkout...
          </p>
        )}
      </div>
    </div>
  );
}
