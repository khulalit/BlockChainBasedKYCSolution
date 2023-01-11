# BlockChainBasedKYCSolution
App link [BlockchainKYC](https://kycdapp.netlify.com)
You must have MetaMask installed and Goerli TestNet account. 
## Enhancing the Transparency and Reducing the Redundancy in Know Your Customer (KYC) Procedure using Smart Contract
Know Your Customer (KYC) is a process by which banks obtain information about the identity and address of the purchasers. It is a regulator governed process of performing due diligence for verifying the identity of clients. This process makes sure that bank’s services are not misused. The banks are responsible for completing KYC procedure while opening account. Banks are also required to periodically update their customer KYC details. Therefore, KYC protocols was the rise to assist companies to ensure they know who they are doing business with. In recent years, the Know Your Customer (KYC) process has become increasingly complex and time-consuming for financial institutions.  In traditional KYC system each bank will conduct its identity check. Hence there is a waste of time and resource checking each from scratch. A Smart contract is a contract that runs on the blockchain network. Blockchain is a decentralized network system in which every node has information about every transaction in the form of blockchain which is present at every node. Due to its feature blockchain technology has emerged as technology with potential to change the business. And that has also attracted the banking industries as well.  The blockchain architecture and the DLT help us to collect from various service providers into one cryptographically secure and unchanging database that does not need any third party to verify the authenticity of information. It makes possible to form a system where the user will need to go under KYC procedure once. In this report, we propose a solution to these problems using the Solidity smart contract based on Ethereum blockchain. By storing KYC data on the blockchain, we can ensure that it is secure, immutable, and easily accessible to authorized parties. This will reduce the need for redundant data collection and improve the overall transparency of the KYC process. We present a proof-of-concept implementation and evaluate its performance and security. Our results show that the use of the Ethereum blockchain can significantly improve the efficiency and transparency of the KYC process.

## Proposed Framework
The below figure shows the proposed framework of our solution.

 ![image](https://user-images.githubusercontent.com/52879143/211798670-504ae225-25f5-4a69-b52c-c5a1ac7df060.png)

•	There will be an admin institution for example RBI (Reserve Bank of India) or Central Bank which can add banks to the system. 
•	A bank can add customers to the institution or request them for KYC norms. 
•	A customer can add or update its documents and related information. 
•	If a requested customer is allowed access permission to the documents, then the bank will verify all the documents, based on verification the bank will issue the status of accepted / rejected and the notification released.

The KYC procedure involves three entities namely Admin, Bank and customer which are described below.

Admin: The admin is the Central Authority in the system or say super admin. The model that we have proposed will be implemented by the admin bank. It has ability to add Banks in the system activate or deactivate Banks in the system. It has all the information about the Banks, the customer of those Banks as well. One thing to note here is that it is not a system for accounts or like anything, it solely a KYC registry. So, when we say that Bank is adding a customer to the system, it means that the customer’s KYC request is being added. Central Bank(admin) will also be responsible for the creating the operating procedure for the KYC, how it will be done, which documents will be required, on the basis of which the KYC will be preceded. There are functions in the smart contract in the name of admin that has the functionality of the admin. In the example of Indian banking system, the RBI (Reserve Bank of India) is the central bank. And, the procedure for doing KYC is stated by the RBI, including which documents is required and how the verification on the basis of those documents will take place.


Bank: Several different types of banks are those financial institutions that do KYC procedure to approve or connect the customer to their system. Each bank maintains its status whether it is active or not. It also maintains the KYC count that bank has done. There are several attributes that are maintained for bank entity namely.

•	Bank name
•	Bank email
•	Bank hashed address
•	Bank IFSC code
•	Bank status
•	Bank KYC account

 
Customer: Customers are the end user who want to take the service of different. Customer entity maintains the basic information about the customer and list of banks to which customer is verified. There are following attributes in customer entity:

•	Customer name
•	Customer email
•	Customer mobile number
•	Customer hashed address
•	List of banks verified by
•	Hashed documents
•	Data updated on

## Web Interface
The smart contract build for KYC procedure is also provided the interactive user interface build using React JS Framework. There are following different web pages. It is a distributed application or Decentralized application, web application, in our case. It provides different interface for different user. Under the hood it is a Blockchain based application. To end user, it will be like a normal web application.

Note: To be able to work with this app meta mask must be installed. Instruction for the installation is provided in the application

![image](https://user-images.githubusercontent.com/52879143/211799724-1be41aee-33da-459a-bfa6-74e9d2993772.png)

![image](https://user-images.githubusercontent.com/52879143/211799757-ff2c6351-713e-4fbe-9e00-1dbca7a4f470.png)

![image](https://user-images.githubusercontent.com/52879143/211799786-366094eb-d7ca-4efd-bcbf-93f3abaec72e.png)

![image](https://user-images.githubusercontent.com/52879143/211799815-f6d04723-3bf3-41d8-908b-b146f5340ce6.png)

This project is done in partial fulfilment of requirements for the degree ofM.Sc. Computer Science as Minor Project Report in M.Sc. Computer Science (University of Delhi).

