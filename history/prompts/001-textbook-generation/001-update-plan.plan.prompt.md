---
id: 001
title: "Update plan for textbook structure"
stage: plan
date_iso: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-textbook-generation
branch: 001-textbook-generation
user: ramzan
command: "/sp.plan"
labels:
  - plan
  - textbook
  - structure
  - update
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - ".specify/specs/001-textbook-generation/plan.md"
  - "history/prompts/001-textbook-generation/001-update-plan.plan.prompt.md"
tests_yaml: []
---

# Update plan for textbook structure

## User Prompt

```

Update the plan.md  file located at : home/ramzan/projects/final-hackathon/ai-book/.specify/specs/001-textbook-generation
 to reflect the new homepage + module/chapter structure. Keep original SDD plan but append:

1. Phase 1: Homepage Redesign
   - Remove default Docusaurus text.
   - Implement hero section.
   - Create 3 module introduction cards.

2. Phase 2: Sidebar Architecture
   - Create folder structure for 8 modules.
   - Create placeholders for 6 chapters per module.

3. Phase 3: Content Generation
   - Populate chapters with structured content using the course details.
   - Polish formatting for clarity and consistency.

4. Phase 4: Navigation Testing
   - Ensure module → chapter navigation works.
   - Fix any broken routes.

5. Phase 5: UI Cleanup
   - Remove all default template artifacts.
   - Ensure the website feels like a professional robotics textbook.

6. Phase 6: Final Implementation
   - Generate updated files.
   - Confirm build runs on localhost with no errors.
```

## Assistant Response

Updated the plan.md file to incorporate all the new homepage and module/chapter structure requirements while preserving the original SDD plan:

1. Added new Implementation Phases section with 6 detailed phases:
   - Phase 1: Homepage Redesign - implementing hero section with title/subtitle and 3 module cards
   - Phase 2: Sidebar Architecture - creating folder structure for 8 new modules with 6 chapters each
   - Phase 3: Content Generation - populating chapters with structured content
   - Phase 4: Navigation Testing - ensuring module → chapter navigation works
   - Phase 5: UI Cleanup - removing template artifacts and ensuring professional appearance
   - Phase 6: Final Implementation - generating files and confirming build works

2. Updated the Sidebar Structure & Navigation section to reflect the new 8-module structure:
   - Module 1: Robotic Nervous System (ROS 2)
   - Module 2: Digital Twin (Gazebo & Unity)
   - Module 3: AI-Robot Brain (NVIDIA Isaac)
   - Module 4: Vision-Language-Action (VLA)
   - Module 5: Humanoid Mechanics
   - Module 6: Perception & SLAM
   - Module 7: Conversational Robotics
   - Module 8: Capstone: Autonomous Humanoid

3. Updated the Scope of Work section to match the new module names and structure

4. Updated the Key Milestones & Timeline section to reference the new Module 1 name

5. Updated the Research Requirements section to include the new technical domains

6. Updated the version to 1.2.0 and last amended date to 2025-12-09

The plan now fully reflects the new homepage and module/chapter structure while maintaining all original SDD planning elements.