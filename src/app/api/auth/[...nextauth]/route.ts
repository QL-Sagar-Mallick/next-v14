import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'

export interface IAuthResponse {
  accessToken: string | undefined
  id: string | undefined
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function auth(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await NextAuth(req, res, {
    providers: [
      // For more info: https://next-auth.js.org/providers/azure-ad
      AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID as string,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
        tenantId: process.env.AZURE_AD_TENANT_ID as string,
      }),
      // For more info: https://next-auth.js.org/providers/github
      // GitHubProvider({
      //   clientId: process.env.GITHUB_ID,
      //   clientSecret: process.env.GITHUB_SECRET
      // }),
      // For more info: https://next-auth.js.org/providers/google
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
      // }),
    ],
    // For more info: https://next-auth.js.org/configuration/options#pages
    pages: {
      signIn: '/login',
      signOut: '/login',
      error: '/login', // Error code passed in query string as ?error=
    },
    // For more info: https://next-auth.js.org/configuration/callbacks
    callbacks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async jwt({ account, profile, token }): Promise<any> {
        const res: IAuthResponse = {
          accessToken: undefined,
          id: undefined,
        }

        if (account) {
          res.accessToken = account.access_token
          // @ts-expect-error Property `id` does not exists in profile.
          res.id = profile?.id ?? ''
        }

        return { ...res, ...token }
      },
    },
  })
}
