
    import { Opportunity } from "./opportunities";

export interface UserProfile {
  name: string;
  degree: string;
  field: string;
  skills: string[];
  location: string;
}

export interface EligibilityResult {
  status: "eligible" | "needs-review" | "not-eligible";
  score: number;
  reasons: string[];
  missingRequirements: string[];
}

export function checkEligibility(
  profile: UserProfile,
  opportunity: Opportunity
): EligibilityResult {
  const reasons: string[] = [];
  const missingRequirements: string[] = [];

  const profileText = `
    ${profile.degree}
    ${profile.field}
    ${profile.skills.join(" ")}
    ${profile.location}
  `.toLowerCase();

  let score = 0;

  const fieldMatch =
    profileText.includes(opportunity.eligibility.toLowerCase()) ||
    profileText.includes("mathematics") ||
    profileText.includes("computing");

  if (fieldMatch) {
    score += 50;
    reasons.push("Profile matches the opportunity requirements.");
  } else {
    missingRequirements.push("Required academic field or background");
  }

  const degreeMatch =
    profile.degree.toLowerCase().includes("m.sc") ||
    profile.degree.toLowerCase().includes("master") ||
    profile.degree.toLowerCase().includes("postgraduate");

  if (degreeMatch) {
    score += 40;
    reasons.push("Academic qualification appears compatible.");
  } else {
    missingRequirements.push("Compatible academic qualification");
  }

  if (opportunity.eligibility.toLowerCase().includes("remote")) {
    score += 10;
    reasons.push("Remote opportunity.");
  }

  let status: EligibilityResult["status"];

  if (score >= 80) {
    status = "eligible";
  } else if (score < 40) {
    status = "not-eligible";
  } else {
    status = "needs-review";
  }

  return {
    status,
    score,
    reasons,
    missingRequirements
  };
}
