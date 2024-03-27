// migrations/1_initial_migration.js
const Verifia = artifacts.require("Verifia");

module.exports = function (deployer) {
  deployer.deploy(Verifia);
};
