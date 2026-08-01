import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.thetadynamics.pmo',
  appName: 'Theta-AI',
  webDir: 'dist',

  server: {
    url: 'https://app.pmo.thetadynamics.io',
    cleartext: false
  }
};

export default config;