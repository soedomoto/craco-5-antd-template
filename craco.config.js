const { whenProd } = require("@craco/craco");
const CracoPluginExternalCdn = require("craco-plugin-external-cdn");

module.exports = ({ env }) => ({
  plugins: [
    ...whenProd(() => [
      { plugin: CracoPluginExternalCdn, options: { preText: "Will log the webpack config:" } }
    ], [])
  ]
})
