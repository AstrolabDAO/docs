# Interacting with Crates

This section is a work in progress as the Astrolab team is currently working to improve the contracts.

## Interface

Crates' interface is compliant with the [ERC4626 standard](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC4626)

## Estimating gas for withdrawal

Cross-chain messaging requires the sender to pay gas for the call on the remote chain. Therefore the withdraw() function is payable.

You can estimate the gas cost instantly by calling estimateWithdrawCost(uint256 amount) before sending your transaction and using the result as "value" when you send it.

## Withdrawing funds

Depending on the allocation state, you may need to wait a little while for the funds to bridge back. You can determine if a cross-chain withdrawal is needed by calling `chooseChainWithdraw(uint256 amount)`, which will return the chainIds from which to withdraw and the amounts linked.

If only one chainId appears and is the one of the home chain (ex: 1 for Ethereum mainnet), then the withdrawal will be atomic and a cross-chain call is not necessary.

## Getting the APR

APRs can be computed analytically by recovering the individual APRs from each strategy and using their share of liquidity to calculate a weighted average. APRs can also be calculated empirically by comparing the last two share values.

(Coming soon: graph from The Graph and Dune dashboard)
