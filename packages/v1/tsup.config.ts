import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  ...options,
  entry: ['src/*.ts'],
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  minify: options.watch ? undefined : 'terser',
  clean: true,
}));
