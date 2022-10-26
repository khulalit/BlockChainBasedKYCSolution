// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

import "./Types.sol";

contract Customer{
    
    address[] internal customerList;
    mapping(address=>Types.Customer) internal customers;

    //events
    event CustomerAdded(address id_, string name, string email);
    event CustomerDataUpdated(address id_, string name, string email);
    event DataHashUpdated(address id_, string customerName, string dataHash);

    function addCustomer(Types.Customer memory customer_) internal {
        customers[customer_.id_] = customer_;
        customerList.push(customer_.id_);
        emit CustomerAdded(customer_.id_, customer_.name, customer_.email);
    }


}