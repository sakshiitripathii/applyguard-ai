interface Opportunity {
  title: string;
  organization: string;
  eligibility: string;
  status: "eligible" | "not-eligible" | "review";
}

function checkEligibility(
  opportunity: Opportunity,
  profile: {
    degree: string;
    field: string;
    student: boolean;
  }
): Opportunity {
  const text = (
    opportunity.eligibility +
    " " +
    opportunity.title
  ).toLowerCase();

  const fieldMatch =
    text.includes(profile.field.toLowerCase()) ||
    text.includes("any field");

  if (profile.student && fieldMatch) {
    return {
      ...opportunity,
      status: "eligible"
    };
  }

  return {
    ...opportunity,
    status: "review"
  };
}

const userProfile = {
  degree: "M.Sc.",
  field: "Mathematics",
  student: true
};

const opportunity: Opportunity = {
  title: "Data Analytics Internship",
  organization: "Example Organization",
  eligibility: "Open to students from any field",
  status: "review"
};

const result = checkEligibility(opportunity, userProfile);

console.log("ApplyGuard AI");
console.log("----------------");
console.log(`Opportunity: ${result.title}`);
console.log(`Organization: ${result.organization}`);
console.log(`Eligibility status: ${result.status}`);

if (result.status === "eligible") {
  console.log("Application prepared.");
  console.log("⚠️ Human approval required before submission.");
  }
