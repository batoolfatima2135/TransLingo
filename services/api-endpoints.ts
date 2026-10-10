export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: "/register",
    LOGIN: "/login",
    GOOGLE: "/api/auth/google",
    ME: "/api/auth/me",
  },

  TRANSLATIONS: {
    CREATE: "/api/translations",
    HISTORY: "/api/translations/history",
  },

  SUBSCRIPTIONS: {
    CHECKOUT: "/api/subscriptions/checkout",
    PORTAL: "/api/subscriptions/portal",
  },
} as const;
