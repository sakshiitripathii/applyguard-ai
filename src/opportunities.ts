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

export const opportunities: Opportunity[] = [
  {
    id: "opp-001",
    title: "Data Analytics Internship",
    organization: "Example Organization",
    type: "internship",
    description: "An internship focused on data analysis and business insights.",
    field: ["data analytics", "mathematics", "data science"],
    degreeRequirements: ["M.Sc. Mathematics", "M.Sc. Mathematics & Computing"],
    deadline: "2026-09-30",
    location: "India",
    remote: true,
    eligibility: "eligible",
    eligibilityReason: "Matches the mathematics and computing background.",
    applicationUrl: "https://example.com/apply",
    matchScore: 92,
    discoveredAt: "2026-08-29"
  },
  {
    id: "opp-002",
    title: "AI & Data Science Internship",
    organization: "Example Tech",
    type: "internship",
    description: "An internship combining artificial intelligence and data science.",
    field: ["artificial intelligence", "data science", "computing"],
    degreeRequirements: ["Mathematics", "Computer Science", "Computing"],
    deadline: "2026-10-15",
    location: "India",
    remote: true,
    eligibility: "eligible",
    eligibilityReason: "Mathematics and computing backgrounds are relevant.",
    applicationUrl: "https://example.com/apply",
    matchScore: 88,
    discoveredAt: "2026-08-29"
  },
  {
    id: "opp-003",
    title: "Research Fellowship",
    organization: "Example Research Institute",
    type: "research",
    description: "A research opportunity for postgraduate students.",
    field: ["mathematics", "research", "computing"],
    degreeRequirements: ["Postgraduate students"],
    deadline: "2026-11-01",
    location: "India",
    remote: false,
    eligibility: "needs-review",
    eligibilityReason: "Final eligibility depends on the fellowship's detailed requirements.",
    applicationUrl: "https://example.com/apply",
    matchScore: 76,
    discoveredAt: "2026-08-29"
  }
];
