// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

// import "./Types.sol";
import "./Customer.sol";
import "./Bank.sol";
import "./UtilityFunc.sol";

contract KYC is Customer, Banks{
    
    address admin;
    //mapping(address => Types.User) internal users;
    mapping(string => Types.KycRequest) internal kycRequests;
    mapping(address => address[]) internal bankCustomers; // All customers associated to a Bank
    mapping(address => address[]) internal customerbanks; // All banks associated to a Customer


    constructor() {
        admin = msg.sender;
    }
    modifier isAdmin() {
        require(msg.sender == admin, "Only admin is allowed");
        _;
    }
    function addBank_(Types.Bank memory bank_) public isAdmin {
        addBank(bank_);
    }
    function customerKycExists(address cid)public view returns(bool){
        if(customers[cid].kycVerifiedBy == address(0))
            return true;
        return false;
    }
    function addCustomer_(Types.Customer memory customer_) public {
        require(banks[msg.sender].status == 0, "Not allowed to add customer.Please contact Admin.Reasons for this either not valid bank or deactivated by the Admin.");
        if(customers[customer_.id_].id_ == address(0)){
            addCustomer(customer_);
            // handleKyc(msg.sender,customer_.id_,0);
        }
        bankCustomers[msg.sender].push(customer_.id_);
        customerbanks[customer_.id_].push(msg.sender);
        // kycRequests    
    }
    // Events for KYC
    // event when kyc will be added
    event KycRequestAdded(string reqId, string bankName, string customerName);
    // event when kyc will be rerequested 
    event KycReRequested(string reqId, string bankName, string customerName);
    // event when the status of the kyc will be changed
    event KycStatusChanged(string reqId,address customerId, address bankId, uint status);
    //

    function addKycRequest(Types.KycRequest memory kycr) public {
        if(UtilityFunc.areEqual(kycRequests[kycr.id_].id_,"")){
            kycRequests[kycr.id_] = kycr;
            emit KycRequestAdded(kycr.id_, kycr.bankName, kycr.customerName);
        }
    }
    
    // function isKycRequestExists(address customerid, address bankid) public view returns(bool){
    //     string memory id = UtilityFunc.append(customerid,bankid);
    //     if(!kycRequests[id].isExists)
    //         return false;
    //     return true;
    // }
    function actionOnKycRequest(string memory kyc_id, uint action) public {
        require(action < 2 , "Invalid option.");
        kycRequests[kyc_id].status = action;
        emit KycStatusChanged(kyc_id,kycRequests[kyc_id].bankId_,kycRequests[kyc_id].userId_,action);
    }
    function handleKyc(address bankid, address customerid, uint action)public{
        require(action < 2 ,"NOt a valid action.");
        // string memory id = UtilityFunc.append(bankid,customerid);

        customers[customerid].kycVerifiedBy = bankid; 
    }

}