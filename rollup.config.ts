import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'rollup'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import terser from '@rollup/plugin-terser'
import resolvePlugin from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import cjs2es from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      plugins: [
        getBabelOutputPlugin({
          filename: 'dist/index.js',
          configFile: resolve(__dirname, 'babel.config.js'),
        }),
      ],
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  external: ['@mysten/sui.js'],
  plugins: [
    typescript({ target: 'es5' }),
    nodePolyfills(),
    resolvePlugin({
      browser: true, // specify that it's built for browser
    }),
    cjs2es(),
  ],
})

if (process.env.NODE_ENV === 'production' && Array.isArray(config.plugins)) {
  config.plugins.push(terser())
}

export default config
