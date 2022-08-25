# Interacting with Crates

This section is WIP as we're improving the contracts.

## Interface

Crates' interface is compliant with the [ERC4626 standard](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC4626)

## Estimating gas for withdraw

Since cross-chain messaging requires the sender to pay the gas for the call on the remote chain, the `withdraw()` function is `payable`.

You can estimate the gas cost instantly by calling ``estimateWithdrawCost(uint256 amount)`` before sending your transaction and use the result as `value` when you send it.

## Withdrawing funds

Depending on the allocation state, you may need to wait a little bit for the funds to bridge back. You can determine this by calling `chooseChainWithdraw(uint256 amount)`, which will return the chainIds from which to withdraw and the amounts linked. 

If only one chainId appears and is the one of the home chain (ex: `56` for BSC), then the withdraw will be atomic and won't need a cross-chain call.

## Getting the APR

APRs can be computed either analytically by recovering the individual APR from each strategy, weighted by their liquidity, or empirically, by comparing the last two share prices. 

(Coming soon: graph from The Graph and Dune dashboard)