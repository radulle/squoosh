import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

const config = {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
  },
  plugins: [
    typescript({
      exclude: ['node_modules'],
      declaration: true,
      outDir: 'lib',
    }),
    nodeResolve(),
    importMetaAssets(),
  ],
};

export default config;
