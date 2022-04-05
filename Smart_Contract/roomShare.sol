pragma solidity >=0.4.19 <0.9.0;
pragma experimental ABIEncoderV2;

contract fileShare{

    struct fileList{
        string[] fileName;
        string[] list;
    }

    mapping(string => fileList) internal map;

    function set(string memory _key, string memory _fileName, string memory _fileHash) public{
        fileList storage Info = map[_key];

        Info.fileName.push(_fileName);
        Info.list.push(_fileHash);
    }

    function deleteFile(string memory _key, uint fileIdx) public{
        fileList storage Info = map[_key];

        // 파일 있어야
        require(Info.fileName.length > 0);


        // 마지막 인덱스랑 삭제할 인덱스 자리 바꾸고 pop
        uint LastIndex = Info.fileName.length - 1;
        string memory temp = Info.fileName[LastIndex];
        Info.fileName[LastIndex] = Info.fileName[fileIdx];
        Info.fileName[fileIdx] = temp;

        Info.fileName.pop();

        temp = Info.list[LastIndex];
        Info.list[LastIndex] = Info.list[fileIdx];
        Info.list[fileIdx] = temp;

        Info.list.pop();
    }


    function size (string memory _key)public view returns (uint) {
        return map[_key].fileName.length;
    }

    // 파일 목록 반환
    function getFileInfo(string memory _key)public view returns(fileList memory){
        return  map[_key];
    }
} 
