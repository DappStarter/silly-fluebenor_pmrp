require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool curtain stereo proof grace inflict symptom gesture'; 
let testAccounts = [
"0xb357f0d88bc7485a35993512550ab270cf8236e82a7b7d708f87e2da320d91fb",
"0x6bc90fe9d56ec41352e47bbbe5f3112785d40af5fef927978fe5184afdcb598e",
"0x101ddc960bac5c9324ab548af19f7e09d8720db6c2e30fd21db20529bca792fb",
"0x81fd9821757fe08c4a799f15bb3790ff47fd34f31eba55b986959daa672cff4c",
"0x196c0d52cc65d79a9d0435aaf0b09daf82ae136f8c07ba2f3493c64a58c8972f",
"0x162c4008a5dc8d785f0b090c04e16752d6b31dcf51de0220f2a254f97ba68e19",
"0x5bbe19b68f0a6e6593fdcb19035e0a5f69bf09c10a9d7442d3893be20d4b5ded",
"0xc2ba5ddb6a73c787c22d1993074eed48dd1413be22d5392217349f0e22ee1f32",
"0x02f3e7ff37d3fb0185a0fe31785af8b339d21c1266781aa6df7a7f56fb778085",
"0x9837bd3a0c40ca833ec73bb68230d8859955a62b16391440d307256181873b79"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


