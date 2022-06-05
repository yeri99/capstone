async function signin(){
    try{
        console.log("sign in is clicked");
        const id = document.getElementById("id").value;
        const psd = document.getElementById("psw").value;
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
        var web3 = new Web3(new Web3.providers.HttpProvider("http://000.000.000.000:30000"));
         // 연결 계좌 확인
         var bal = await web3.eth.getBalance("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E");
         console.log(bal);
      // contract 연결
         var contract = new web3.eth.Contract(ABI,"0x4CE652d505419F2B89A910fdF7573C1E2c84Ac7b");
            // 로그인
         var result = await contract.methods.loginUser(id, psdbase64, 1).call();
           console.log(result);
         if(result){
                localStorage.setItem('id', id);
                localStorage.setItem('psd', psd);
                location.replace("index2.html");
         }else{
                console.log("fail to login");
         }
    }catch(error){
        return error;
    }
}

function moveToId(){
        const id = document.getElementById("openId").value;
        console.log(id)
        // 접근 허용 요청
        //
        localStorage.setItem('id',id);
        location.replace("publicfield.html");

}
signin()
