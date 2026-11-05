# AGENTS.md

Rules for all agents and contributors working on this project.

## Code and content language

- All code and comments are written in English.
- All content shown on the website (pages, menu items, headings, alt texts) is written in Italian.
- Commit messages are written in English.

## Writing style

- No emdashes. Use commas, periods, or colons instead.
- No emojis anywhere in code, comments, or content.
- No lines that only contain ">" or "/>". Empty JSX closing lines must be avoided.
- Do not use Prettier or any other unnecessary tooling. Keep the toolchain minimal.
- Custom CSS only. No CSS frameworks.

## Git rules

- Never commit without asking for permission first. Always wait for explicit approval before running git commit.
- Commit messages are minimal and only contain the important information.
- Commit messages are short and to the point, around 12 words on average.
- Good examples: "added crud", "removed tailwindcss".
- Bad examples: long sentences, conventional commit prefixes with extra decoration, emoji in commits.

## Project structure rules

- The phases of this project are called sessions. Use the word session instead of phase, step, or sprint in all project documents and discussions.
- Follow the roadmap in ROADMAP.md and complete sessions in order.
- Tech stack: React, Express, MySQL (MySQL Workbench), Prisma for migrations, custom CSS, optimized SEO.
- Some menu content only exists as photos. When menu data is needed, transcribe the photos into structured data rather than linking the images as the only source of truth.
- Deployment happens in two steps: temporary demo on GitHub Pages for client review, then production deploy elsewhere based on client preference.
