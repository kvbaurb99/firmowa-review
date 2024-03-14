module.exports = {	
  apps: [	
    {	
      name: 'LP-Firmowa',	
      exec_mode: 'cluster',	
      instances: 3,	
      script: 'node_modules/next/dist/bin/next',	
      args: 'start',	
      autorestart: true,	
      watch: false,	
      max_memory_restart: '2G',	
      env_local: {	
        APP_ENV: 'local' // APP_ENV=local	
      },	
      env_development: {	
        APP_ENV: 'dev' // APP_ENV=dev	
      },	
      env_production: {	
        APP_ENV: 'prod',	
        NODE_PORT: '3007',	
        PORT: '3007',	
      }	
    }	
  ]	
}
