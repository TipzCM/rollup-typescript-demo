import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'


export default {
  input: 'src/index.ts',
  output: [
    {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'MyNamespace'
    }
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
  ],

plugins: [
  resolve(),
  commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
}