import { searchOpportunities } from "./search";

const userProfile = {
  degree: "M.Sc.",
  field: "Mathematics",
  student: true
};

const results = searchOpportunities("Data");

console.log("🛡️ ApplyGuard AI");
console.log("----------------");

for (const opportunity of results) {
  console.log(`Opportunity: ${opportunity.title}`);
  console.log(`Organization: ${opportunity.organization}`);
  console.log(`Eligibility: ${opportunity.eligibility}`);
  console.log(`Deadline: ${opportunity.deadline}`);
  console.log("----------------");
}

console.log("Human approval is required before any submission.");
