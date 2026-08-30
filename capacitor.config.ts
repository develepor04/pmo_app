import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.thetadynamics.pmo',
  appName: 'Theta-AI',
  webDir: 'dist',

  server: {
    url: 'https://app.pmo.thetadynamics.io',
    cleartext: false,
    allowNavigation: [
      'https://app.pmo.thetadynamics.io',
      'https://pmo-backend.thetadynamics.io',
    ],
  }
};

export default config;