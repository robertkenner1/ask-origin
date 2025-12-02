This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a `.env.local` file in the root directory with your Claude API key:

```bash
# .env.local
CLAUDE_API_KEY=your-claude-api-key-here
# For backward compatibility, you can also use:
# NEXT_PUBLIC_CLAUDE_API_KEY=your-claude-api-key-here
```

> **Important Security Note**: The Claude API key is now only used server-side for security. While
> both `CLAUDE_API_KEY` and `NEXT_PUBLIC_CLAUDE_API_KEY` will work, we recommend using
> `CLAUDE_API_KEY` to ensure the key is only accessible server-side.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the
file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Architecture Notes

- All Claude API calls are made server-side through our secure API endpoint (`/api/prediction`)
- The API key is stored as a server-side environment variable (`CLAUDE_API_KEY`) for security
- Client components use our prediction service to request completions without direct API access

## Troubleshooting

If you see "API configuration error", make sure:

1. You have added your Claude API key to `.env.local`
2. You've restarted the development server after making changes to environment variables
3. The API key is valid and has not expired

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback
and contributions are welcome!

