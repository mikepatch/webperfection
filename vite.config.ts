import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles'),
            '@src': path.resolve(__dirname, './src'),
        },
    },
    plugins: [react(), svgr()],
});
