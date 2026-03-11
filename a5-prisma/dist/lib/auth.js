import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";
import { oAuthProxy } from "better-auth/plugins";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    baseURL: process.env.FRONTEND_URL,
    trustedOrigins: [process.env.FRONTEND_URL],
    //...other options
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            prompt: "select_account",
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
    // account: { skipStateCookieCheck: true }, // solved redirect issue
    advanced: {
        cookies: {
            session_token: {
                name: "session_token", // Force this exact name
                attributes: {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    partitioned: true,
                },
            },
            state: {
                name: "session_token", // Force this exact name
                attributes: {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    partitioned: true,
                },
            },
        },
    },
    plugins: [oAuthProxy()],
});
//# sourceMappingURL=auth.js.map