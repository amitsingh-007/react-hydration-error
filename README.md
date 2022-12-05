# Catch React Hydration Errors in Dev Mode

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Hosted on Vercel

This project is up and running on <https://react-hydration-error.vercel.app/>

> **_NOTE:_**  Since we can only catch React Hydration Errors in Development Mode, its of no use to this application on the hosted website. Its just to showcase the app itself. Please follow the below steps to try this app on your local machine.

## Run this project on local machine

1. First, run the development server:

```bash
npm run dev
# or
yarn dev
```
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.
3. After opening, you will a NextJs error popup stating the React Hydration error like below:
![Error Image](https://user-images.githubusercontent.com/51703039/205663964-eba2e6ea-2dd9-49b0-a454-ce8f1108c9c4.png)
4. Close the error NextJs error popup as we already know its a hydration error and instead open devtools to see our custom React Hydration Error:
![Custom Error](https://user-images.githubusercontent.com/51703039/205664749-84e3e0a1-dd76-4215-903b-e1e3fdfc0c0e.png)

## Learn More

To learn more about how to catch React Hydration Errors, [check out my article on Medium](https://suncommander.medium.com/how-to-catch-and-log-react-hydration-errors-3f507ca83d5f).
