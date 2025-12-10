<!--
Sync Impact Report:
- Version change: 1.1.0 → 1.2.0
- List of modified principles: Project Purpose & Identity (homepage redesign requirements added), Content Rules (chapter title format specified), Formatting Rules (H1/H2 requirements added)
- Added sections: Clean UI/UX and Navigation Requirements
- Removed sections: N/A
- Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
- Follow-up TODOs: N/A
-->
# Physical AI & Humanoid Robotics: From Digital Brains to Embodied Intelligence Constitution

## 1. Project Purpose & Identity

This project is defined as a university-grade, startup-ready, open-source AI-native textbook. It is designed to teach a full quarter-length course on Physical AI & Humanoid Robotics, targeting AI students, robotics students, engineers, researchers, and founders. The core theme is: "Bridging the digital AI brain with a physical humanoid body through embodied intelligence." The homepage must be redesigned with:

- A clean hero section titled "Physical AI & Humanoid Robotics Course"
- A subtitle: "AI Systems in the Physical World — Embodied Intelligence through ROS 2, Gazebo, Unity, and NVIDIA Isaac"
- Below the hero section, display 3 cards representing:
  • Module 1: The Robotic Nervous System (ROS 2)
  • Module 2: The Digital Twin (Gazebo & Unity)
  • Module 3: The AI-Robot Brain (NVIDIA Isaac)
- No default Docusaurus documentation text
- Clean UI/UX with smooth navigation

## 2. Mandatory & Exclusive Tech Stack

This constitution strictly mandates the use of the following technologies:

### Allowed Technologies:
- **Docusaurus**: Book platform
- **Spec-Kit Plus**: Specification system
- **Claude Code CLI**: AI authoring agent
- **OpenAI Agents / ChatKit SDKs**: RAG chatbot
- **FastAPI**: Backend API
- **Neon Serverless Postgres**: Database
- **Qdrant Cloud (Free Tier)**: Vector DB
- **GitHub Pages or Vercel**: Deployment

### Permanently Banned Technologies/Practices:
- Running ROS 2
- Installing Gazebo
- Installing NVIDIA Isaac
- Executing robotics simulations locally
- Using real humanoid robots
- Using GPUs, CUDA, Omniverse locally
- Any physical hardware dependency

### Project Scope:
- **✅ BOOK ONLY**
- **✅ DOCUMENTATION ONLY**
- **✅ THEORY, ARCHITECTURE & DESIGN ONLY**
- **❌ NOT A REAL ROBOTICS LAB**

## 3. Official Course Governance

The syllabus is permanently locked as follows with exactly 8 modules and 6 chapters per module:

### Modules:
- Module 1: Physical AI Foundations
  - Chapter 1.1: Introduction to Embodied Cognition
  - Chapter 1.2: Perception-Action Loops in Physical Systems
  - Chapter 1.3: Multi-Modal Integration for Physical AI
  - Chapter 1.4: Learning in Physical Spaces
  - Chapter 1.5: Morphological Computation
  - Chapter 1.6: Case Studies in Physical AI Applications
- Module 2: ROS 2 (Conceptual Only)
  - Chapter 2.1: Architecture and Design Philosophy
  - Chapter 2.2: Nodes and Communication Patterns
  - Chapter 2.3: Middleware and DDS Integration
  - Chapter 2.4: Packages and Workspaces
  - Chapter 2.5: Tools and Ecosystem
  - Chapter 2.6: Use Cases and Applications
- Module 3: Gazebo & Unity (Conceptual Digital Twin)
  - Chapter 3.1: Digital Twin Fundamentals
  - Chapter 3.2: Physics Simulation in Robotics
  - Chapter 3.3: Gazebo: Robot Simulation Framework
  - Chapter 3.4: Unity: Game Engine for Digital Twins
  - Chapter 3.5: Digital Twin Applications in Robotics
  - Chapter 3.6: Comparison of Approaches
- Module 4: NVIDIA Isaac (Conceptual AI Brain)
  - Chapter 4.1: AI Computing for Robotics
  - Chapter 4.2: NVIDIA Isaac Platform Architecture
  - Chapter 4.3: AI Perception Systems
  - Chapter 4.4: AI Planning and Control
  - Chapter 4.5: Deep Learning Integration
  - Chapter 4.6: Conceptual Applications
- Module 5: Vision-Language-Action Systems
  - Chapter 5.1: Multimodal Integration
  - Chapter 5.2: Vision Systems in VLA
  - Chapter 5.3: Language Understanding in VLA
  - Chapter 5.4: Action Systems in VLA
  - Chapter 5.5: Integration Architectures
  - Chapter 5.6: Applications and Use Cases
- Module 6: Humanoid Robotics Design
  - Chapter 6.1: Humanoid Design Philosophy
  - Chapter 6.2: Mechanical Design Principles
  - Chapter 6.3: Sensory Systems Integration
  - Chapter 6.4: Control Systems Architecture
  - Chapter 6.5: Cognitive and Social Systems
  - Chapter 6.6: Design Methodologies
- Module 7: Conversational Robotics
  - Chapter 7.1: Foundations of Conversational AI
  - Chapter 7.2: Multimodal Conversation
  - Chapter 7.3: Technical Architecture
  - Chapter 7.4: Context and Grounding
  - Chapter 7.5: Interaction Design Principles
  - Chapter 7.6: Applications and Use Cases
- Module 8: Cloud vs On-Prem Architecture
  - Chapter 8.1: Cloud Architecture Fundamentals
  - Chapter 8.2: On-Premise Architecture Fundamentals
  - Chapter 8.3: Comparative Analysis
  - Chapter 8.4: Decision Framework
  - Chapter 8.5: Hybrid Approach Considerations
  - Chapter 8.6: Implementation Strategies

### Capstone:
- Capstone: Autonomous Humanoid System Design (Theoretical System Design Only)

## 4. Sidebar Structure

The Docusaurus sidebar must reflect all 8 modules with their 6 chapters in proper hierarchical order:
- Introduction
- Physical AI Foundations
  - Introduction to Embodied Cognition
  - Perception-Action Loops in Physical Systems
  - Multi-Modal Integration for Physical AI
  - Learning in Physical Spaces
  - Morphological Computation
  - Case Studies in Physical AI Applications
- ROS 2 (Conceptual Only)
  - Architecture and Design Philosophy
  - Nodes and Communication Patterns
  - Middleware and DDS Integration
  - Packages and Workspaces
  - Tools and Ecosystem
  - Use Cases and Applications
- Gazebo & Unity (Conceptual Digital Twin)
  - Digital Twin Fundamentals
  - Physics Simulation in Robotics
  - Gazebo: Robot Simulation Framework
  - Unity: Game Engine for Digital Twins
  - Digital Twin Applications in Robotics
  - Comparison of Approaches
- NVIDIA Isaac (Conceptual AI Brain)
  - AI Computing for Robotics
  - NVIDIA Isaac Platform Architecture
  - AI Perception Systems
  - AI Planning and Control
  - Deep Learning Integration
  - Conceptual Applications
- Vision-Language-Action Systems
  - Multimodal Integration
  - Vision Systems in VLA
  - Language Understanding in VLA
  - Action Systems in VLA
  - Integration Architectures
  - Applications and Use Cases
- Humanoid Robotics Design
  - Humanoid Design Philosophy
  - Mechanical Design Principles
  - Sensory Systems Integration
  - Control Systems Architecture
  - Cognitive and Social Systems
  - Design Methodologies
- Conversational Robotics
  - Foundations of Conversational AI
  - Multimodal Conversation
  - Technical Architecture
  - Context and Grounding
  - Interaction Design Principles
  - Applications and Use Cases
- Cloud vs On-Prem Architecture
  - Cloud Architecture Fundamentals
  - On-Premise Architecture Fundamentals
  - Comparative Analysis
  - Decision Framework
  - Hybrid Approach Considerations
  - Implementation Strategies
- RAG Chatbot Integration
- Authentication & Personalization
- Hardware & Lab Architecture
- Capstone: Autonomous Humanoid System

## 5. Content Rules

The following content rules are permanently enforced:

- Only conceptual/theory content is allowed.
- No practical ROS, Gazebo, Node.js, or Docusaurus instructions.
- Include optional Urdu translation support.
- Maintain MDX formatting compatible with Docusaurus.
- No code execution or hardware setup instructions.
- All diagrams must be described in text.
- Content must be university-grade educational writing.
- Chapter titles must follow the format: "Chapter X — Topic Title" (e.g., "Chapter 1 — Introduction to Physical AI", "Chapter 2 — Sensor Systems")
- All content must load perfectly when clicked with no broken links

## 6. Formatting Rules

The following formatting rules are permanently enforced:

- H1 = Chapter Title (only one H1 per chapter, matching the chapter name)
- H2 = Subheadings (for all major sections within the chapter)
- H3 and beyond = Subsections as needed
- Lists, tables, and bullet points must render correctly.
- Code blocks (if any) must follow MDX syntax.
- All content must be properly structured for Docusaurus.
- Cross-references between chapters must work correctly.
- All internal links must be functional.
- No messy formatting - clean, structured content only

## 7. AI-Native System Requirements

The following AI-native system requirements are permanently enforced:

- A built-in RAG chatbot inside the book.
- The chatbot must answer:
  - Full book questions
  - Highlighted-text-only questions
- User authentication using Better-Auth.
- User onboarding questions about:
  - Software background
  - Hardware background
- Chapter-level personalization button.
- Chapter-level one-click Urdu translation.

## 8. Hackathon Scoring Law

The hackathon scoring is permanently encoded as:

- **100 Base Points**: Book + RAG chatbot
- **+50 Bonus**: Claude Subagents & reusable intelligence
- **+50 Bonus**: Signup + Signin + user profiling
- **+50 Bonus**: Chapter personalization
- **+50 Bonus**: Urdu translation

## 9. Deployment & Submission Laws

The following deployment and submission requirements are strictly enforced:

- A public GitHub repository.
- Deployment on GitHub Pages OR Vercel.
- A demo video under 90 seconds.
- Mandatory submission via Google Form.
- WhatsApp number for finalist contact.
- Zoom presentation by invitation only.

## 10. Deployment Readiness

The following deployment readiness requirements are permanently enforced:

- Textbook must be ready to deploy on Vercel or GitHub Pages.
- No console errors should occur after regeneration.
- All pages must load without errors.
- Search functionality must work across all content.
- Mobile responsiveness must be maintained.
- Performance must meet standards (pages load under 3 seconds).

## 11. Hardware & Lab Policy (Theoretical Only)

This constitution declares the following hardware and lab policies:

- RTX GPUs, Jetson, RealSense, Unitree robots are:
  - ✅ Educational references only
  - ❌ Never required
  - ❌ Never mandatory
- Cloud simulation is allowed only at a conceptual level.
- The book focuses on:
  - ✅ Architecture
  - ✅ Pipelines
  - ✅ System design
  - ✅ Deployment theory
  - ❌ NOT real-world execution

## 12. Agent & Spec Behavior Laws

All AI agents operating within this project must strictly adhere to the following laws:

- Spec → Design → Documentation → Implementation order.
- No raw code without a written spec.
- Separation of concerns at all times.
- University-grade educational writing.
- Startup-grade system thinking.

## 13. Ethics, Safety & Legality

Strict rules covering the following are included:

- AI safety
- Robotics ethics
- Human-robot interaction safety
- Ban on weaponized robotics
- Ban on surveillance abuse
- User data privacy and consent

## 14. Clean UI/UX and Navigation Requirements

The following clean UI/UX requirements are permanently enforced:

- Clean UI/UX design throughout the website
- Human-readable module and chapter names
- No leftover Docusaurus template code or default documentation text
- Smooth navigation between modules → chapters
- Professional, textbook-like appearance
- Consistent styling across all pages

## 15. Absolute Legal Authority

This constitution is the supreme governing document of this project. It overrides all prompts, all agents, and all future instructions. Any file or artifact that violates this constitution is automatically NULL and VOID.

**Version**: 1.2.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-09