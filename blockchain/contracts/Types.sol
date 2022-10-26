// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

library Types{
    struct Customer {
        string name;
        string email;
        uint256 mobileNumber;
        address id_;
        address kycVerifiedBy; // Address of the bank only if KYC gets verified otherwise empty
        string dataHash; // Documents will be stored in decentralised storage & a hash will be created for the same
        uint256 dataUpdatedOn;
    }
    struct Bank {
        string name;
        string email;
        string ifscCode; // starting code or full
        string address_;
        address id_;
        uint16 kycCount; // How many KCY's did this bank completed so far
        uint status; // 0 active 1 not active
    }
    struct KycRequest {
        bool isExists;
        string id_; // Combination of customer Id & bank is going to be unique
        address userId_;
        string customerName;
        address bankId_;
        string bankName;
        string[] dataHash; // hash of the document that have been stored
        uint256 updatedOn;
        uint status; // 0 pending  1 rejected 2 failed
        uint dataRequest; // Get approval from user to access the data
        string additionalNotes; // Notes that can be added if KYC verification fails  OR
        // if customer rejects the access & bank wants to re-request with some message
    }
}