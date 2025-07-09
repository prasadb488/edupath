# EduPath

EduPath is a modern educational workflow app built with React, TypeScript, and Vite. It uses [TailwindCSS](https://tailwindcss.com/) for utility-first styling, enhanced with [DaisyUI](https://daisyui.com/) components, and leverages [React Router](https://reactrouter.com/) for client-side routing. Authentication and backend services are powered by [Firebase](https://firebase.google.com/).

## Features

Fast development with Vite and Bun
Styled with TailwindCSS and DaisyUI
Firebase authentication and backend
Routing with React Router

## Getting Started

### 1. Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Git](https://git-scm.com/)

### 2. Setup the Project

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd edupath
bun install
```

## Firebase Configuration

1. Obtain your Firebase environment details (API key, project ID, etc.) from the [Firebase Console](https://console.firebase.google.com/).
2. Create a `.env.local` file in the project root and add your Firebase config variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
# Add other required Firebase variables
```

## Running the Project

Start the development server:

```sh
bun run dev
```

The app will be available at `http://localhost:5173` by default.
