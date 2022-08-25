# Flywheel tokenomics
Flywheel tokenomics refers to methods where increasing TVL increases the token price, which causes further increases in TVL, making all our users, investors, and platform as a whole successful.

## Why?
Astrolab's crates are tokenized, meaning deposits into crates are represented by tokens that can be traded in liquidity pools or used as loan collateral. Our goal is to provide deep liquidity for crates. This improves the general user experience, and additionally opens the door for ecosystem integrations. This allows us flexibility in our tokenomics, giving us additional opportunities to help both crate depositors as $ASL holders earn as much yield as possible.

#### User experience improvements:
- Users can swap their tokens instead of withdrawing, preserving the AUM as no withdrawals happen, and reducing gas costs.
- Users can LP with crate tokens, earning yield in crate tokens on top of the yield provided by the crate itself.
- Crate token market prices can be followed on websites such as DexScreener or Coingecko.

#### Ecosystem integrations:
- Creating an oracle for Crates is easier as there's a market price.
- Crates can be used as collateral, and liquidations can happen without needing to withdraw funds.
- Collateralization of the Crates opens the door for leveraging, and multiplication of the AUM.

Such integrations are harder to replicate by competitors and provide protection against "vampire attacks" where another protocol launches a similar product subsidized by their governance tokens.

## How will we create the flywheel?

Astrolab plans to take advantage of [Aura](https://aura.finance/) and it's control over [Balancer](https://balancer.fi/)'s $BAL emissions. 

Balancer incentivizes liquidity providers with their governance token, $BAL. $BAL holders can lock their tokens, and receive veBAL in exchange, which has voting power. This voting power is used to direct the $BAL emissions to specific pools, creating a circular effect.

Aura is built "on top" of Balancer and has acquired, and locked, a large amount of $BAL tokens. Their token, $Aura, can be also locked and then used as a proxy to direct veBAL voting power. In essence, Aura buys $BAL, and then $AURA can be used as "leveraged voting" to redirect $BAL emissions.

As a result, it is currently much more profitable to vote using $AURA than $BAL tokens, as $1 worth of $AURA controls $1.42 of BAL tokens, increasing over time as the protocol accumulates more BAL. We plan to acquire as much $AURA as possible, and use it to direct emissions to our various liquidity pools, including pools featuring crate tokens.

>Our calculations show that currently, it is very profitable to incentivize liquidity this way: 100k$ of $AURA votes is enough to provide a 1M$ pool with a 10% APR. 

For example, a StablecoinCrate-USDC 80%/20% pool, incentivized with 10% APR paid out in $BAL could be very profitable for our users. Assuming the crate itself pays out 10% APR, our users would earn a total of 18% by LPing for this pool! 10% paid in BAL, and an additional 8% from holding the crate tokens.

Of course, the high yield would drive more purchases and minting of crate tokens, drive up Astrolab's TVL, and generate more performance fees. A share of those performance fees can be directed to $Aura accumulation, to scale the liquidity yield with the growth of the TVL. This circle of voting with Aura to acquire more Aura is the core of our flywheel tokenomics.

## Execution

Those mechanisms require accumulating $Aura early in $Astrolab's life, to then kickstart the positive feedback loop between TVL and APR increases. 

A starting treasury of $Aura will be acquired during a public sale at the launch of the token. Then, an "Initial Farming Offer" will be conducted: users can stake their assets (say, USDC), and earn $ASL in exchange for their yield, which is kept to buy more $Aura. Importantly, this farming opportunity is lossless, as we only use the yield from the provided assets, allowing users to withdraw 100% of their deposit at any time.

This mechanism has the following advantages:
- Unlike classic distribution using liquidity farming, Astrolab gets to accumulate "protocol-controlled value" (PCV), which backs the underlying value of $ASL over time.
- The acquired $Aura will be directed to Crates' metapools, providing an increasing yield for pools over time.
- The IFO doesn't have to last for 100 years, like many DAOs plan it. Once the initial accumulation is done, the inflation stops and selling pressure is relieved.


