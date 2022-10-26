// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

library UtilityFunc{
    function append(address a, address b)internal pure returns (string memory){
        return string(abi.encodePacked(a, b));
    }
    function areEqual(string memory a, string memory b)
        internal
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }
}


