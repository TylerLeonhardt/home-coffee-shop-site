import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.js'],
    alias: {
      'https://esm.sh/react@18.3.1': 'react',
      'https://esm.sh/react-dom@18.3.1': 'react-dom',
      'https://esm.sh/htm@3.1.1': 'htm',
    },
  },
});
