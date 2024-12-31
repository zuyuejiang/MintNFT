require("dotenv").config();
async function main() {
  const Cinnamonroll = await hre.ethers.getContractFactory("Cinnamonroll");

  const nft = await Cinnamonroll.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(),`ipfs://${process.env.NFT_CID}`);

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });