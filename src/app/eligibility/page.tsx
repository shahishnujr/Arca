"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  ageRange: string;
  exactAge: string;
  weight: string;
  recentIllness: string;
  chronicConditions: string;
  wellManaged: string;
  medications: string;
  medicationDetails: string;
  infectiousDiseases: string;
  recentVaccinations: string;
  bleedingDisorders: string;
  alcoholUse: string;
  recreationalDrugs: string;
  tattoos: string;
  travelHistory: string;
  highRiskActivities: string;
  previousDonations: string;
  recentDonations: string;
  lastDonationDate: string;
}

export default function EligibilityPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    ageRange: "",
    exactAge: "",
    weight: "",
    recentIllness: "",
    chronicConditions: "",
    wellManaged: "",
    medications: "",
    medicationDetails: "",
    infectiousDiseases: "",
    recentVaccinations: "",
    bleedingDisorders: "",
    alcoholUse: "",
    recreationalDrugs: "",
    tattoos: "",
    travelHistory: "",
    highRiskActivities: "",
    previousDonations: "",
    recentDonations: "",
    lastDonationDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eligible = checkEligibility();
    router.push(`/eligibility/result?eligible=${eligible}`);
  };

  const checkEligibility = () => {
    if (
      formData.ageRange !== "yes" ||
      parseInt(formData.exactAge) < 18 ||
      parseInt(formData.exactAge) > 65 ||
      formData.weight !== "yes" ||
      formData.recentIllness === "yes" ||
      (formData.chronicConditions === "yes" && formData.wellManaged !== "yes") ||
      formData.infectiousDiseases === "yes" ||
      formData.recentVaccinations === "yes" ||
      formData.bleedingDisorders === "yes" ||
      formData.alcoholUse === "yes" ||
      formData.recreationalDrugs === "yes" ||
      formData.tattoos === "yes" ||
      formData.travelHistory === "yes" ||
      formData.highRiskActivities === "yes" ||
      (formData.previousDonations === "yes" && formData.recentDonations === "yes")
    ) {
      return "no";
    }
    return "yes";
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Eligibility Check
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-white">Are you between 18 and 65 years of age?</span>
          <select
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {formData.ageRange === "yes" && (
          <label className="block mb-4">
            <span className="text-white">If yes, please enter your exact age:</span>
            <input
              type="number"
              name="exactAge"
              value={formData.exactAge}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
              required
            />
          </label>
        )}

        <label className="block mb-4">
          <span className="text-white">Do you weigh at least 50 kg (110 lbs)?</span>
          <select
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {[ // Additional form fields
          { label: "Have you experienced any fever, cold, or flu in the past 7 days?", name: "recentIllness" },
          { label: "Do you have any chronic medical conditions?", name: "chronicConditions" },
          { label: "If yes, is it well-managed?", name: "wellManaged" },
          { label: "Are you taking any medications?", name: "medications" },
          { label: "Have you tested positive for HIV, Hepatitis B, or Hepatitis C?", name: "infectiousDiseases" },
          { label: "Have you had any vaccinations in the past 4 weeks?", name: "recentVaccinations" },
          { label: "Do you have any bleeding disorders?", name: "bleedingDisorders" },
          { label: "Have you consumed alcohol in the past 24–48 hours?", name: "alcoholUse" },
          { label: "Have you had a tattoo or piercing in the past 6 months?", name: "tattoos" },
          { label: "Have you traveled to high-risk areas in the past 12 months?", name: "travelHistory" },
        ].map(({ label, name }) => (
          <label key={name} className="block mb-4">
            <span className="text-white">{label}</span>
            <select
              name={name}
              value={formData[name as keyof FormData]}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
