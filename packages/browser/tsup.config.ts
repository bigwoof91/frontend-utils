import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src'],
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  minify: true,
  clean: true,
  ...options,
}));
