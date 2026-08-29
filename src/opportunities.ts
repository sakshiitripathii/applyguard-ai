export type OpportunityType =
  | "internship"
  | "fellowship"
  | "scholarship"
  | "hackathon"
  | "research";

export type EligibilityStatus =
  | "eligible"
  | "not-eligible"
  | "needs-review";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  description: string;

  field: string[];
  degreeRequirements: string[];

  deadline: string;
  location: string;
  remote: boolean;

  eligibility: EligibilityStatus;
  eligibilityReason: string;

  applicationUrl: string;

  matchScore?: number;
  discoveredAt: string;
}
