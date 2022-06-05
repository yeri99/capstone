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
        
        //base64로 인코딩하여 저장        
        var psdkey = CryptoJS.enc.Utf8.parse(psd);
        var psdbase64 = CryptoJS.enc.Base64.stringify(psdkey);
        
        // 프라이빗 네트워크 연결
        var web3 = new Web3(new Web3.providers.HttpProvider("http://000.000.000.000"));
         // 연결 계좌 확인
         var bal = await web3.eth.getBalance("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E");
         console.log(bal);
         //web3.eth.defaultAccount = web3.eth.accounts[0];
      /// 계정 unlock
         var senderAddress = "0x552d12E774691CE7cA7aac165d40aaC6f60aca6E"
         await web3.eth.personal.unlockAccount(senderAddress, "gkdid112",900000000);
      // contract 연결
         var contract = new web3.eth.Contract(ABI,"0x4CE652d505419F2B89A910fdF7573C1E2c84Ac7b");
         var senderAddress = "0x552d12E774691CE7cA7aac165d40aaC6f60aca6E"
            // 회원 가입
         // user check
            var check = await contract.methods.checkUser(id).call({from:'0x552d12E774691CE7cA7aac165d40aaC6f60aca6E'})
            // not user
            if(!check){
                var send = await contract.methods.register(id,psdbase64).send({from:'0x552d12E774691CE7cA7aac165d40aaC6f60aca6E'})
                    check = await contract.methods.checkUser(id).call({from:'0x552d12E774691CE7cA7aac165d40aaC6f60aca6E'})
                    if(check)
                            location.replace("index.html")
            }
            // already exist
            else{

                 console.log("sign up fail");
            }
    }catch(error){
        return error;
    }
}

signup()
