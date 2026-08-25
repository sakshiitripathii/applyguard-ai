import { opportunities, Opportunity } from "./opportunities";

export function searchOpportunities(
  keyword: string
): Opportunity[] {
  const query = keyword.toLowerCase().trim();

  if (!query) {
    return opportunities;
  }

  return opportunities.filter((opportunity) =>
    `${opportunity.title} ${opportunity.organization} ${opportunity.eligibility}`
      .toLowerCase()
      .includes(query)
  );
}
