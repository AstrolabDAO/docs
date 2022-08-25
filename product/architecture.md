# Architecture

Astrolab's crates are composed of multiple contracts interconnected to allow composability and flexibility:

- **Crate**: ERC426 vault token contract. It is the main entrance point for the public and holds the accounting logic for the crate.
- **Router**: Contract in charge of dispatching funds between chains and protocols, and interacting with bridges.
- **Bridge**: Third-party contract used to send value and/or messages between chains.
- **VaultManager**: Contract managing the allocation between Vaults.
- **Vault**: Contract connecting to the farming pool where funds are put to work.

## Value flow
The architecture is organised the following way:

![value flow](/media/value-flow.jpg)
                                                                                                                                                                                                                                                                                                                                                                                                                                                

## Deposit flow

In order to keep contracts as efficient as possible and save user's gas, fund allocation and bridging is done at regular intervals using an automation service (e.g: Chainlink keepers, Gelato Network). 

This buffer allows withdraws to be done directly from unallocated (yet) funds from the contract, saving the costs associated with bridging back funds and/or recovering assets from a pool.


Deposit is routed the following way :

![deposit flow](/media/deposit-flow.jpg)



## Withdraw flow
Users wanting to withdraw can either sell their Crates tokens on the available liquidity pools or trigger a withdrawal from the contract.

Funds can be withdrawn:

- From idle assets not yet allocated, in an atomic transaction.
- From pools on the home chain, in an atomic transaction.
- From pools on a remote chain, and bridged back to the user, in three transactions, which may add a bit of delay.

 Because the bridge has to pay for the gas call on the remote chain, some value is sent along with the call. Keep in mind that, if LayerZero is used to forward the withdrawal, the unused gas cost is returned directly to the user. 
 
 In the (unlikely) case that the remote withdraw fails due to unsufficient gas, anyone can retry the transaction. Astrolab has an automated script to do it and ensure that withdraws pass 100% of the time.

Remote withdraws are routed the following way:

![withdraw flow](/media/withdraw-flow.jpg)