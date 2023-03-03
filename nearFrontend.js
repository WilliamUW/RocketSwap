const state = { balance: 0 };

return (
  <div>
    <h1>Rocket Pool</h1>
    <h2>Decentralised Ethereum Staking Protocol</h2>

    <div>
      <p>Stake ETH</p>
      <p>Balance: {state.balance} ETH</p>
      <input type="number" value="0.00"></input>
    </div>
  </div>
);
