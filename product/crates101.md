# Crates 101

Crates are multichain (or "omni-chain"), multistrategy [ERC4626](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/) vaults. After users make a Crate deposit, funds are routed to the best farming opportunities available within that Crate’s portfolio, either on the deposit chain or on another remote chain.

## Accounting

Each Crate Token has a value representing its share of underlying asset value (TVL) in the associated Crate. For example, if Alice holds 1,000 crUSDC and the share token value for the Crate is 1.20 USDC, the theoretical value of her holding amounts to 1,200 USDC.

Accounting is carried out using the asset/debt model. When a deposit is made to another chain or a strategy, the amount transferred is registered as a debt payable to the receiver contract, which receives assets in exchange. As the value of assets invested increases over time, so does the registered debt.

When a withdrawal is made by a user, the parent contract will ask for the corresponding amount of debt. If the amount of underlying assets in the strategy is lower than the amount of debt owed, then funds are sent pro-rata of the assets/debt ratio.

This model, inherited from Yearn finance, protects the token price, as it is unaffected by the movements of crToken holders. To prevent any large deviation between debt and assets recovered, each strategy has a maximum deposit amount that can be updated over time to accommodate the state of the underlying pool.

> Example: Alice has 100,000 Crate tokens, corresponding to a theoretical value of 110,000 USDC. She withdraws all at once. The crate recovers the full amount from one of the strategies, which needs to break a USDC-DAI LP, and swap the DAI to USDC before sending it to Alice. Because of the slippage and swap fees, the final amount recovered equals 55,000 + 54950. Alice receives 109,950 USDC. However, the share price is unaffected and remains the same.

## Allocation

Yield sources where the assets are deposited (known as ‘strategies’ in DeFi developer lingo), are ranked and have a maximum deposit amount.

Deposits are allocated to the highest-ranked pool on the list. Once the maximum deposit limit is reached, assets are then sent to the next pool on the list, and so on.

Withdrawals are executed similarly, but from the bottom first. In other words, withdrawals are made from the lowest-ranked pools that have liquidities staked.

This mechanism offers the following advantages:

- Withdrawals are executed from pools that minimize the impact on current depositors, hence optimizing yields.
- Rebalancing, which tends to be a significant source of costs, is done passively over time to maximize yields.
- Deposits economize on gas costs because funds are not distributed according to some predetermined allocation.
- Setting a maximum deposit limit mitigates excessive exposure to risky pools. As such, even as TVL grows, no pool will receive more liquidity than the strategy allows.

![allocation](/media/allocation.jpg)

Rebalancing can still be done, however, if needed.

## Risk level

Due to the multitude of available opportunities when multichain farming, the risk/reward profile differs among pools. Astrolab’s Crates are designed to accommodate different risk appetites and are therefore named to reflect their risk exposure:

- **Conservative Crates**: focus on older, battle-tested protocols that have a track record of delivering solid yields.
- **Aggressive Crates**: hunt for higher APRs across newer or more experimental protocols. More complex strategies may also be used for the Aggressive Crates.

To ensure the safety of every Crate, all protocols that are associated with Astrolab’s Crates are subject to extensive internal audits and community discussions. If a pool becomes too risky, a complete withdrawal of funds provided can be made before the pool is disconnected.
