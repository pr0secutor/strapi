export default () => {
    return async (ctx, next) => {
      // Nothing to do here — this is just a placeholder
      await next();
    };
  };
  
  // Required metadata for Strapi to pick it up
  export const config = {
    watchIgnoreFiles: ['**/*'], // Disables file watching
  };
  