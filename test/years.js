const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");

// npx hardhat test ./test/years.js

describe("Years", function () {
  let years;
  var baseURI = process.env.NFTIPFS_URI;

  beforeEach(async () => {
    const Years = await ethers.getContractFactory("Years");
    years = await Years.deploy(baseURI);
    await years.deployed();
  });
  

  it("tokenuri", async function () {
    expect(await years.totalSupply()).to.equal(0);
    expect(await years.baseURI()).to.equal(baseURI);
    
    const setGreetingTx = await years.setBaseURI(baseURI);
    await setGreetingTx.wait();
    expect(await years.baseURI()).to.equal(baseURI);
  });

  it("mint", async function () {
    const total = 10000
    const [owner, account1,account2] = await ethers.getSigners(); //默认第一个就是上面发布合约的账户
    const mintTx = await years.teamMintFor(account1.address,total);
    await mintTx.wait()

    expect(await years.totalSupply()).to.equal(total);
    for (var i=0; i<total; i++) {
      if (i<4000) {
        img = (4000-i)+"_BC.json";
      }else{
        img = (i-4000)+"_AD.json";
      }
      expect(await years.tokenURI(i)).to.equal(baseURI+img);
    }
    expect(await years.ownerOf(4)).to.equal(account1.address);
    expect(await years.balanceOf(account1.address)).to.equal(50); 
  });

  
  it("approve", async function() {
    const [owner, account1,account2] = await ethers.getSigners(); //默认第一个就是上面发布合约的账户
    const mintTx = await years.teamMintFor(account1.address,50);
    await mintTx.wait()

    // approve,发起交易的账户必须是account1
    const approveTx = await years.connect(account1).approve(account2.address,2);
    await approveTx.wait();
    expect(await years.getApproved(2)).to.equal(account2.address)
  });

  // transfer tokenid=1
  it("safeTransferFrom", async function() {
    const [owner, account1,account2] = await ethers.getSigners(); //默认第一个就是上面发布合约的账户
    const mintTx = await years.teamMintFor(account1.address,50);
    await mintTx.wait()

    expect(await years.ownerOf(1)).to.equal(account1.address)
    // 交易发起人必须是owner或者approval
    const transferTx = await years.connect(account1)["safeTransferFrom(address,address,uint256)"](account1.address, account2.address, 1);
    await transferTx.wait();
    expect(await years.ownerOf(1)).to.equal(account2.address)
  })

});
