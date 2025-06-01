import { account } from "./appwrite";
import type { OAuthProvider } from "appwrite";

const baseURL = window.location.origin; 
const SUCCESS_REDIRECT = `${baseURL}/dashboard`;
const FAILURE_REDIRECT = `${baseURL}/login`;

export const loginWithGoogle = () => {
  account.createOAuth2Session("google" as OAuthProvider, SUCCESS_REDIRECT, FAILURE_REDIRECT);
};

export const loginWithGitHub = () => {
  account.createOAuth2Session("github" as OAuthProvider, SUCCESS_REDIRECT, FAILURE_REDIRECT);
};

export const logout = () => {
  return account.deleteSession("current");
};
