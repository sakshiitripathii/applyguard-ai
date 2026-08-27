import { searchOpportunities } from "./search";

console.log("🚀 ApplyGuard AI started");

const results = searchOpportunities("Data");

for (const opportunity of results) {
  console.log(`Opportunity: ${opportunity.title}`);
  console.log(`Organization: ${opportunity.organization}`);
  console.log(`Eligibility: ${opportunity.eligibility}`);
  console.log(`Deadline: ${opportunity.deadline}`);
  console.log("----------------------");
}

console.log("⚠️ Human approval is required before any submission.");
