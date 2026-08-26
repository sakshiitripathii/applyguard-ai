export interface Opportunity {
  title: string;
  organization: string;
  eligibility: string;
  deadline: string;
}

const opportunities: Opportunity[] = [
  {
    title: "Data Analytics Internship",
    organization: "Example Organization",
    eligibility: "M.Sc. Mathematics students",
    deadline: "2026-09-30"
  },
  {
    title: "AI & Data Science Internship",
    organization: "Example Tech",
    eligibility: "Students with Mathematics or Computing background",
    deadline: "2026-10-15"
  },
  {
    title: "Research Fellowship",
    organization: "Example Research Institute",
    eligibility: "Postgraduate students",
    deadline: "2026-11-01"
  }
];

export function searchOpportunities(keyword: string): Opportunity[] {
  const search = keyword.toLowerCase();

  return opportunities.filter((opportunity) =>
    `${opportunity.title} ${opportunity.organization} ${opportunity.eligibility}`
      .toLowerCase()
      .includes(search)
  );
}
