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

    <button>Convert</button>

    <div>
      <p>Receive rETH</p>
      <p>Balance: {state.balance} rETH</p>
      <input type="number" value="0.00"></input>

      <p>Exchange Rate: 1 rETH = 1.06884 ETH</p>
      <p>≈ 0.75% Premium</p>

      <p>Average Return: ≈ 4.29% APR</p>
    </div>
    <p>pussy</p>
  </div>
);
