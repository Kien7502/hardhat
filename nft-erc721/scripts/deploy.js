async function main() {
    const KieneNFT = await hre.ethers.getContractFactory("KieneNFT");
    const kieneNFT = await KieneNFT.deploy("KieneNFT", "KNFT");
  
    await kieneNFT.deployed();
  
    console.log("KieneNFT deployed to:", kieneNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });