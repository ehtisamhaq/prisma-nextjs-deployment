# prisma-nextjs-deployment

## Prerequisites

- Latest Node.js LTS
- Vercel CLI installed (`npm i -g vercel`)

## Setup

1. Clone this repo
2. Navigate to the project directory

### Backend Terminal

```bash
# Copy .env.example to .env and configure your environment variables
cp backend/.env.example backend/.env

# Setup your env properly (edit backend/.env with your credentials)

# Install dependencies
cd backend
npm install

# Build the project
npm run build

# Run locally
npm run dev

# Deploy to production
vercel --prod
```

### Frontend Terminal

```bash
# Copy .env.example to .env and configure your environment variables
cp frontend/.env.example frontend/.env

# Setup your env properly (edit frontend/.env with your credentials)

# Install dependencies
cd frontend
npm install

# Build the project
npm run build

# Run locally
npm run dev

# Deploy to production
vercel --prod
```
