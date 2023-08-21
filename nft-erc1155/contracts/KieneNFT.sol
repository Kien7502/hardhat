pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract KieneNFT is ERC1155 {
    uint256 public constant KieneGIF = 1;
    uint256 public constant KieneGIF2 = 2;


    constructor() ERC1155("https://bafybeid5bi7o66pj55wqowpmg3zf73lhi7xepi4r32gubn2accc7eectoe.ipfs.nftstorage.link/{id}.json") {
        _mint(msg.sender, KieneGIF, 1, "");
        _mint(msg.sender, KieneGIF2, 2, "");
    }
    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://bafybeid5bi7o66pj55wqowpmg3zf73lhi7xepi4r32gubn2accc7eectoe.ipfs.nftstorage.link/",Strings.toString(_tokenid),".json"
            )
        );
    }
}