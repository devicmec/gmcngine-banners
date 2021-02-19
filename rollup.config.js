import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import css from "rollup-plugin-import-css";
import image from "@rollup/plugin-image";
import commonjs from "rollup-plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      css(),
      typescript({ module: "CommonJS" }),
      json(),
      resolve({
        customResolveOptions: {
          moduleDirectories: ["node_modules"],
        },
      }),
      commonjs({ extensions: [".js", ".ts"] }),
      image({
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000,
      }),
      del({ targets: ["dist/*"] }),
    ],
    external,
  },
];
