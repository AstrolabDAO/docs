# Crates

Crates are multichain (or "omnichain"), multistrategy ERC4626 vaults. After a user deposits, funds are routed to the best farming oportunities available in the Crates' portfolio, on the deposit chain or another remote chain.

## Accounting

Each Crate has a share value, which represent the amount of underlying assets per Crate token. For instance, if Alice holder 1,000 crUSDC, and the share value is 1,10, then the theorerical value of her holding is equal to 1,100 USDC.

Accounting is done using the debt/assets model. When a deposit is made to another chain, or on a strategy, the amount transfered is registered as debt from the receiver contract, which gets assets in exchange. Over time, the assets invested increase in value, and so does the debt registered.

If a withdraw is needed, then the parent contract will ask to get its debt back. If the amount of underlying assets in the strategy is lower than the total amount of debt owed, then funds are sent pro-rata of the assets/debt debt ratio, so that the share price is unafected by the movements of crToken holders.

# Allocation

