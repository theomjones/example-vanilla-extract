import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import {resolve} from 'path';
import {defineConfig} from 'vite';

import dts from 'vite-plugin-dts';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: './tsconfig.lib.json'
        }),
        vanillaExtractPlugin({
            identifiers: 'short'
        }),
    ],
    resolve: {
        alias: {
            '@lib': resolve(__dirname, 'lib')
        }
    },
    build: {
        copyPublicDir: false,
        target: 'esnext',
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            formats: ['es'],
            name: 'my-lib',
            fileName: 'index'
        },
        rollupOptions: {
            input: './lib/index.ts',
            external: ['react', 'react/jsx-runtime'],
            // output: {
            //   entryFileNames: '[name].js',
            //   chunkFileNames: '[name].js',
            //   assetFileNames: '[name].[
        },
    }
})
