import { account } from "./appwrite";
import type { OAuthProvider } from "appwrite";

const SUCCESS_REDIRECT = "/dashboard";
const FAILURE_REDIRECT = "/login";

export const loginWithGoogle = () => {
  account.createOAuth2Session(
    "google" as OAuthProvider,
    SUCCESS_REDIRECT,
    FAILURE_REDIRECT
  );
};

export const loginWithGitHub = () => {
  account.createOAuth2Session(
    "github" as OAuthProvider,
    SUCCESS_REDIRECT,
    FAILURE_REDIRECT
  );
};

export const logout = () => {
  return account.deleteSession("current");
};
