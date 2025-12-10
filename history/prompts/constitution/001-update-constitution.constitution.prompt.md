---
id: 001
title: "Update constitution for Physical AI course"
stage: constitution
date_iso: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-textbook-generation
user: ramzan
command: "/sp.constitution"
labels:
  - constitution
  - physical-ai
  - update
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - ".specify/memory/constitution.md"
  - "history/prompts/constitution/001-update-constitution.constitution.prompt.md"
tests_yaml: []
---

# Update constitution for Physical AI course

## User Prompt

```
Update the constitution.md to include the new project scope and structural changes for the "Physical AI & Humanoid Robotics" course website. update the original constitution, by the following instructions:

1. The homepage must be redesigned.
   - Remove all default Docusaurus documentation text.
   - Add a clean hero section titled "Physical AI & Humanoid Robotics Course."
   - Add a subtitle: "AI Systems in the Physical World — Embodied Intelligence through ROS 2, Gazebo, Unity, and NVIDIA Isaac."
   - Below the hero section, display 3 cards representing:
        • Module 1: The Robotic Nervous System (ROS 2)
        • Module 2: The Digital Twin (Gazebo & Unity)
        • Module 3: The AI-Robot Brain (NVIDIA Isaac)

2. The sidebar structure must be reorganized:
   - There must be **8 modules**.
   - Each module must contain **6 chapters**.
   - Each chapter must have a clean title like:
       "Chapter 1 — Introduction to Physical AI,"
       "Chapter 2 — Sensor Systems," etc.

3. All chapters must follow clean formatting:
   - H1 = Chapter Title
   - H2 = Subheadings
   - No messy formatting
   - All content must load perfectly when clicked.

4. The overall constitution should enforce:
   - Clean UI/UX
   - Human-readable module and chapter names
   - No leftover Docusaurus template code
   - Smooth navigation between modules → chapters
```

## Assistant Response

Updated the constitution.md file to incorporate all the requested changes:

1. Updated the Project Purpose & Identity section to include specific homepage redesign requirements:
   - Added requirements for a clean hero section with the exact title
   - Added the specific subtitle text
   - Added requirements for the 3 cards representing Modules 1-3
   - Added requirements to remove default Docusaurus documentation text

2. Enhanced the Content Rules section to specify the required chapter title format:
   - Added requirement for "Chapter X — Topic Title" format
   - Added requirement that all content must load perfectly when clicked

3. Updated the Formatting Rules section to be specific about heading structure:
   - Added requirement that H1 = Chapter Title
   - Added requirement that H2 = Subheadings
   - Added requirement for no messy formatting

4. Added a new "Clean UI/UX and Navigation Requirements" section that enforces:
   - Clean UI/UX design throughout
   - Human-readable module and chapter names
   - No leftover Docusaurus template code
   - Smooth navigation between modules and chapters
   - Professional appearance

5. Updated the version from 1.1.0 to 1.2.0 and updated the Sync Impact Report to reflect all changes made.

The constitution now fully enforces all the requirements specified in the user's instructions.