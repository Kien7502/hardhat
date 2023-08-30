import { ethers } from "ethers";

const providerUrl = 'https://bsc-testnet.publicnode.com'; // Ethereum provider URL
const privateKey = process.env.PRIVATE_KEY2 || ""; // Khóa riêng tư của người dùng
//const contractAddress = '0x3da1ea25cada055f1337e0d11ac5a4facfffbb26'; //address Marketplace
const contractAddress = '0xf5804062c93b0C725e277F772b5DA06749005cd5'; //address Marketplace
const tokenAddress = '0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37'; // Token address (Trava)

async function saleCreate(tokenId : string, manyTrava : string) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const saleAmount = ethers.utils.parseUnits(manyTrava, 'ether');
  const gasPrice = await provider.getGasPrice();
  const gasLimit = 2e6; // Gas limit (adjust as needed)
  const tx = await contract.populateTransaction.createSale(tokenId ,saleAmount);
  const txData = { ...tx, gasPrice, gasLimit };

  try {
    const txResponse = await wallet.sendTransaction(txData);
    await txResponse.wait();
    console.log('Sale successful. Transaction hash:', txResponse.hash);
  } catch (error) {
    console.error('Error Saleing:', error);
  }
}

async function cancelSale(tokenId : string) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const gasPrice = await provider.getGasPrice();
  const gasLimit = 2e6; // Gas limit (adjust as needed)
  const tx = await contract.populateTransaction.cancelSale(tokenId);
  const txData = { ...tx, gasPrice, gasLimit };

  try {
    const txResponse = await wallet.sendTransaction(txData);
    await txResponse.wait();
    console.log('Cancel successful. Transaction hash:', txResponse.hash);
  } catch (error) {
    console.error('Error Canceling:', error);
  }
}


async function makeOrder(tokenId : string) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const gasPrice = await provider.getGasPrice();
  const gasLimit = 2e6; // Gas limit (adjust as needed)
  const tx = await contract.populateTransaction.makeOrder(tokenId);
  const txData = { ...tx, gasPrice, gasLimit };

  try {
    const txResponse = await wallet.sendTransaction(txData);
    await txResponse.wait();
    console.log('MakeOrder successful. Transaction hash:', txResponse.hash);
  } catch (error) {
    console.error('Error MakeOrdering:', error);
  }
}

async function buyBack(tokenId : string) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const gasPrice = await provider.getGasPrice();
  const gasLimit = 2e6; // Gas limit (adjust as needed)
  const tx = await contract.populateTransaction.buyBack(tokenId);
  const txData = { ...tx, gasPrice, gasLimit };

  try {
    const txResponse = await wallet.sendTransaction(txData);
    await txResponse.wait();
    console.log('BuyBack successful. Transaction hash:', txResponse.hash);
  } catch (error) {
    console.error('Error BuyBacking:', error);
  }
}


async function approveToken(manyTrava : string) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(tokenAddress, abi, wallet);
  const approveAmount = ethers.utils.parseUnits(manyTrava, 'ether');
  const gasPrice = await provider.getGasPrice();
  const gasLimit = 2e6; // Gas limit (adjust as needed)
  const tx = await contract.populateTransaction.approve(contractAddress , approveAmount);
  const txData = { ...tx, gasPrice, gasLimit };

  try {
    const txResponse = await wallet.sendTransaction(txData);
    await txResponse.wait();
    console.log('Approve successful. Transaction hash:', txResponse.hash);
  } catch (error) {
    console.error('Error :', error);
  }
}

const abi = [
  //approve ERC20
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

  //IMarketplace
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "buyBack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "cancelSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "createSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "getTokenOrder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "nftSeller",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "internalType": "struct IMarketplace.Sale",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "makeOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];


async function main() {
  //approveToken("20");
  //saleCreate("005537", "13");
  //cancelSale("005537");
  makeOrder("005537"); //Mua vật phẩm
  }
  
main()
