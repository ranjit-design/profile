Candidate Profile Form (Next.js + Tailwind CSS)

A simple 2-step candidate profile form built using Next.js and Tailwind CSS.
Users can enter basic information, add skills with levels, and view a clean preview card.

Features

Step 1: Basic Information (Name, Email, Phone, City)

Step 2: Skills Section

Add skill name

Select skill level (Beginner / Intermediate / Advanced)

Add & delete skills

Live preview card after form submission

Clean UI using Tailwind CSS

Technologies Used

Next.js

Next.js

Tailwind CSS

Folder Structure
/components
   ├── BasicInfo.jsx
   ├── SkillsSection.jsx
   ├── ProfilePreview.jsx

/app (or /pages)
/styles

Installation
git clone <your-repo-link>
cd <project-folder>
npm install
npm run dev

Tailwind Setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Add to globals.css:

@tailwind base;
@tailwind components;
@tailwind utilities;