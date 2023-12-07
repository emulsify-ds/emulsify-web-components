import { defineConfig } from 'vite';

const input = process.argv[4];

if (!input) {
  throw new Error('Missing input file.');
}

export default defineConfig({
  publicDir: 'src/assets',
  build: {
    emptyOutDir: false,
    lib: {
      entry: input,
      fileName: (_, entryName) => `${entryName}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
