export const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "BankActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ifscCode",
          "type": "string"
        }
      ],
      "name": "BankAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "BankDeactivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "BankUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "CustomerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "CustomerDataUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "id_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "customerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "dataHash",
          "type": "string"
        }
      ],
      "name": "DataHashUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reqId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "bankName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "customerName",
          "type": "string"
        }
      ],
      "name": "KycReRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reqId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "bankName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "customerName",
          "type": "string"
        }
      ],
      "name": "KycRequestAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reqId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "customerId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "bankId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "status",
          "type": "uint256"
        }
      ],
      "name": "KycStatusChanged",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ifscCode",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "address_",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "id_",
              "type": "address"
            },
            {
              "internalType": "uint16",
              "name": "kycCount",
              "type": "uint16"
            },
            {
              "internalType": "uint256",
              "name": "status",
              "type": "uint256"
            }
          ],
          "internalType": "struct Types.Bank",
          "name": "bank_",
          "type": "tuple"
        }
      ],
      "name": "addBank_",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cid",
          "type": "address"
        }
      ],
      "name": "customerKycExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "mobileNumber",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "id_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "kycVerifiedBy",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "dataHash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "dataUpdatedOn",
              "type": "uint256"
            }
          ],
          "internalType": "struct Types.Customer",
          "name": "customer_",
          "type": "tuple"
        }
      ],
      "name": "addCustomer_",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isExists",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "id_",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "userId_",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "customerName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "bankId_",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "bankName",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "dataHash",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "updatedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "status",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dataRequest",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "additionalNotes",
              "type": "string"
            }
          ],
          "internalType": "struct Types.KycRequest",
          "name": "kycr",
          "type": "tuple"
        }
      ],
      "name": "addKycRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "kyc_id",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "action",
          "type": "uint256"
        }
      ],
      "name": "actionOnKycRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "bankid",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "customerid",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "action",
          "type": "uint256"
        }
      ],
      "name": "handleKyc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]