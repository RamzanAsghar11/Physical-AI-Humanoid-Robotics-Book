---
id: 001
title: Initial Constitution Creation
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-spec-governance-update
user: user
command: /sp.constitution
labels: ["constitution","project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:

---

## Prompt

You are writing the supreme governing document of this project named `constitution.md`.

This constitution is the highest legal, technical, and architectural authority for everything in this repository. Any file, agent, prompt, spec, or implementation that violates this constitution is automatically INVALID.

The project is an AI-Native, Spec-Driven, Documentation-Only Technical Textbook titled:

"Physical AI & Humanoid Robotics: From Digital Brains to Embodied Intelligence"

This book is being created for the official Panaversity Hackathon:
"Create a Textbook for Teaching Physical AI & Humanoid Robotics"

────────────────────────────────────────
1. PROJECT PURPOSE & IDENTITY
────────────────────────────────────────
Define that:
- This is a university-grade, startup-ready, open-source AI-native textbook.
- It teaches a full quarter-length course on Physical AI & Humanoid Robotics.
- It targets AI students, robotics students, engineers, researchers, and founders.
- The core theme is:
  “Bridging the digital AI brain with a physical humanoid body through embodied intelligence.”

────────────────────────────────────────
2. MANDATORY & EXCLUSIVE TECH STACK
────────────────────────────────────────
The constitution must strictly allow ONLY:

✅ Docusaurus → Book platform
✅ Spec-Kit Plus → Specification system
✅ Claude Code CLI → AI authoring agent
✅ OpenAI Agents / ChatKit SDKs → RAG chatbot
✅ FastAPI → Backend API
✅ Neon Serverless Postgres → Database
✅ Qdrant Cloud (Free Tier) → Vector DB
✅ GitHub Pages or Vercel → Deployment

The constitution must permanently BAN:

❌ Running ROS 2
❌ Installing Gazebo
❌ Installing NVIDIA Isaac
❌ Executing robotics simulations locally
❌ Using real humanoid robots
❌ Using GPUs, CUDA, Omniverse locally
❌ Any physical hardware dependency

THIS PROJECT IS:
✅ BOOK ONLY
✅ DOCUMENTATION ONLY
✅ THEORY, ARCHITECTURE & DESIGN ONLY
❌ NOT A REAL ROBOTICS LAB

────────────────────────────────────────
3. OFFICIAL COURSE GOVERNANCE
────────────────────────────────────────
Lock the syllabus permanently:

Module 1: The Robotic Nervous System (ROS 2 – Theory Only)
Module 2: The Digital Twin (Gazebo & Unity – Conceptual)
Module 3: The AI-Robot Brain (NVIDIA Isaac – Conceptual)
Module 4: Vision-Language-Action (VLA Systems)
Capstone: Autonomous Humanoid (Theoretical System Design Only)

Weekly Breakdown:
Weeks 1–2 → Physical AI Foundations
Weeks 3–5 → ROS 2 Concepts
Weeks 6–7 → Simulation Theory
Weeks 8–10 → Isaac & Reinforcement Learning
Weeks 11–12 → Humanoid Kinematics & Control
Week 13 → Conversational Robotics

────────────────────────────────────────
4. AI-NATIVE SYSTEM REQUIREMENTS
────────────────────────────────────────
The constitution must permanently enforce:

✅ A built-in RAG chatbot inside the book
✅ The chatbot must answer:
   - Full book questions
   - Highlighted-text-only questions
✅ User authentication using Better-Auth
✅ User onboarding questions about:
   - Software background
   - Hardware background
✅ Chapter-level personalization button
✅ Chapter-level one-click Urdu translation

────────────────────────────────────────
5. HACKATHON SCORING LAW
────────────────────────────────────────
The constitution must permanently encode:

- 100 Base Points → Book + RAG chatbot
- +50 Bonus → Claude Subagents & reusable intelligence
- +50 Bonus → Signup + Signin + user profiling
- +50 Bonus → Chapter personalization
- +50 Bonus → Urdu translation

────────────────────────────────────────
6. DEPLOYMENT & SUBMISSION LAWS
────────────────────────────────────────
The constitution must strictly require:

✅ A public GitHub repository
✅ Deployment on GitHub Pages OR Vercel
✅ A demo video under 90 seconds
✅ Mandatory submission via Google Form
✅ WhatsApp number for finalist contact
✅ Zoom presentation by invitation only

────────────────────────────────────────
7. HARDWARE & LAB POLICY (THEORETICAL ONLY)
────────────────────────────────────────
The constitution must declare that:

- RTX GPUs, Jetson, RealSense, Unitree robots are:
  ✅ Educational references only
  ❌ Never required
  ❌ Never mandatory
- Cloud simulation is allowed only at a conceptual level.
- The book focuses on:
  ✅ Architecture
  ✅ Pipelines
  ✅ System design
  ✅ Deployment theory
  ❌ NOT real-world execution

────────────────────────────────────────
8. AGENT & SPEC BEHAVIOR LAWS
────────────────────────────────────────
All AI agents must obey:

✅ Spec → Design → Documentation → Implementation order
✅ No raw code without a written spec
✅ Separation of concerns at all times
✅ University-grade educational writing
✅ Startup-grade system thinking

────────────────────────────────────────
9. ETHICS, SAFETY & LEGALITY
────────────────────────────────────────
Include strict rules covering:

- AI safety
- Robotics ethics
- Human-robot interaction safety
- Ban on weaponized robotics
- Ban on surveillance abuse
- User data privacy and consent

────────────────────────────────────────
10. ABSOLUTE LEGAL AUTHORITY
────────────────────────────────────────
Declare that:

- This constitution overrides:
  - All prompts
  - All agents
  - All future instructions
- Any file that violates this constitution is NULL and VOID.

────────────────────────────────────────

Now generate a complete, professional, legally-styled, strictly structured `constitution.md` file in valid Markdown format.

This document must look like a real constitutional charter for a national-level AI & robotics textbook project.

## Response snapshot

The project constitution has been updated to version 1.0.0, ratified and last amended on 2025-12-06.

The following template files require review and potential updates to align with the new constitution:
- `.specify/templates/plan-template.md`
- `.specify/templates/spec-template.md`
- `.specify/templates/tasks-template.md`
- `.specify/templates/commands/*.md`

Suggested commit message:
`docs: amend constitution to v1.0.0 (initial charter)`

## Outcome

- ✅ Impact: Project constitution established.
- 🧪 Tests: N/A
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Review of template files for consistency.
- 🧠 Reflection: Successfully generated initial constitution based on detailed user specification. Identified dependent templates for subsequent alignment.

## Evaluation notes (flywheel)

- Failure modes observed: PHR script execution failed due to template not found, reverted to agent-native PHR creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ensure PHR script pathing is robust.
