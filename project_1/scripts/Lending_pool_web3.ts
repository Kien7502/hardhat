import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
const ibep20ContractABI : AbiItem[] = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const poolContractABI : AbiItem[] = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "onBehalfOf",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "borrowRate",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "referral",
        "type": "uint16"
      }
    ],
    "name": "Borrow",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "onBehalfOf",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "referral",
        "type": "uint16"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "collateralAsset",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "debtAsset",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "debtToCover",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "liquidatedCollateralAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "receiveTToken",
        "type": "bool"
      }
    ],
    "name": "LiquidationCall",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "repayer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Repay",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "liquidityRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stableBorrowRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "variableBorrowRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "liquidityIndex",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "variableBorrowIndex",
        "type": "uint256"
      }
    ],
    "name": "ReserveDataUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "ReserveUsedAsCollateralDisabled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "ReserveUsedAsCollateralEnabled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "indexedconfiguration",
        "type": "uint256"
      }
    ],
    "name": "SetConfiguration",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "referralCode",
        "type": "uint16"
      },
      {
        "internalType": "address",
        "name": "onBehalfOf",
        "type": "address"
      }
    ],
    "name": "borrow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "onBehalfOf",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "referralCode",
        "type": "uint16"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balanceFromAfter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balanceToBefore",
        "type": "uint256"
      }
    ],
    "name": "finalizeTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getReserveNormalizedIncome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getReserveNormalizedVariableDebt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserAccountData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalCollateralUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalDebtUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availableBorrowsUSD",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentLiquidationThreshold",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ltv",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "healthFactor",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IBEP20",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tTokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "variableDebtAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "interestRateStrategyAddress",
        "type": "address"
      }
    ],
    "name": "initReserve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "collateralAsset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "debtAsset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "debtToCover",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "receiveTToken",
        "type": "bool"
      }
    ],
    "name": "liquidationCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "onBehalfOf",
        "type": "address"
      }
    ],
    "name": "repay",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "configuration",
        "type": "uint256"
      }
    ],
    "name": "setConfiguration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "val",
        "type": "bool"
      }
    ],
    "name": "setPause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "reserve",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "rateStrategyAddress",
        "type": "address"
      }
    ],
    "name": "setReserveInterestRateStrategyAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "useAsCollateral",
        "type": "bool"
      }
    ],
    "name": "setUserUseReserveAsCollateral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const providerUrl = 'https://bsc-testnet.publicnode.com'; // URL của Ethereum provider
const poolContractAddress = '0x50794d89dbdb2d3aba83820bc3557ff076ca481b'; // Địa chỉ của smart contract pool

const userPrivateKey = process.env.PRIVATE_KEY || ""; // Khóa riêng tư của người dùng

const web3 = new Web3(providerUrl);
const userWallet = web3.eth.accounts.privateKeyToAccount(userPrivateKey);
const poolContract = new web3.eth.Contract(poolContractABI, poolContractAddress);

//ether 1e18, USTD 1e6
//gasLimit 2e6 (2e7)
async function depositToPool() {
  try {
    
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 2e6;
    
    //Những items trong deposit
    const assetAddress = "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
    const depositAmount = web3.utils.toWei('0.000000000001', 'ether');
    const onBehalfOf = userWallet.address;
    const referralCode = 0;
    
    const tx = poolContract.methods.deposit(assetAddress, depositAmount, onBehalfOf, referralCode);
    const data = tx.encodeABI();
    const txData = {
      from: userWallet.address,
      to: poolContractAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: data,
      //value: depositAmount,
    };

    const signedTx = await web3.eth.accounts.signTransaction(txData, userPrivateKey);
    if (signedTx && signedTx.rawTransaction) {
      const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('Deposit successful. Transaction hash:', txReceipt.transactionHash);
    } else {
      console.error('Error signing transaction or signedTx.rawTransaction is undefined.');
    }
  } catch (error) {
    console.error('Error depositing:', error);
  }
}

// address asset,
// uint256 amount,
// uint16 referralCode,
// address onBehalfOf
async function borrowFromPool() {
  try {
    
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 2e6;
    
    //Những items trong borrow
    const assetAddress = "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
    const borrowAmount = web3.utils.toWei('0.000000000001', 'ether');
    const onBehalfOf = userWallet.address;
    const referralCode = 0;
    
    const tx = poolContract.methods.borrow(assetAddress, borrowAmount, referralCode, onBehalfOf);
    const data = tx.encodeABI();
    const txData = {
      from: userWallet.address,
      to: poolContractAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: data,
      //value: borrowAmount,
    };
    console.log("txData **********: ", txData)
    const signedTx = await web3.eth.accounts.signTransaction(txData, userPrivateKey);
    if (signedTx && signedTx.rawTransaction) {
      const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('borrow successful. Transaction hash:', txReceipt.transactionHash);
    } else {
      console.error('Error signing transaction or signedTx.rawTransaction is undefined.');
    }
  } catch (error) {
    console.error('Error borrowing:', error);
  }
}

async function repayToPool() {
  try {
    
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 2e6;
    
    //Những items trong repay
    const assetAddress = "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
    const repayAmount = web3.utils.toWei('0.000000000001', 'ether');
    const onBehalfOf = userWallet.address;
    const referralCode = 0;
    
    const tx = poolContract.methods.repay(assetAddress, repayAmount, onBehalfOf);
    const data = tx.encodeABI();
    const txData = {
      from: userWallet.address,
      to: poolContractAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: data,
      //value: repayAmount,
    };
    console.log("txData **********: ", txData)
    const signedTx = await web3.eth.accounts.signTransaction(txData, userPrivateKey);
    if (signedTx && signedTx.rawTransaction) {
      const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('repay successful. Transaction hash:', txReceipt.transactionHash);
    } else {
      console.error('Error signing transaction or signedTx.rawTransaction is undefined.');
    }
  } catch (error) {
    console.error('Error repaying:', error);
  }
}


async function withdrawFormPool() {
  try {
    
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 2e6;
    
    //Những items trong withdraw
    const assetAddress = "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
    const withdrawAmount = web3.utils.toWei('0.000000000001', 'ether');
    const onBehalfOf = userWallet.address;
    const referralCode = 0;
    
    const tx = poolContract.methods.withdraw(assetAddress, withdrawAmount, onBehalfOf);
    const data = tx.encodeABI();
    const txData = {
      from: userWallet.address,
      to: poolContractAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: data,
      //value: withdrawAmount,
    };
    console.log("txData **********: ", txData)
    const signedTx = await web3.eth.accounts.signTransaction(txData, userPrivateKey);
    if (signedTx && signedTx.rawTransaction) {
      const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('withdraw successful. Transaction hash:', txReceipt.transactionHash);
    } else {
      console.error('Error signing transaction or signedTx.rawTransaction is undefined.');
    }
  } catch (error) {
    console.error('Error withdrawing:', error);
  }
}

async function approveToken(address: string) {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 2e6; // Đặt giới hạn gas tùy ý

    const assetAddress = address
    const approveAmount = web3.utils.toWei('0.000000000001', 'ether');
    const tokenContract = new web3.eth.Contract(ibep20ContractABI, assetAddress);
    const approveTx = tokenContract.methods.approve(poolContractAddress, approveAmount);
    const approveData = approveTx.encodeABI();
    const approveTxData = {
      from: userWallet.address,
      to: assetAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: approveData,
    };
    console.log("ApproveData ****************",approveData);
    
    const signedApproveTx = await web3.eth.accounts.signTransaction(approveTxData, userPrivateKey);

    
    if (signedApproveTx && signedApproveTx.rawTransaction) {
      const approveTxReceipt = await web3.eth.sendSignedTransaction(signedApproveTx.rawTransaction);
      console.log('Approval successful. Transaction hash:', approveTxReceipt.transactionHash);
    } else {
      console.error('Error signing transaction or signedTx.rawTransaction is undefined.');
    }
    
  } catch (error) {
    console.error('Error approving:', error);
  }
}

//repayToPool();
//approveToken("0x08FC4a32f8F68DeF1Ef55Dcf7fCD65cdfbD66660");
//borrowFromPool();
withdrawFormPool();