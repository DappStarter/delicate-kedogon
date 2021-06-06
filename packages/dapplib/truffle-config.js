require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember hole good kite swift tail'; 
let testAccounts = [
"0xe6f3dab84a73bda90eb825d4e138105aa6c1a1807de9e2ae787532a072c483d2",
"0xf416faf1815da8e2d6bfaf2e457b51fe7f56eca4fcadc28a9dabf355703ed253",
"0x1d239577832cba2e15d4b8a68b7f480f1c127e3387680731d7286d184e66142f",
"0x59ed02fae3d7ee5f1aa9d1c6a13889adb57fea958a88b61e3121a7c07d8e9e9f",
"0x801e18a7c8f9249af192e15ebf580441916c2720a930a54510ab3d2b2c4b32d0",
"0x3e0260e345b05ef64cf104ab916a38a0c8a2a65a5b3ac7ed29e90449998b0715",
"0xcaabb9f8bd73a00b66d57db3eb865a5f219ee323f06d3f46d08a75b71e445b25",
"0xce1169eecca37e5e564df99953359033c25e8ccacc1baefb6ed93bb9da84dcd8",
"0x0ff964aaa2111b1ca35d5c5a1fdf4820e3d2688b3def6de51ff74eda2f97aa66",
"0x2722cbf4c8d7c5591f855626d88046d055cc8eed85667c67c7b9c293144e5675"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

