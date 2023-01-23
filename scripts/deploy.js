const hre = require("hardhat");

async function main() {
  const SuperMarioWorld = await hre.ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection",
    "SPRMC",
    "https://ipfs.io/ipfs/Qmc3HKfehGy1GHfyUeFga8eFWfsMaoAY6yT7tBprJoTRM8/"
    );
    await superMarioWorld.deployed();
    console.log("SuperMarioWorld deployed to:", superMarioWorld.address);

    await superMarioWorld.mint(10); //1 Mario
    await superMarioWorld.mint(10);//2 Luigi
    await superMarioWorld.mint(10);
    await superMarioWorld.mint(10);
    await superMarioWorld.mint(1);// 5 Mario Gold
    await superMarioWorld.mint(1);// 6 Luigi Gold
    await superMarioWorld.mint(1);
    await superMarioWorld.mint(1);

    console.log("NFT minted successfully");

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
