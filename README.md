<!-- Profile README — Trilochan Prabakar -->
<div align="center">
  <img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/hero.svg" width="100%" alt="Trilochan Prabakar — Cybersecurity portfolio" />
</div>

<div align="center">
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/"><img src="https://img.shields.io/badge/LINKEDIN-CONNECT-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/trilochan-prabakar"><img src="https://img.shields.io/badge/GITHUB-FOLLOW-161B22?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://trilochan-prabakar.github.io/trilochan-prabakar/"><img src="https://img.shields.io/badge/PORTFOLIO-VISIT-55D9E8?style=flat-square&logo=googlechrome&logoColor=07131C" alt="Portfolio website" /></a>
  <a href="https://github.com/trilochan-prabakar/IntegrityWatch-Lite"><img src="https://img.shields.io/badge/FEATURED_PROJECT-INTEGRITYWATCH-0E7490?style=flat-square" alt="Featured project" /></a>
</div>

<h3 align="center">Cybersecurity student · Security engineering · Digital forensics</h3>
<p align="center">I build practical security tools and learn by investigating how systems behave.</p>

---

## 01 / Profile

I'm a B.Tech Cybersecurity student at **Amrita Vishwa Vidyapeetham**, interested in the systems behind security events: how files and services behave, how suspicious changes can be detected, and how evidence can be preserved and investigated.

My approach is hands-on: strengthen the fundamentals, build focused tools, test them against controlled scenarios, and document what they can—and cannot—prove.

| Focus area | What I'm exploring |
|:--|:--|
| **Security engineering** | Defensive tooling, integrity monitoring, explainable detection |
| **Systems** | Linux, operating-system behaviour, configuration security |
| **Forensics** | Digital forensics, memory forensics, evidence handling |
| **Network security** | TCP/IP, traffic analysis, network troubleshooting |
| **Incident response** | Alert triage, investigation workflows, response automation |

## 02 / Featured work

### IntegrityWatch Lite
**Explainable file-integrity monitoring for a controlled Linux-like lab**

[![Open repository](https://img.shields.io/badge/OPEN_PROJECT-IntegrityWatch_Lite-0E7490?style=flat-square&logo=github&logoColor=white)](https://github.com/trilochan-prabakar/IntegrityWatch-Lite)

A local-first tool that detects changes in a synthetic lab, explains supported security-relevant modifications through explicit rules, and records findings in a tamper-evident audit history.

<div align="center">
  <img src="https://raw.githubusercontent.com/trilochan-prabakar/trilochan-prabakar/main/assets/integritywatch-architecture.svg" width="100%" alt="IntegrityWatch Lite architecture: synthetic lab, scanner, detection engine, SQLite findings, authenticated baseline and audit chain" />
</div>

**Engineering highlights**
- SHA-256 file baselines with HMAC-SHA256 baseline authentication.
- Rule-based semantic checks, severity levels, and MITRE ATT&CK references.
- Watchdog event monitoring backed by periodic full reconciliation.
- SQLite findings and a sequential SHA-256 hash-chained audit log.
- Local Streamlit dashboard and repeatable smart-mode vs hash-only evaluation.

**Measured synthetic evaluation:** 12/12 expected attack rules detected and 0/4 benign false-positive scenarios in smart mode. These are results on the project's authored test corpus—not real-world detection rates.

<sub>Scope note: a local, single-user teaching and evaluation tool for a synthetic lab; not enterprise endpoint protection. The repository documents its threat model and limitations.</sub>

## 03 / Technical toolkit

| Category | Tools / concepts |
|:--|:--|
| **Programming** | Python · C · Bash |
| **Operating systems** | Linux · Windows · WSL2 |
| **Networking** | TCP/IP · Wireshark · Cisco Packet Tracer |
| **Development** | Git · GitHub · VS Code |
| **Security** | File integrity monitoring · System security · Digital forensics · Incident response |

<div align="center">
  <img src="https://skillicons.dev/icons?i=python,c,bash,linux,windows,git,github,vscode&theme=dark" alt="Python, C, Bash, Linux, Windows, Git, GitHub and VS Code" />
</div>

## 04 / Current direction

- Deepening Linux and operating-system fundamentals.
- Studying memory forensics and incident-response workflows.
- Practising network analysis and security investigation.
- Building and documenting practical cybersecurity projects.

## 05 / GitHub activity

<div align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=trilochan-prabakar&show_icons=true&hide_border=true&rank_icon=github&bg_color=0B1220&title_color=67E8F9&icon_color=22D3EE&text_color=C8D5E2" alt="GitHub statistics" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=trilochan-prabakar&layout=compact&hide_border=true&bg_color=0B1220&title_color=67E8F9&text_color=C8D5E2" alt="Most used languages" />
  <br/>
  <img width="82%" src="https://streak-stats.demolab.com?user=trilochan-prabakar&hide_border=true&background=0B1220&ring=22D3EE&fire=22D3EE&currStreakLabel=67E8F9&sideLabels=C8D5E2&dates=8294A8" alt="GitHub contribution streak" />
</div>

---

<div align="center">
  **Interested in practical security engineering and learning through building.**
  <br/>
  <a href="https://www.linkedin.com/in/trilochan-prabakar-baa17a408/">Connect on LinkedIn</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/trilochan-prabakar">Explore my repositories</a>
</div>
