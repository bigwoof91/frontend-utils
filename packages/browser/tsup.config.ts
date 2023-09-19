import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/**/*.ts'],
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  ...options,
}));
