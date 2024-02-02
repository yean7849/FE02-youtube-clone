export const CLIENT_ID =
  "415536895466-d99tmfmgrslqg5gi1nqf2sl50u240bn4.apps.googleusercontent.com";
export const REDIRECT_URI = "http://localhost:3000/";
export const SCOPE =
  "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
export const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
