# Architecture

Here is Crate's basic architecture:

TODO: Update this chart
![value flow](/media/value-flow.png)
                                                                                                                                                                                                                                                                                                                                                                                                                                                
**Crate**: ERC426 vault token contract. It is the main entrance point for the public and holds the accounting logic for the crate.
**Router**: Contract in charge of dispatching funds between chains and protocols, and interact with bridges.
**Bridge**: Third-party contract used to send value and/or messages between chains.
**Vault**: Contract connecting to the farming pool where funds are put to work.

Deposit is routed the following way :

![deposit flow](/media/deposit-flow.png)

Users wanting to withdraw can either sell their Crates tokens on the available pools, or trigger a withdraw from the contract. Because the bridge has to pay for the gas call on the remote chain, some value is sent along with the call. Keep in mind that the unused gas cost is returned directly to the user.



