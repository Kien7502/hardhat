const { expect } = require("chai");

describe("KieneNFT", function () {
  it("Should return the right name and symbol", async function () {
    const KieneNFT = await hre.ethers.getContractFactory("KieneNFT");
    const kieneNFT = await KieneNFT.deploy("KieneNFT", "KNFT");

    await kieneNFT.deployed();
    expect(await kieneNFT.name()).to.equal("KieneNFT");
    expect(await kieneNFT.symbol()).to.equal("KNFT");
  });
});