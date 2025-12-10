---
id: 001
title: "Update tasks for textbook structure"
stage: tasks
date_iso: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-textbook-generation
branch: 001-textbook-generation
user: ramzan
command: "/sp.tasks"
labels:
  - tasks
  - textbook
  - structure
  - update
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - ".specify/specs/001-textbook-generation/tasks.md"
  - "history/prompts/001-textbook-generation/001-update-tasks.tasks.prompt.md"
tests_yaml: []
---

# Update tasks for textbook structure

## User Prompt

```

Append the following tasks to task.md  file located at : home/ramzan/projects/final-hackathon/ai-book/.specify/specs/001-textbook-generation:

### Homepage Tasks
- Replace default homepage with custom hero section.
- Add subtitle describing Physical AI & Humanoid Robotics.
- Add 3 module overview cards.
- Ensure homepage is visually attractive and clean.

### Sidebar Tasks
- Create a new folder structure for 8 modules.
- Add 6 chapters inside each module.
- Clean and rename all sidebars.

### Content Tasks
- Generate chapter content using the provided course details.
- Ensure every chapter has:
    • H1 title
    • H2 subsections
    • Clean formatting
- Remove any boilerplate Docusaurus text.

### Navigation Tasks
- Verify module links work.
- Verify all chapter pages load cleanly.
- Fix route issues if needed.

### Finalization Tasks
- Rebuild the website.
- Validate layout, readability, sidebar organization.
```

## Assistant Response

Updated the tasks.md file to append all the requested tasks while preserving the existing structure:

1. Added Phase 9: Homepage Tasks with 4 tasks:
   - T111: Replace default homepage with custom hero section
   - T112: Add subtitle describing Physical AI & Humanoid Robotics
   - T113: Add 3 module overview cards to homepage
   - T114: Ensure homepage is visually attractive and clean

2. Added Phase 10: Sidebar Tasks with 3 tasks:
   - T115: Create a new folder structure for 8 modules
   - T116: Add 6 chapters inside each module
   - T117: Clean and rename all sidebars

3. Added Phase 11: Content Tasks with 5 tasks:
   - T118: Generate chapter content using the provided course details
   - T119: Ensure every chapter has H1 title
   - T120: Ensure every chapter has H2 subsections
   - T121: Ensure every chapter has clean formatting
   - T122: Remove any boilerplate Docusaurus text

4. Added Phase 12: Navigation Tasks with 3 tasks:
   - T123: Verify module links work
   - T124: Verify all chapter pages load cleanly
   - T125: Fix route issues if needed

5. Added Phase 13: Finalization Tasks with 2 tasks:
   - T126: Rebuild the website
   - T127: Validate layout, readability, sidebar organization

6. Updated the Dependencies & Execution Order section to include the new phases and their dependencies
7. Updated the Parallel Opportunities section to reflect the new phases

All tasks follow the required checklist format with proper IDs, labels, and file paths as specified in the task generation rules.