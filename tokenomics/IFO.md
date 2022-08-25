# Flywheel tokenomics

## Why?
Astrolab's goal is to provide deep liquidity for its crates, which improves the general user experience, and opens the door for ecosystem integrations:

#### User experience improvements:
- Users can swap their tokens instead of withdrawing, preserving the AUM as no withdrawals happen, and reducing gas costs.
Token market prices can be followed on websites such as DexScreener or Coinmarketcap.

#### Ecosystem integrations:
- Creating an oracle for Crates is easier as there's a market price.
- Crates can be used as collateral, and liquidations can happen without needing to withdraw funds.
- Collateralization of the Crates opens the door for leveraging, and multiplication of the AUM.

Such integrations are harder to replicate by competitors and provide protection against "vampire attacks" where another protocol launches a similar product subsidized by their governance tokens.

## How?

Astrolab plans to use Aura/Balancer veTokenomics. 

Balancer incentivizes liquidity providers with their governance token, $BAL. $BAL holders can lock their tokens, and receive veBAL in exchange, which has voting power. This voting power is used to direct the $BAL emissions to specific pools.

Aura is built "on top" of Balancer and has acquired, and locked, a large amount of $BAL tokens. Their token, $Aura, can be also locked and then used as a proxy to direct veBAL voting power. 

As a result, it is currently much more profitable to vote using $Aura than $BAL tokens, as 24M$ worth of $Aura controls 34M$ of BAL tokens, increasing with time as the protocol accumulates more BAL.

>Our calculations show that currently, it is very profitable to incentivize liquidity this way: 100k$ of $AURA votes is enough to provide a 1M$ pool with a 10% APR. 

A "Crate USDC"-USDC 80%/20% pool with a 10% APR could be very interesting for users willing to increase further their revenue: at a 10% yield for the Crate alone, the total APR for the pool would increase to around 18%!

Of course, such additional revenue would drive up Astrolab's TVL, generating more performance fees. A share of those performance fees can be directed to $Aura accumulation, to scale the liquidity yield with the growth of the TVL.

## Execution

Those mechanisms require accumulating $Aura early in $Astrolab's life, to then kickstart the positive feedback loop between TVL and APR increases. 

A starting treasury of $Aura will be acquired during a public sale at the launch of the token. Then, an "Initial Farming Offer" will be conducted: users can stake their assets (say, USDC), and earn $ASL in exchange for their yield, which is kept to buy more $Aura.

This mechanism has the following advantages:
- Unlike classic distribution using liquidity farming, Astrolab gets to accumulate "protocol-controlled value" (PCV), which backs the underlying value of $ASL over time.
- The acquired $Aura will be directed to Crates' metapools, providing an increasing yield for pools over time.
- The IFO doesn't have to last for 100 years, like many DAOs plan it. Once the initial accumulation is done, the inflation stops and to price pressure is relieved.


