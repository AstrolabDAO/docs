# Emergency stop

A vulnerability may be found in a contract, due to external reports, auditing, or malevolent actions detected on-chain. A first-line of defense, in this case, is to pause contracts interactions and protect protocol's funds. Multisig or voting are not suited for this manipulation, as execution speed must be as quick as possible, and multisig holders may not be available at the right moment. Nomad bridge hack was, unfortunately, a good example of this problem, and by the time the team woke up, the bridge had lost most of its funds.

Hence, Astrolab's contracts have a fuse function that granulary allows to pause parts of the protocol that may be at risk. Multiple wallets will be allowed to pull the trigger, in order to mitigate the availability problem. Re-starting the paused contract needs to be done through multisig, which ensures the issue is looked at thoroughly. 

Wallets allowed to pause Astrolab's contracts. If you witness an issue, you can contact one of them (start by the highest on the list if you don't know who they are).

- `[permissions] [address] [socials] [role] [since 01/01/2000]`
- `[permissions] [address] [socials] [role] [since 01/01/2000]`
- `[permissions] [address] [socials] [role] [since 01/01/2000]`
- `[permissions] [address] [socials] [role] [since 01/01/2000]` 
