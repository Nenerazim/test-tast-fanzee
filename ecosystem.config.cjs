module.exports = {
  apps: [
    {
      name: 'Shop-nuxt',
      instances: 1,
      script: '.output/server/index.mjs',
      port: 3017,
      max_memory_restart: '1000M'
    }
  ]
};
