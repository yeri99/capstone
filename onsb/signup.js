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
        var web3 = new Web3(new Web3.providers.HttpProvider("http://000.000.000.000:0000"));
         // 연결 계좌 확인
         var bal = await web3.eth.getBalance("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E");
         console.log(bal);
         //web3.eth.defaultAccount = web3.eth.accounts[0];
      // 계정 unlock
         web3.eth.personal.unlockAccount("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E", "gkdid112")
         .then(console.log('Account unlocked!'));
      // contract 연결
         var contract = new web3.eth.Contract(ABI,"0x275159C9C60A538667140Ef31CC19AAeB3809345");
         console.log(contract);
         //var result = await contract.methods.checkUser(id).call({from:'00x552d12E774691CE7cA7aac165d40aaC6f60aca6E'});
      // 회원 가입
         var result = await contract.methods.register(id,psd).send({from:'0x552d12E774691CE7cA7aac165d40aaC6f60aca6E'})
         .then(function(receipt){});
         console.log(result);
    }catch(error){
        return error;
    }
}

signup()
