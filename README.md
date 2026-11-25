<div align="center">
  <img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/hero.svg" width="100%" alt="Trilochan Prabakar — Security engineering, digital forensics and incident response" />

  <h2>Building practical tools. Understanding how systems fail.</h2>
  <p>
    B.Tech Cybersecurity student at <strong>Amrita Vishwa Vidyapeetham</strong><br/>
    Interested in security engineering, Linux systems, digital forensics and incident response.
  </p>

  <a href="https://trilochan-prabakar.github.io/trilochan-prabakar/"><img src="https://img.shields.io/badge/PORTFOLIO-Explore-55D9E8?style=for-the-badge&logo=googlechrome&logoColor=07131C" alt="Portfolio website" /></a>
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/"><img src="https://img.shields.io/badge/LINKEDIN-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</div>

---

## About

I'm a cybersecurity student who enjoys understanding what happens beneath the surface of a system: how files and services behave, how suspicious changes can be identified, and how digital evidence can be preserved.

I learn by building, testing and documenting practical security tools. I care about understanding the engineering behind a result—not just making a demo work.

**Areas I'm focused on**
- Security engineering and defensive tooling
- Linux and operating-system security
- Digital forensics and memory forensics
- Network security and traffic analysis
- Incident response and investigation workflows

## Featured projects

### REMNANT
**Stateful Cache–Authorization Consistency Testing Framework**

<a href="https://github.com/trilochan-prabakar/REMNANT">
  <img src="https://img.shields.io/badge/VIEW_REPOSITORY-REMNANT-0E7490?style=flat-square&logo=github&logoColor=white" alt="View REMNANT repository" />
</a>
<a href="https://github.com/trilochan-prabakar/REMNANT/releases/tag/v1.0.0">
  <img src="https://img.shields.io/badge/RELEASE-V1.0.0-164E63?style=flat-square&logo=github&logoColor=white" alt="REMNANT V1.0.0 release" />
</a>

REMNANT tests whether a cached response remains accessible after the requesting user's authorization has been revoked. It independently checks the origin's authorization decision against cache behavior to identify cache–authorization inconsistencies.

**What I built**
- FastAPI-based protected origin with independent authorization checks.
- Redis-backed response caching and a reproducible authorization-revocation experiment.
- A precise finding oracle: origin denies access, cache returns a hit, and the protected canary matches.
- SQLite evidence persistence with experiment-stage records and findings.
- JSON and standalone HTML security reports.

<sub>Validation: 67 tests passed with local Redis integration; GitHub Actions CI verified. Python · FastAPI · Redis · SQLite · pytest · Docker. MIT License.</sub>

---

### VERITY
**Forensic timestamp normalization and interval comparison**

<a href="https://github.com/trilochan-prabakar/VERITY">
  <img src="https://img.shields.io/badge/VIEW_REPOSITORY-VERITY-0E7490?style=flat-square&logo=github&logoColor=white" alt="View VERITY repository" />
</a>
<a href="https://github.com/trilochan-prabakar/VERITY/releases/tag/v1.0.0">
  <img src="https://img.shields.io/badge/RELEASE-V1.0.0-164E63?style=flat-square&logo=github&logoColor=white" alt="VERITY V1.0.0 release" />
</a>

VERITY is a Python library and CLI that decodes selected forensic timestamps, normalizes them into closed UTC intervals, and compares event intervals using weak precedence. It preserves source inputs and requires explicit metadata rather than guessing timezones.

**What I built**
- Timestamp decoding for APFS, NTFS FILETIME, exFAT and Discord Snowflake values.
- Closed-interval normalization using integer nanoseconds.
- Pairwise event comparison with explicit handling of overlapping or undetermined intervals.
- CSV-based input, normalized output and comparison reports.
- Validation and explanations for unresolved or invalid timestamp records.

<sub>Validation: 55 tests passed locally with 88% coverage; GitHub Actions CI passed on Python 3.10, 3.11, 3.12 and 3.13, with per-version coverage artifacts. Python · dfDateTime · pytest. Based on the timestamp model by Hornung et al., TIME 2026.</sub>

---

### IntegrityWatch Lite
**Explainable file-integrity monitoring for a controlled Linux-like lab**

<a href="https://github.com/trilochan-prabakar/IntegrityWatch-Lite">
  <img src="https://img.shields.io/badge/VIEW_REPOSITORY-IntegrityWatch_Lite-0E7490?style=flat-square&logo=github&logoColor=white" alt="View IntegrityWatch Lite repository" />
</a>

IntegrityWatch Lite monitors a synthetic Linux-like lab, detects file and selected metadata changes, explains supported security-relevant modifications through explicit rules, and records findings in a tamper-evident audit history.

<div align="center">
  <img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/integritywatch-architecture.svg" width="100%" alt="IntegrityWatch Lite architecture showing the synthetic lab, scanner, detection engine, SQLite findings, authenticated baseline and audit chain" />
</div>

**What I built**
- SHA-256 file baselines with HMAC-SHA256 baseline authentication.
- Rule-based semantic checks with severity levels and MITRE ATT&CK references.
- Watchdog filesystem events backed by periodic full reconciliation.
- SQLite findings and a sequential SHA-256 hash-chained audit log.
- Local Streamlit dashboard and repeatable smart-mode vs hash-only evaluation.

**Evaluation on the authored synthetic test corpus:** smart mode detected 12/12 expected attack rules with 0/4 benign false-positive scenarios. Hash-only mode detected 11/12 attack scenarios and raised 3/4 benign alerts. These are controlled test-corpus results, not real-world detection rates.

<sub>Scope: a local, single-user teaching and evaluation tool for a synthetic lab—not enterprise endpoint protection.</sub>

---

### Dynamic QoS-Aware SDN
**Controller-driven path selection and failover in a Mininet diamond topology**

<a href="https://github.com/trilochan-prabakar/dynamic-qos-aware-sdn">
  <img src="https://img.shields.io/badge/VIEW_REPOSITORY-Dynamic_QoS_Aware_SDN-0E7490?style=flat-square&logo=github&logoColor=white" alt="View Dynamic QoS-Aware SDN repository" />
</a>

A Computer Networks group assignment that I helped refine through controller hardening, regression tests and Mininet runtime validation. The Ryu controller uses OpenFlow 1.3, port-statistics-based utilization estimates and a strict reroute threshold to respond to congestion and link failure. Original group-project attribution is retained in the repository.

<sub>Validation: 31 automated tests passed; congestion rerouting, link failover/recovery and end-to-end connectivity were exercised in the documented virtual lab. Configured delay/loss/jitter profiles are not live measurements.</sub>

## Technical toolkit

<div align="center">
  <img src="https://skillicons.dev/icons?i=python,c,bash,linux,windows,git,github,vscode&theme=dark" alt="Python, C, Bash, Linux, Windows, Git, GitHub and VS Code" />
</div>

| Area | Technologies and concepts |
|:--|:--|
| **Programming** | Python · C · Bash |
| **Systems** | Linux · Windows · WSL2 |
| **Networking** | TCP/IP · Wireshark · Cisco Packet Tracer · Mininet · OpenFlow |
| **Developer tools** | Git · GitHub · VS Code |
| **Security** | Integrity monitoring · System security · Digital forensics · Incident response |

## What I'm learning now

- Strengthening Linux, operating-system and networking fundamentals.
- Exploring memory forensics and incident-response workflows.
- Practising security investigation and traffic analysis.
- Building focused projects and documenting the engineering behind them.

## GitHub activity

A snapshot of my public GitHub activity and most-used languages. These cards are generated dynamically and may take a moment to load.

<div align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=trilochan-prabakar&show_icons=true&include_all_commits=true&hide_border=true&theme=transparent" alt="GitHub statistics for trilochan-prabakar" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=trilochan-prabakar&layout=compact&hide_border=true&theme=transparent" alt="Most-used programming languages on GitHub" />
</div>

## GitHub

I keep my work, experiments and project documentation public here.

<div align="center">
  <a href="https://github.com/trilochan-prabakar?tab=repositories">
    <img src="https://img.shields.io/badge/EXPLORE-My%20Repositories-0E7490?style=for-the-badge&logo=github&logoColor=white" alt="Explore my repositories" />
  </a>
  <a href="https://github.com/trilochan-prabakar?tab=activity">
    <img src="https://img.shields.io/badge/VIEW-Recent%20Activity-164E63?style=for-the-badge&logo=github&logoColor=white" alt="View recent GitHub activity" />
  </a>
</div>

---

<div align="center">
  <strong>Interested in practical cybersecurity, thoughtful engineering and learning by building.</strong>
  <br/>
  <a href="https://trilochan-prabakar.github.io/trilochan-prabakar/">Portfolio</a>
  &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/">LinkedIn</a>
</div>
