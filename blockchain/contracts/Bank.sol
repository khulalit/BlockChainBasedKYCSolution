// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

import "./Types.sol";

contract Banks{
    
    address[] internal BankList;
    mapping(address=>Types.Bank) banks;

    //events
    event BankAdded(address id_, string name, string email, string ifscCode);
    event BankUpdated(address id_, string name, string email);
    event BankActivated(address id_, string name);
    event BankDeactivated(address id_, string name);

    function addBank(Types.Bank memory bank_) internal {
        banks[bank_.id_] = bank_;
        BankList.push(bank_.id_);
        emit BankAdded(bank_.id_,bank_.name,bank_.email,bank_.ifscCode);
    }
    

}