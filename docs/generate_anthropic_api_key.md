# How to Generate an Anthropic API Key

This guide walks you through creating an Anthropic API key for use with Claude-powered applications.

## Overview

To generate an Anthropic API key, you'll need to access the Anthropic Console, navigate to API Keys, create a new key, and securely save it. **Important:** The key is only displayed once during creation.

## Step-by-Step Instructions

### Step 1: Access the Console

1. Go to the Claude Code console via Okta
2. If you don't have Claude Code in Okta - [request it via Opal](https://coda.io/d/Coding-with-AI_dIs9Y03OBBQ/Account-Setup_sufrIu8n#_luIaJl3f).

### Step 2: Navigate to API Keys

1. After logging in, look for the **"API Keys"** section on your dashboard
2. If you don't see it immediately, check under:
   - **"Manage"** menu
   - **"Account Settings"** menu

### Step 3: Create a New Key

1. Click the **"Create Key"** or **"+ Create Key"** button
2. A pop-up dialog will appear
3. Choose "Default" workspace
4. Enter a descriptive name for your API key:
   - Examples: `"Project X"`, `"AI Editor App"`, `"Development Environment"`
5. Click **"Create Key"** to generate the key

### Step 4: Save Your Key Securely

1. The API key will be displayed as a long string of characters
2. **Copy the key immediately** - you will not be able to view it again after closing this window
3. Store it in a secure location:
   - Password manager (recommended)
   - Encrypted notes
   - Secure environment variables file (`.env.local`)

## Using Your API Key

Once you have your key, add it to your project's `.env.local` file:

```bash
# .env.local
CLAUDE_API_KEY=your-api-key-here
```

## Security Best Practices

- ✅ Store API keys in environment variables, never commit them to version control
- ✅ Use a password manager to securely store your keys
- ✅ Create separate keys for different projects or environments
- ✅ Rotate keys periodically for enhanced security
- ❌ Never share your API keys publicly
- ❌ Never commit `.env.local` files to Git (they should be in `.gitignore`)

## Troubleshooting

**I closed the window without copying my key**
- You'll need to create a new key. The old key cannot be retrieved.

**My key isn't working**
- Verify the key was copied correctly (no extra spaces)
- Check that your Anthropic account is active and has billing set up
- Ensure the key has the necessary permissions

## Additional Resources

- [Anthropic API Documentation](https://docs.anthropic.com)
- [Anthropic Console](https://console.anthropic.com)
- [Claude API Pricing](https://www.anthropic.com/pricing)

