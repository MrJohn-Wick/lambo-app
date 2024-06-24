/**
 * @type {strings[]}
 */
export const publicRoutes = [
  '/'
];

/**
 * Redirect legged in users to /profile
 * @type {strings[]}
 */
export const authRoutes = [
  '/register',
  '/login',
];

/**
 * Prefix for authentication routes
 * @type {strings}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path for redirect aftre login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile";
