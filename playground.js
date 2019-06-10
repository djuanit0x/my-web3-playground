const Web3 = require('web3');
const {getContractInstance, getContractBalance} = require('./utils');
const {sampleContractABI} = require('./fixtures/ABI');

// Connect Web3 to Infura
const provider = new Web3.providers.HttpProvider(process.env.INFURA_ROPSTEN_URL);
const web3 = new Web3(provider);

// Contract Instance Creation
const contractInstance = getContractInstance(web3, '0xf49d8ce58ce6b63c60b04292053bf5eb8a66f6d8', contractABI);

// Playground
(async () => {
    const oraclizePrice = await contractInstance.methods.getPriceURL().call();
    const contractBalance = await getContractBalance(web3, "0xf49d8ce58ce6b63c60b04292053bf5eb8a66f6d8");
})()
