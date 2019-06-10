exports._getContractBalance = (web3, contractAddress) => {
    return web3.eth.getBalance(contractAddress);
};
