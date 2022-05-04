pragma solidity >=0.4.22 <0.9.0;

contract UserManager {
  
  struct User{
      string passsword;
      bool isUser;
      uint256 lastLogin;
  }

  mapping(string => User) internal user;
  function register(
      string memory _id,
      string memory _password
  ) public returns (bool) {
      if(user[_id].isUser == false){
      user[_id].passsword = _password;
      user[_id].isUser = true; 
      return true; // 성공
      }
      return false; //실패 
  }

  function loginUser(string memory _id, string memory _password, uint _lastDate) public returns (bool) {
       if(keccak256(abi.encodePacked(user[_id].passsword)) == keccak256(abi.encodePacked(_password))){
           user[_id].lastLogin = _lastDate;
            return true; 
       }
       else{
           return false;
       }
  }

  function deleteUser(string memory _id) public returns (bool) {
      if(user[_id].isUser == true){
        user[_id].isUser = false;
        return true;
      }
      return false;

  }
  
  // user check
  function checkUser(string memory _id) public view returns (bool){
      return user[_id].isUser;
  }

}
