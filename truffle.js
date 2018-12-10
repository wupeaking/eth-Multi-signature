/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    priv: {
      host: "127.0.0.1",
      port: 8542,
      network_id: "*", // Match any network id
      gas: 0x2fefd8
    },
    test : {
      host: "172.16.129.108",
      port: 8544,
      gas: 0x2fefd8,
      network_id: "*" // Match any network id
    }
  }
};
