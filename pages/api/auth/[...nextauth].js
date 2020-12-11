import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
    signingKey: process.env.NEXTAUTH_JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {
        token.auth_time = Math.floor(Date.now() / 1000)
      }
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.customSessionProperty = 'bar'
      return Promise.resolve(session)
    },
  },
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
