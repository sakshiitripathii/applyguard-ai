import { searchOpportunities } from "./search";

console.log("🛡️ ApplyGuard AI");
console.log("==============================");
console.log("🔎 Searching opportunities...\n");

const results = searchOpportunities("Data");

if (results.length === 0) {
  console.log("No matching opportunities found.");
} else {
  results.forEach((opportunity, index) => {
    console.log(`${index + 1}. ${opportunity.title}`);
    console.log(`   Organization: ${opportunity.organization}`);
    console.log(`   Eligibility: ${opportunity.eligibility}`);
    console.log(`   Deadline: ${opportunity.deadline}`);
    console.log("--------------------------------");
  });
}

console.log("\n⚠️ Human approval is required before any application submission.");
