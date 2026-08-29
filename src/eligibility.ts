import {
  EligibilityStatus,
  Opportunity,
} from "./opportunities";

export interface UserProfile {
  name: string;
  degree: string;
  field: string;
  skills: string[];
  location: string;
}

export interface EligibilityResult {
  status: EligibilityStatus;
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

  const profileText = [
    profile.degree,
    profile.field,
    ...profile.skills,
  ]
    .join(" ")
    .toLowerCase();

  const opportunityFields = opportunity.field.map((field) =>
    field.toLowerCase()
  );

  const matchingFields = opportunityFields.filter((field) =>
    profileText.includes(field)
  );

  if (matchingFields.length > 0) {
    reasons.push(
      `Relevant background found: ${matchingFields.join(", ")}.`
    );
  } else {
    missingRequirements.push(
      `No clear match with required fields: ${opportunity.field.join(", ")}.`
    );
  }

  const degreeMatches = opportunity.degreeRequirements.some(
    (degree) =>
      profile.degree.toLowerCase().includes(degree.toLowerCase()) ||
      degree.toLowerCase().includes(profile.degree.toLowerCase())
  );

  if (degreeMatches) {
    reasons.push(`Degree requirement matches: ${profile.degree}.`);
  } else {
    missingRequirements.push(
      `Degree requirement may not match: ${opportunity.degreeRequirements.join(
        ", "
      )}.`
    );
  }

  let score = 0;

  if (matchingFields.length > 0) {
    score += 50;
  }

  if (degreeMatches) {
    score += 40;
  }

  if (opportunity.remote) {
    score += 10;
    reasons.push("Remote opportunity.");
  }

  let status: EligibilityStatus;

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
    missingRequirements,
  };
    }
