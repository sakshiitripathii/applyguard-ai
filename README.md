# applyguard-ai
A safe AI agent that researches opportunities, checks eligibility, prepares applications, and asks for approval before submission.
Qodo Code Review Evidence 

The substantive implementation changes were submitted through a Qodo-reviewed pull request.

Representative merged PR: #1 — Add TrueForge integration for ApplyGuard

Qodo's review surfaced four correctness issues in the eligibility and opportunity-search implementation: eligibility checks were using the wrong fields, the eligibility workflow was not connected to the runtime entrypoint, the remote scoring condition could not be reached with the current eligibility status model, and opportunity search did not include all requirement-bearing fields.

For this hackathon submission, these findings were documented rather than silently dismissed. The merged PR preserves the Qodo review history and its findings, while the current demonstrated workflow focuses on opportunity discovery and human approval. Further remediation of the eligibility/search findings is planned as follow-up work.


