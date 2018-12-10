var Token = artifacts.require("./TokenERC20");
var ms = artifacts.require("./MultiSigAcount")

module.exports = function(deployer) {
  deployer.deploy(Token, 1000000000000, "TokenTest", "t", 4).then(function(){
    return deployer.deploy(ms, Token.address);
  })
}