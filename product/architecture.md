# Architecture

Astrolab's crates are composed of multiple contracts interconnected to allow composability and flexibility:

- **Crate**: [ERC4626](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/) vault token contract. It is the main entry point for the public and holds the accounting logic for the crate.
- **Router**: Contract in charge of dispatching funds between chains and protocols, and interacting with bridges.
- **Bridge**: Third-party contract used to send value and/or messages between chains.
- **VaultManager**: Contract managing the allocation between Vaults.
- **Vault**: Contract connecting to the farming pool where funds are put to work.

## Value flow

The architecture is organized the following way:

![value flow](/media/value-flow.jpg)

## Deposit flow

To keep contracts as efficient as possible and save users gas, fund allocation and bridging are done at regular intervals using an automation service (e.g: Chainlink keepers, Gelato Network).

This buffer allows withdrawals to be done directly from unallocated (yet) funds from the contract, saving the costs associated with bridging back funds and/or recovering assets from a pool.

The deposit is routed the following way :

![deposit flow](/media/deposit-flow.jpg)

## Withdraw flow

Users wanting to withdraw can either sell their Crates tokens on the available liquidity pools or trigger a withdrawal from the contract.

Funds can be withdrawn:

- From idle assets not yet allocated, in an atomic transaction.
- From pools on the home chain, in an atomic transaction.
- From pools on a remote chain, and bridged back to the user, in three transactions, which may add a bit of delay.

Because the bridge has to pay for the gas call on the remote chain, some value is sent along with the call. Keep in mind that, if LayerZero is used to forward the withdrawal, the unused gas cost is returned directly to the user.

In the (unlikely) case that the remote withdrawal fails due to insufficient gas, anyone can retry the transaction. Astrolab has an automated script to do it and ensure that withdrawals pass 100% of the time.

Remote withdrawals are routed the following way:

![withdraw flow](/media/withdraw-flow.jpg)
