module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@modules": "./dist/modules",
          "@shared": "./dist/shared",
          "@supports": "./dist/supports",
        }
      }
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  ]
}

/*
 "@shared/*": ["shared/*"],
      "@modules/*": ["modules/*"],
      "@supports/*": ["supports/*"],
*/
