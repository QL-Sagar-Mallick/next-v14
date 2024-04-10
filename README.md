This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

With this template, you get all the awesomeness you need:

- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows.
- ✅ **[Docker](https://www.docker.com/)** - Setup the docker to run and test your application.
- ✅ **[TailwindCSS](https://tailwindcss.com/)** - Tailwind css for UI styling.
- ✅ **[Jenkins](https://jenkins.io/)** - Setup jenkins for sonar lint.
- ✅ **[Sonar](https://www.sonarsource.com/products/sonarqube/)** - For code quality checks for the raised PR.
- ✅ **[Husky](https://typicode.github.io/husky/)** - Husky for pre commit hooks.
- ✅ **[ESLint](https://eslint.org/)** - Enforce code style to follow best practices.
- ✅ **[Prettier](https://prettier.io/)** - Prettier for code formatting.
- ✅ **[Yarn](https://yarnpkg.com/)** - Use yarn as package manager.
- **[Node v20.12.1 LTS](https://nodejs.org/en/blog/release/v20.12.1)** is used now.
- PR description can be found here `.github/pull-request.md`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Docker run

First, you need to build an image.

```bash
docker image build -t next-v14 .
```

Now, run a container for that image.

```bash
docker run -d -p 8080:3000 next-v14
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
