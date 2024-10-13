# PDFMaster Pro

PDFMaster Pro is a powerful PDF management application built with Next.js, React, and Firebase. It helps users organize, annotate, and collaborate on PDF documents efficiently.

## Features

- User authentication (sign up, login, logout)
- Upload, view, and delete PDF documents
- Organize PDFs into folders or categories
- Annotate PDFs with comments and highlights
- Share PDFs with team members for collaboration
- Full-text search across PDF contents
- Real-time updates using Firebase Realtime Database
- Responsive design for mobile and desktop

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service (BaaS) for authentication, database, and storage
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Zustand](https://github.com/pmndrs/zustand) - State management library
- [React Query](https://react-query.tanstack.com/) - Data fetching and caching library
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF viewer and annotation library

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/pdfmaster-pro.git
cd pdfmaster-pro
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up Firebase:
   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Authentication, Realtime Database, and Storage services
   - Copy your Firebase configuration

4. Create a `.env.local` file in the root directory and add your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

```
pdfmaster-pro/
├── components/
│   ├── auth/
│   ├── layout/
│   ├── pdf/
│   └── ui/
├── lib/
│   ├── firebase.ts
│   └── utils.ts
├── pages/
│   ├── api/
│   ├── _app.tsx
│   ├── index.tsx
│   └── [...other pages]
├── public/
├── styles/
│   └── globals.css
├── types/
├── .env.local
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

1. Build the application:

```bash
npm run build
# or
yarn build
```

2. Deploy to Firebase Hosting:

```bash
firebase deploy
```

Alternatively, you can deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
