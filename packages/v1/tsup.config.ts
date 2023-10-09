import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  ...options,
  entry: ['src/*.ts'],
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  clean: true,
}));
