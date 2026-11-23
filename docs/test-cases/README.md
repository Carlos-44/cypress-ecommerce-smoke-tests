# Test cases: traceability

New IDs start at TC-001. Each acceptance criterion in `docs/features/` has at least one test case.

| Requirement | Test cases | Automated |
|---|---|---|
| F-01 AC-01 | [TC-001](TC-001.md) | Yes |
| F-01 AC-02 | [TC-002](TC-002.md) | Yes |
| F-01 AC-03 | [TC-003](TC-003.md) | Yes |
| F-01 AC-04 | [TC-004](TC-004.md) | No |
| F-02 AC-01 | [TC-005](TC-005.md) | Yes |
| F-02 AC-02 | [TC-006](TC-006.md) | No |
| F-03 AC-01 | [TC-007](TC-007.md) | Yes |
| F-03 AC-02 | [TC-008](TC-008.md) | No |

Totals: 8 test cases. 5 are Automated (TC-001, TC-002, TC-003, TC-005, TC-007); all passed locally on 2026-11-23 (10/10 specs). 3 have no test yet and are Not started (TC-004, TC-006, TC-008).

Notes:
- The Cucumber feature `cypress/e2e/features/store-smoke.feature` mirrors TC-001, TC-002, TC-003, TC-005 and TC-007.
- All cases depend on the third-party saucedemo.com site.
