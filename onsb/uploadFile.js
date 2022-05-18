//import { create } from 'ipfs-http-client'

//const client = create('https://ipfs.infura.io:5001/api/v0')


let formData = new FormData();

function onFileUpload(){
    let fileInput = document.getElementById("files");
    const selectedFile = [...fileInput.files];
    console.log(selectedFile);
    for(let i = 0; i < selectedFile.length; i++){
        addList(selectedFile[i].name);
    }
    
}

function addList(text){
    const li = document.createElement("dt");
    li.setAttribute('id', text);

    const textNode = document.createTextNode(text);
    const btn = document.createElement('button');
    const btntext = document.createTextNode('open');
    btn.appendChild(btntext);
    li.appendChild(textNode);
    li.appendChild(btn);

    document.getElementById('file-lists').appendChild(li);

}