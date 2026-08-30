import { Opportunity, opportunities } from "./opportunities";

export function searchOpportunities(keyword: string): Opportunity[] {
  const search = keyword.toLowerCase();

  return opportunities.filter((opportunity) =>
    `${opportunity.title} ${opportunity.organization} ${opportunity.eligibility}`
      .toLowerCase()
      .includes(search)
  );
}
