/**
 * ************ This is an experimental dev feature ************
 *
 * Ready to use variables:
 * - web3
 * - {varName} with the contract chosed
 *
 * For More info check:
 * https://web3js.readthedocs.io/en/v1.2.2/web3-eth-contract.html#web3-eth-contract
 *
 * Web3 doc:
 * https://web3js.readthedocs.io/en/v1.2.2/
 *
 * The value returned should be convertible to a JSON string.
 *
 * Feedback is welcome :)
 */

 async function main() {
    /*
      const name = await contract.methods.name().call()
      return name
    */
  
    const bn = await web3.eth.getBlockNumber();
    console.log(bn);
  
    var direccion = (await web3.eth.getAccounts())[0];
  
    const balance = await web3.eth.getBalance(direccion);
    console.log(balance);
  
    const contractAbi = JSON.parse('[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
  
    const contrato = new web3.eth.Contract(contractAbi, "0x324e0c3c4dEFcECDB6Dd3e041d96D323838471b7");
  
    var direccion = (await web3.eth.getAccounts())[0];
  
    //let rspStore = await contrato.methods.store(10).send({from: direccion});
    //console.log(rspStore);
  
    let rspRetrieve = await contrato.methods.retrieve().send({from: direccion});
    console.log(rspRetrieve);
  
  }
  