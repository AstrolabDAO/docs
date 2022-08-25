# Crates 101

Crates are multichain (or "omnichain"), multistrategy ERC4626 vaults. After a user deposits, funds are routed to the best farming opportunities available in the Crates' portfolio, on the deposit chain, or another remote chain.

## Accounting

Each Crate has a share value, which represents the amount of underlying assets per Crate token. For instance, if Alice holds 1,000 crUSDC, and the share value is 1,10, then the theoretical value of her holding is equal to 1,100 USDC.

Accounting is done using the debt/assets model. When a deposit is made to another chain, or on a strategy, the amount transferred is registered as debt from the receiver contract, which gets assets in exchange. Over time, the assets invested increase in value, and so does the debt registered.

If a withdrawal is needed, then the parent contract will ask to get its debt back. If the amount of underlying assets in the strategy is lower than the total amount of debt owed, then funds are sent pro-rata of the assets/debt ratio, so that the share price is unaffected by the movements of crToken holders.

TODO: Add flowchart

## Allocation

The allocation rule used for crates follows the model pioneered by Yearn Finance. Yield pools are ranked, and have a maximum deposit amount. 

Deposits are allocated to the first pool on the list. When the maximum deposit limit is reached, assets are sent to the next one on the list, and so on.

Withdraws are done the same way, but from the bottom: we withdraw from the lowest-ranked pools that have liquidities staked.

This mechanism has the following advantages:

- Withdraws are always done from the pool that will impact the least the current depositors, protecting the yield.
- Rebalancing, which tends to be a great source of costs (and thus reduces the yield), is done passively over time.
- Deposits are cheaper gas-wise as you don't have to spread them, as you'd do if you were having a predetermined allocation.
- Setting a maximum deposit allows for better manage the exposure to risky pools, as even if the TVL grows, the pool won't get more liquidity.

Rebalancing can still be done, however, if needed or if the pool ordering drastically changes.

## Risk level

Due to the multiple available opportunities possible when multichain farming, the risk/reward profile of each pool isn't homogeneous. Astrolab's Crates thus have a risk indicator: "Conservative" or "Aggressive".

- **Conservative Crates** focus on older, battle-tested protocols that are proven to bring a solid yield.

- **Aggressive Crates** hunt for higher APRs and may farm newer or more experimental protocols. Some more complex strategies may also be used with the aggressive crates.

In both cases, protocols connected to Crates will forgo an internal audit and some discussion in the community, to ensure Crate's maximum safety. If a pool becomes too risky, it's possible to disconnect it and withdraw any funds provided.

## Fees

15-22% performance fees, depending on the Crate from the generated yield are kept by the protocol. Currently, Astrolab charges no management fee, although it can be increased through governance if deemed necessary.

