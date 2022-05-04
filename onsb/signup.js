async function signup(){
    try{
        const id = document.getElementById("inputId").value;
        const psd = document.getElementById("inputPsd").value;
        console.log(id,psd);
        const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    }
                ],
                "name": "deleteUser",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_lastDate",
                        "type": "uint256"
                    }
                ],
                "name": "loginUser",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    }
                ],
                "name": "register",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    }
                ],
                "name": "checkUser",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
        // 프라이빗 네트워크 연결
        var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.230.154:8545"));
         // 연결 계좌 확인
         var bal = await web3.eth.getBalance("0x1de4635765c03a76dccf125d60aee010e3ff02c1");
         console.log(bal);
         //web3.eth.defaultAccount = web3.eth.accounts[0];
      // 계정 unlock
         web3.eth.personal.unlockAccount("0x1de4635765c03a76dccf125d60aee010e3ff02c1", "1234")
         .then(console.log('Account unlocked!'));
      // contract 연결
         var contract = new web3.eth.Contract(ABI,"0x0a50Bce67189cFBA6a9eE924F8aDa42A8703298D");
         console.log(contract);
         //var result = await contract.methods.checkUser(id).call({from:'0x1de4635765c03a76dccf125d60aee010e3ff02c1'});
      // 회원 가입
         var result = await contract.methods.register(id,psd).send({from:'0x1de4635765c03a76dccf125d60aee010e3ff02c1'})
         .then(function(receipt){});
         console.log(result);
    }catch(error){
        return error;
    }
}

signup()
