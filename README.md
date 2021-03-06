This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installing Tools
To run this project you will first need to install the following in this order:
1. [Windows nvm](https://github.com/coreybutler/nvm-windows) or [Mac/Linux nvm](https://github.com/nvm-sh/nvm)
2. Use nvm to install the latest version defined in the package.json file
   1. Nvm install lts 
   2. Nvm use lts
3. [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) through an installer and not npm
4. Run ```yarn install```

### Running the system
To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Adding or updating a package 

To add a package run:
```bash
yarn add <package Name>
```

## Design Libraries

### Components 
https://feathericons.com/
https://mantine.dev/getting-started/

### Animation Library
https://www.framer.com/docs/introduction/#overview

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
