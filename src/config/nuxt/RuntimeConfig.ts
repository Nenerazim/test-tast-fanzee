export const runtimeConfig = {
  public: {
    frontUrl: process.env.PUBLIC_FRONTEND_URL || 'Надо указать в .env PUBLIC_FRONTEND_URL',
    backUrl: process.env.PUBLIC_BACKEND_API_URL || 'Надо указать в .env PUBLIC_BACKEND_API_URL',
  }
};
