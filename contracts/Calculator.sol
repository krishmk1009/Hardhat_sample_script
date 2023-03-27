pragma solidity ^0.8.0;

contract calculator{

    int  a;
    int  b;
    int public ans ;

    function setAB(int _value1, int _value2) public {
        a = _value1;
        b = _value2;
    }

    function operation(string memory value) public  {
        if(keccak256(abi.encodePacked(value)) == keccak256(abi.encodePacked('+')) ){
            ans = a+b;
            
        }

        else if(keccak256(abi.encodePacked(value)) == keccak256(abi.encodePacked('-'))){
            ans = a+b;
            
        }
        else if(keccak256(abi.encodePacked(value)) == keccak256(abi.encodePacked('*'))){
            ans = a*b;
            
        }
        else if(keccak256(abi.encodePacked(value)) == keccak256(abi.encodePacked('/'))){
            ans = a/b;
            
        }

    }
    function clearAns() public {
        ans = 0;
    }
}