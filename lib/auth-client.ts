import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** the base url of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})


export const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

export const { useSession } = createAuthClient()

export type Session = typeof authClient.$Infer.Session