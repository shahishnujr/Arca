"use client";

import { useSearchParams } from "next/navigation";

export default function EligibilityResultPage() {
  const searchParams = useSearchParams();
  const eligible = searchParams.get("eligible");

  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Eligibility Result
      </h1>
      {eligible === "yes" ? (
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Congratulations! 🎉
          </h2>
          <p className="text-lg">
            You are eligible to donate blood. Thank you for your willingness to
            make a difference and save lives. Your contribution is invaluable!
          </p>
        </div>
      ) : (
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Unfortunately, You Are Not Eligible 😞
          </h2>
          <p className="text-lg">
            Based on the information provided, you do not meet the eligibility
            criteria for blood donation at this time. Thank you for your
            interest, and we encourage you to try again in the future if your
            circumstances change.
          </p>
        </div>
      )}
    </div>
  );
}
