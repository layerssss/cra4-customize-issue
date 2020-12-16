const {
    override,
    disableEsLint,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // disable eslint in webpack
    disableEsLint(),
)
