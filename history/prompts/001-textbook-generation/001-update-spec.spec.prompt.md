---
id: 001
title: "Update spec for textbook structure"
stage: spec
date_iso: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-textbook-generation
branch: 001-textbook-generation
user: ramzan
command: "/sp.specify"
labels:
  - spec
  - textbook
  - structure
  - update
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - ".specify/specs/001-textbook-generation/specify.md"
  - "history/prompts/001-textbook-generation/001-update-spec.spec.prompt.md"
tests_yaml: []
---

# Update spec for textbook structure

## User Prompt

```
Update specify.md  file located at : home/ramzan/projects/final-hackathon/ai-book/.specify/specs/001-textbook-generation
 according to the new website structure. Keep all existing specifications, but append the following:

1. Homepage Specification:
   - Create a hero section with title + subtitle as described in the constitution.
   - Add 3 module cards under the hero section.
   - Ensure responsive and modern Docusaurus styling.
   - Completely remove default "Welcome to Docusaurus" text.

2. Sidebar Specification:
   - Create 8 modules:
        Module 1 — Robotic Nervous System (ROS 2)
        Module 2 — Digital Twin (Gazebo & Unity)
        Module 3 — AI-Robot Brain (NVIDIA Isaac)
        Module 4 — Vision-Language-Action (VLA)
        Module 5 — Humanoid Mechanics
        Module 6 — Perception & SLAM
        Module 7 — Conversational Robotics
        Module 8 — Capstone: Autonomous Humanoid

   - Each module contains exactly 6 chapters.
   - Chapters must be generated using the course content I provided.

3. Content Requirements:
   - Each chapter must use headings in correct order.
   - Content must be neat, structured, and clean.
   - No lorem ipsum.
   - Use professional robotics language.

4. Navigation:
   - Clicking a module opens its chapters.
   - Clicking a chapter loads its page perfectly.

5. Output Documents:
   - For each module/chapter, create or update MD files in the correct folder.
   - Pages must not break Docusaurus structure.
```

## Assistant Response

Updated the specification file to incorporate all the new website structure requirements while preserving existing specifications:

1. Updated the homepage specification (FR-001) to include:
   - Hero section with title "Physical AI & Humanoid Robotics Course"
   - Subtitle: "AI Systems in the Physical World — Embodied Intelligence through ROS 2, Gazebo, Unity, and NVIDIA Isaac"
   - 3 module cards for Modules 1-3
   - Requirement to remove default Docusaurus documentation text
   - Responsive and modern Docusaurus styling

2. Updated the module structure (FR-002) to include the new 8 modules:
   - Module 1: Robotic Nervous System (ROS 2)
   - Module 2: Digital Twin (Gazebo & Unity)
   - Module 3: AI-Robot Brain (NVIDIA Isaac)
   - Module 4: Vision-Language-Action (VLA)
   - Module 5: Humanoid Mechanics
   - Module 6: Perception & SLAM
   - Module 7: Conversational Robotics
   - Module 8: Capstone: Autonomous Humanoid

3. Added new functional requirements for:
   - Navigation functionality (FR-021, FR-022)
   - Heading structure (FR-023): H1 for chapter title, H2 for subheadings, H3 for subsections
   - Content quality (FR-024): neat, structured, clean with no lorem ipsum
   - Professional language (FR-025): professional robotics language
   - Output documents (FR-026): proper folder structure without breaking Docusaurus

4. Updated success criteria to include:
   - Detailed homepage requirements (SC-007)
   - Heading structure requirements (SC-010)
   - Content quality requirements (SC-011)
   - Professional language requirements (SC-012)
   - Navigation functionality (SC-013, SC-014)
   - Output document requirements (SC-015)

The specification now fully incorporates all the new website structure requirements while maintaining all existing functionality.