// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

interface Token {
  idToken: string;
  accessToken: string;
  provider: string;
}

declare module 'next-auth' {
  interface User {
    name: string | null;
    email: string;
    image: string;
    token: Token | string;
    refreshToken: string;
    tokenType: string;
  }

  interface Session {
    user?: {
      name: string | null;
      email: string;
      token: Token | string;
      image: string;
      userType: string;
      joined_newsletter: boolean;
      provider: string | undefined;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name: string | null;
    email: string;
    image: string;
    userType: string;
    joined_newsletter: boolean;
    token: Token | string;
    refreshToken: string;
    tokenType: string;
    provider: string | undefined;
  }
}
