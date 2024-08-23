# BARK | NFT Staking UI

This repository contains the UI interface that powers NFT staking on the Solana blockchain via [staking.barktoken.app](https://staking.barktoken.app/nft/). You can use this UI to create and deploy stake pools with built-in reward distribution, or to build your own custom interface using our underlying staking protocol.

## Pool Creation Parameters

When creating a stake pool, you can configure the following parameters:

```typescript
export type StakePoolParams {
    allowedCollections?: PublicKey[];
    allowedCreators?: PublicKey[];
    requiresAuthorization?: boolean;
    overlayText?: string;
    imageUri?: string;
    resetOnStake?: boolean;
  }
```

- **allowedCollections**: Specify an array of NFT collection `PublicKey`s that are allowed in this pool.
- **allowedCreators**: Specify an array of NFT creator `PublicKey`s that are allowed in this pool.
- **requiresAuthorization**: Set to `true` if staking in this pool requires authorization.
- **overlayText**: Text overlay for the pool, often used for display purposes.
- **imageUri**: URI for an image to visually represent the pool.
- **resetOnStake**: Set to `true` if the staking process should reset the NFT’s state.

## Reward Distribution Parameters

When configuring reward distribution, you can use the following parameters:

```typescript
export type RewardDistributionParams {
    stakePoolId: PublicKey;
    rewardMintId: PublicKey;
    rewardAmount?: BN;
    rewardDurationSeconds?: BN;
    kind?: RewardDistributorKind;
    maxSupply?: BN;
    supply?: BN;
  }
```

- **stakePoolId**: The `PublicKey` of the stake pool that will distribute rewards.
- **rewardMintId**: The `PublicKey` of the token mint used for rewards.
- **rewardAmount**: Optional. The amount of tokens to be rewarded.
- **rewardDurationSeconds**: Optional. Duration (in seconds) for which the reward will be distributed.
- **kind**: The type of reward distribution, either `Mint` or `Treasury`.
- **maxSupply**: Optional. The maximum supply of rewards that can be distributed.
- **supply**: Optional. The current supply of rewards available.

### Reward Distribution Types

There are two types of reward distribution (`RewardDistributionKind`) available:

1. **Mint**: Grants the mint authority of your reward token to the stake pool, allowing it to mint tokens on demand.
2. **Treasury**: Transfers reward tokens from your wallet to the stake pool. You will need to top up the stake pool treasury as needed.

## Environments

The staking program and related UIs are deployed on both the Solana mainnet-beta and devnet environments. By default, the UI points to mainnet. 

To switch to devnet, append `?cluster=devnet` to the URL. All configurations, including pools, reward distributors, tokens, NFTs, and SOL, are environment-specific. No data will be carried over between mainnet and devnet.

---

This `README.md` file provides clear instructions and details about the pool creation and reward distribution parameters, as well as how to manage different environments. Let me know if you need any further modifications!