exports._getContractInstance = (web3, contractAddress, contractABI) => {
    return new web3.eth.Contract(contractABI, contractAddress);
};
