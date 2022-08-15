# Architecture

Here is Crate's basic architecture:

![value flow](/media/value-flow.png)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
**Crate**: ERC426 vault token contract. It is the main entrance point for the public and holds the accounting logic for the crate.
**Router**: Contract in charge of dispatching funds between chains and protocols, and interact with bridges.
**Bridge**: Third-party contract used to send value and/or messages between chains.
**Vault**: Contract connecting to the farming pool where funds are put to work.

Deposit is routed the following way :

![deposit flow](/media/deposit-flow.png)

Users wanting to withdraw can either sell their Crates tokens on the available pools, or trigger a withdraw from the contract. Gas costs may appear high at face value, given that, if a withdraw needs to pull funds from another chain, it is necessary to fund the execution and bridge back on the remote chain. However, please keep in mind that unused gas fees are refunded to the user by LayerZero.

