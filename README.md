<div align="center">
  <img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/hero.svg" width="100%" alt="Trilochan Prabakar — software engineering, security engineering, digital forensics and incident response" />

  <h2>Building practical tools. Understanding how systems fail.</h2>
  <p>B.Tech Cybersecurity student at <strong>Amrita Vishwa Vidyapeetham</strong><br/>Focused on Python development, backend systems, security engineering and digital forensics.</p>
  <a href="https://trilochan-prabakar.github.io/trilochan-prabakar/"><img src="https://img.shields.io/badge/PORTFOLIO-Explore-55D9E8?style=for-the-badge&logo=googlechrome&logoColor=07131C" alt="Portfolio website" /></a>
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/"><img src="https://img.shields.io/badge/LINKEDIN-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</div>

---

## About

I'm a cybersecurity student who enjoys understanding what happens beneath the surface of software and systems: how services make authorization decisions, how files and events can reveal suspicious activity, and how digital evidence can be preserved and interpreted.

I learn by building, testing and documenting practical tools. I care about the engineering behind a result—clear requirements, reproducible experiments, meaningful automated tests and honest validation boundaries.

**Areas I’m focused on**
- Python development and backend systems
- Security engineering and defensive tooling
- Linux and operating-system security
- Digital forensics and memory forensics
- Network security and incident response

## Featured projects

### REMNANT — V3.0.0
**HTTP Cache Authorization & Identity-Isolation Security Testing Framework**

<a href="https://github.com/trilochan-prabakar/REMNANT"><img src="https://img.shields.io/badge/VIEW_REPOSITORY-REMNANT-0E7490?style=flat-square&logo=github&logoColor=white" alt="View REMNANT repository" /></a>
<a href="https://github.com/trilochan-prabakar/REMNANT/releases/tag/v3.0.0"><img src="https://img.shields.io/badge/RELEASE-V3.0.0-164E63?style=flat-square&logo=github&logoColor=white" alt="REMNANT V3.0.0 release" /></a>
<a href="https://github.com/trilochan-prabakar/REMNANT/actions"><img src="https://img.shields.io/badge/CI-PASSING-0E7490?style=flat-square&logo=githubactions&logoColor=white" alt="REMNANT GitHub Actions" /></a>

REMNANT investigates whether HTTP caching can violate authorization boundaries. It began with a controlled grant → cache → revoke → replay experiment and now includes a separate V3 HTTP scenario runner for cache behavior and cross-identity isolation testing.

**What I built**
- V1/V2 authorization replay experiment with Redis-backed response caching and a strict three-condition finding oracle.
- FastAPI protected-origin adapters, explicit cache observations and versioned metadata.
- Differential response diagnostics, tenant-aware policy testing, SQLite evidence, and JSON / standalone HTML reports.
- V3 YAML-driven HTTP scenarios with separate origin and proxy clients.
- HTTP cache diagnostics covering cacheability, freshness, Cache-Control, Expires, Vary, Set-Cookie and observed cache states.
- Cross-identity isolation detection using strict authorization, proxy response, cache-hit and foreign-canary conditions.
- Body-free V3 SQLite evidence, run comparison, bounded concurrency for read-only scenarios, and a Varnish 7.6 integration fixture.

<sub>V3.0.0 published November 26, 2026. Post-merge full-suite and V3/Varnish GitHub Actions workflows passed. Python 3.12 · FastAPI · HTTPX · Redis 7 · SQLite · pytest · Varnish 7.6. MIT License.</sub>

> Scope: a controlled research and testing harness—not a general-purpose vulnerability scanner or production authorization system. A negative result does not prove a target is free of cache-related authorization flaws.

---

### FORACE — V2.0.0
**Explainable file-integrity monitoring and evidence history for a controlled Linux-like lab**

<a href="https://github.com/trilochan-prabakar/FORACE"><img src="https://img.shields.io/badge/VIEW_REPOSITORY-FORACE-0E7490?style=flat-square&logo=github&logoColor=white" alt="View FORACE repository" /></a>
<a href="https://github.com/trilochan-prabakar/FORACE/releases/tag/v2.0.0"><img src="https://img.shields.io/badge/RELEASE-V2.0.0-164E63?style=flat-square&logo=github&logoColor=white" alt="FORACE V2.0.0 release" /></a>
<a href="https://github.com/trilochan-prabakar/FORACE/actions"><img src="https://img.shields.io/badge/CI-PASSING-0E7490?style=flat-square&logo=githubactions&logoColor=white" alt="FORACE GitHub Actions" /></a>

FORACE monitors a synthetic Linux-like lab, detects file and selected metadata changes, explains supported security-relevant modifications through explicit rules, and records findings in a tamper-evident audit history. V2 strengthens scan reliability and evidence provenance by recording per-file observations, linking findings to scans, and verifying observation manifests against the audit chain.

<div align="center"><img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/forace-architecture.svg" width="100%" alt="FORACE architecture showing the synthetic lab, scanner, detection engine, SQLite findings, authenticated baseline and audit chain" /></div>

**What I built**
- SHA-256 file observations and HMAC-SHA256 authenticated baselines.
- Rule-based semantic checks R01–R12 with severity levels and MITRE ATT&CK references.
- Watchdog filesystem events backed by periodic full reconciliation.
- SQLite findings linked to originating scans through `scan_id`, with atomic scan/finding/audit persistence.
- Per-file observation history, explicit completed / completed-with-errors / failed scan states, and audit-linked manifest verification.
- CLI commands for scan history and evidence verification, plus a read-only Streamlit investigation dashboard.
- Isolated synthetic attack and benign evaluations, with reproducible reports.

**Evaluation on the 30-scenario synthetic corpus:** smart mode detected 20/20 simulated attack scenarios with alerts on 0/10 benign scenarios. Hash-only comparison detected 18/20 attack scenarios and alerted on 9/10 benign scenarios. These are controlled corpus results, not real-world detection rates.

<sub>V2.0.0 published November 27, 2026. Validation: 225 automated tests passed in CI on Python 3.11 and 3.12. Python · Watchdog · PyYAML · SQLite · Streamlit · pandas · pytest. MIT License.</sub>

> Scope: a local, single-user teaching and evaluation tool for a synthetic lab—not enterprise endpoint protection. File observations are point-in-time; the local audit chain is tamper-evident, not immutable against an attacker able to rewrite the database.

---

### VERITY
**Forensic timestamp normalization and interval comparison**

<a href="https://github.com/trilochan-prabakar/VERITY"><img src="https://img.shields.io/badge/VIEW_REPOSITORY-VERITY-0E7490?style=flat-square&logo=github&logoColor=white" alt="View VERITY repository" /></a>
<a href="https://github.com/trilochan-prabakar/VERITY/releases/tag/v1.0.0"><img src="https://img.shields.io/badge/RELEASE-V1.0.0-164E63?style=flat-square&logo=github&logoColor=white" alt="VERITY V1.0.0 release" /></a>

VERITY is a Python library and CLI that decodes selected forensic timestamps, normalizes them into closed UTC intervals, and compares event intervals using weak precedence. It preserves source inputs and requires explicit metadata rather than guessing timezones.

**What I built**
- Timestamp decoding for APFS, NTFS FILETIME, exFAT and Discord Snowflake values.
- Closed-interval normalization using integer nanoseconds.
- Pairwise event comparison with explicit handling of overlapping or undetermined intervals.
- CSV-based input, normalized output and comparison reports.
- Validation and explanations for unresolved or invalid timestamp records.

<sub>Validation: 55 tests passed locally with 88% coverage; GitHub Actions CI passed on Python 3.10, 3.11, 3.12 and 3.13, with per-version coverage artifacts. Python · dfDateTime · pytest. Based on the timestamp model by Hornung et al., TIME 2026.</sub>

---

### Dynamic QoS-Aware SDN
**Controller-driven path selection and failover in a Mininet diamond topology**

<a href="https://github.com/trilochan-prabakar/dynamic-qos-aware-sdn"><img src="https://img.shields.io/badge/VIEW_REPOSITORY-Dynamic_QoS_Aware_SDN-0E7490?style=flat-square&logo=github&logoColor=white" alt="View Dynamic QoS-Aware SDN repository" /></a>

A Computer Networks group assignment that I helped refine through controller hardening, regression tests and Mininet runtime validation. The Ryu controller uses OpenFlow 1.3, port-statistics-based utilization estimates and a strict reroute threshold to respond to congestion and link failure. Original group-project attribution is retained in the repository.

<sub>Validation: 31 automated tests passed; congestion rerouting, link failover/recovery and end-to-end connectivity were exercised in the documented virtual lab. Configured delay/loss/jitter profiles are not live measurements.</sub>

## Technical toolkit

<div align="center"><img src="https://skillicons.dev/icons?i=python,c,bash,linux,windows,git,github,vscode&theme=dark" alt="Python, C, Bash, Linux, Windows, Git, GitHub and VS Code" /></div>

| Area | Technologies and concepts |
|:--|:--|
| **Programming** | Python · C · Bash |
| **Backend & testing** | FastAPI · HTTPX · pytest · REST APIs |
| **Data & infrastructure** | Redis · SQLite · Docker |
| **Systems** | Linux · Windows · WSL2 |
| **Networking** | TCP/IP · Wireshark · Cisco Packet Tracer · Mininet · OpenFlow |
| **Security** | Authorization testing · Integrity monitoring · Digital forensics · Incident response |
| **Developer tools** | Git · GitHub · VS Code |

## What I’m learning now
- Strengthening Python, software engineering and backend development fundamentals.
- Deepening Linux, operating-system and networking knowledge.
- Exploring memory forensics and incident-response workflows.
- Building focused projects and documenting the engineering behind them.

## GitHub activity

A snapshot of my public GitHub activity and most-used languages. These cards are generated dynamically and may take a moment to load.

<div align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=trilochan-prabakar&show_icons=true&hide_border=true&theme=transparent" alt="GitHub statistics for trilochan-prabakar" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=trilochan-prabakar&layout=compact&hide_border=true&theme=transparent" alt="Most-used programming languages on GitHub" />
</div>

## Find me

<div align="center">
  <a href="https://github.com/trilochan-prabakar?tab=repositories"><img src="https://img.shields.io/badge/EXPLORE-My%20Repositories-0E7490?style=for-the-badge&logo=github&logoColor=white" alt="Explore my repositories" /></a>
  <a href="https://trilochan-prabakar.github.io/trilochan-prabakar/"><img src="https://img.shields.io/badge/VISIT-Portfolio-164E63?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Visit portfolio website" /></a>
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/"><img src="https://img.shields.io/badge/CONNECT-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn" /></a>
</div>

---

<div align="center"><strong>Interested in practical cybersecurity, thoughtful engineering and learning by building.</strong></div>
