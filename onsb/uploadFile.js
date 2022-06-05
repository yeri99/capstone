//import { create } from 'ipfs-http-client'

//const client = create('https://ipfs.infura.io:5001/api/v0')


let formData = new FormData();
let ipfsLink="";
const ABI = [
                {
                        "inputs": [
                                {
                                        "internalType": "string",
                                        "name": "_key",
                                        "type": "string"
                                },
                                {
                                        "internalType": "uint256",
                                        "name": "fileIdx",
                                        "type": "uint256"
                                }
                        ],
                        "name": "deleteFile",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                },
                {
                        "inputs": [
                                {
                                        "internalType": "string",
                                        "name": "_key",
                                        "type": "string"
                                },
                                {
                                        "internalType": "string",
                                        "name": "_fileName",
                                        "type": "string"
                                },
                                {
                                        "internalType": "string",
                                        "name": "_fileHash",
                                        "type": "string"
                                }
                        ],
                        "name": "set",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                },
                {
                        "inputs": [
                                {
                                        "internalType": "string",
                                        "name": "_key",
                                        "type": "string"
                                }
                        ],
                        "name": "getFileInfo",
                        "outputs": [
                                {
                                        "components": [
                                                {
                                                        "internalType": "string[]",
                                                        "name": "fileName",
                                                        "type": "string[]"
                                                    },
                                                {
                                                        "internalType": "string[]",
                                                        "name": "list",
                                                        "type": "string[]"
                                                }
                                        ],
                                        "internalType": "struct fileShare.fileList",
                                        "name": "",
                                        "type": "tuple"
                                }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                },
                {
                        "inputs": [
                                {
                                        "internalType": "string",
                                        "name": "_key",
                                        "type": "string"
                                }
                        ],
                        "name": "size",
                        "outputs": [
                                {
                                        "internalType": "uint256",
                                        "name": "",
                                        "type": "uint256"
                                }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                }
        ]


async function uploadToNet(id, name, link){
        var web3 = new Web3(new Web3.providers.HttpProvider("http://000.000.000.000:30000"));
        await web3.eth.personal.unlockAccount("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E", "gkdid112", 900000000);
        var contract = new web3.eth.Contract(ABI, "0xADB4f75b02e171e3300Fb7E3279ed401FE2A6AC1");
        var result = await contract.methods.set(id, name, link).send({from:"0x552d12E774691CE7cA7aac165d40aaC6f60aca6E"});
        var check = await contract.methods.getFileInfo(id).call({from:"0x552d12E774691CE7cA7aac165d40aaC6f60aca6E"});
        console.log(check);
}

async function anyLoadFile(){
         var web3 = new Web3(new Web3.providers.HttpProvider("http://000.000.000.000:30000"));
        await web3.eth.personal.unlockAccount("0x552d12E774691CE7cA7aac165d40aaC6f60aca6E", "gkdid112", 900000000);
        var contract = new web3.eth.Contract(ABI, "0xADB4f75b02e171e3300Fb7E3279ed401FE2A6AC1");
        var check = await contract.methods.getFileInfo(id).call({from:"0x552d12E774691CE7cA7aac165d40aaC6f60aca6E"});
        console.log(check);
        //console.log(check.list[0]);
        for(let i = 0; i< check.fileName.length; i++){
                addList(check.fileName[i],check.list[i]);

        }

}

function addList(text, link){
    const li = document.createElement("dt");
    li.setAttribute('id', text);

    const textNode = document.createTextNode(text);
    const btn = document.createElement('button');
    const btntext = document.createTextNode('open');
        btn.id = "openbtn"+link;
        console.log(btn.id);
        btn.appendChild(btntext);
    li.appendChild(textNode);
    li.appendChild(btn);
$(document).on("click", "#openbtn"+link, function(){
                console.log($(this));
                window.open("https://ipfs.infura.io/ipfs/"+ link);
        });

    document.getElementById('file-lists').appendChild(li);
}
