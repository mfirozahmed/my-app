/**
 ****************************************************************************
 *                               API Typings                                *
 ****************************************************************************
*/

type User = {
  name: string;
  email: string;
  avatar: string;
};

type UserProfile = {
  message: string;
  code: number;
  data: User;
};

type SuccessResponse = {
  success: boolean;
  code: number;
};

/* -------------------------------------------------------------------------- */
/*                                    Auth                                    */
/* -------------------------------------------------------------------------- */

type AuthResponse = {
  access_token: string;
  refresh_token: string;
  token_type: Token;
  user: {
    name: string | null;
    email: string;
  };
};

type RefreshTokenResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};


