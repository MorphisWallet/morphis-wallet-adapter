# Morphis Wallet Adapter Demo

### Before we start

There're ways to integrate your dApp with the wallet adapters. Here're some demo to make it easy for you to do this.

### 1. Use Sui Wallet Kit (Highly recommended)

Sui Wallet Kit is a library that makes it easy to connect your dApp to Sui wallets. It wraps the underlying Sui Wallet Adapters and comes pre-configured with sane defaults.

#### Getting started

To get started in a React application, you can install the following packages:

```bash
npm install @mysten/wallet-kit
```

At the root of your application, you can then set up the wallet kit provider:

```tsx
import { WalletKitProvider } from '@mysten/wallet-kit'

export function App() {
  return <WalletKitProvider>{/* Your application... */}</WalletKitProvider>
}
```

> The `WalletKitProvider` also supports an `adapters` prop, which lets you override the default Sui Wallet Adapters.

You can then add a **Connect Wallet** button to your page:

```tsx
import { ConnectButton } from '@mysten/wallet-kit'

function ConnectToWallet() {
  return (
    <div>
      Connect wallet to get started:
      <ConnectButton />
    </div>
  )
}
```

To get access to the currently connected wallet, use the `useWallet()` hook to interact with the wallet, such as proposing transactions:

```tsx
import { useWallet } from '@mysten/wallet-kit'

export function SendTransaction() {
  const { connected, getAccounts, signAndExecuteTransaction } = useWallet()

  const handleClick = async () => {
    await signAndExecuteTransaction({
      kind: 'moveCall',
      data: {
        packageObjectId: '0x2',
        module: 'devnet_nft',
        function: 'mint',
        typeArguments: [],
        arguments: [
          'name',
          'capy',
          'https://cdn.britannica.com/94/194294-138-B2CF7780/overview-capybara.jpg?w=800&h=450&c=crop',
        ],
        gasBudget: 10000,
      },
    })
  }

  return (
    <Button onClick={handleClick} disabled={!connected}>
      Send Transaction
    </Button>
  )
}
```

#### Usage without React

We do not currently have non-React UI libraries for connecting to wallets. The wallet adapters and logic in the React library (`@mysten/wallet-adapter-react`) can be used as reference for implementing a wallet connection UI in other UI libraries.

#### Supported wallets

Wallet Kit comes pre-configured with every supported wallet. You can also install individual wallet adapters that you plan on using in your project.

### Wallet Standard

The `WalletStandardAdapterProvider` adapter (published under `@mysten/wallet-adapter-wallet-standard`) automatically supports wallets that adhere to the cross-chain [Wallet Standard](https://github.com/wallet-standard/wallet-standard/). This adapter detects the available wallets in users' browsers. You do not need to configure additional adapters.

The following wallets are known to work with the Wallet Standard:

- **[Sui Wallet](https://docs.sui.io/devnet/explore/wallet-browser)**
- **[Morphis Wallet](https://morphiswallet.com/)**
- **[Ethos Wallet](https://chrome.google.com/webstore/detail/ethos-wallet/mcbigmjiafegjnnogedioegffbooigli)**
- **[Suiet Wallet](https://suiet.app/)**

### 2. Use Legacy Sui Wallet Provider and Morphis Wallet Adapter

Since @mysten/wallet-adapter-react@^3.0.0, the wallet adapter automatically detects wallets that adhere to the standard interface by Wallet Standard. However, if you still use legacy packages like @mysten/wallet-adapter-react@^2.0.0 or ealier versions, you have to install Morphis Wallet Adapter and put it into the provider.

#### Getting started

To get started in a React application, you can install the following packages:

```bash
npm install @morphis-wallet/morphis-wallet-adapter
```

At the root of your application, you can then set up the wallet kit provider:

```tsx
import { Wallet, WalletProvider } from '@mysten/wallet-adapter-react'
import { MorphisWalletAdapter } from '@morphis-wallet/morphis-wallet-adapter'

export default function App() {
  return (
    <WalletProvider
      supportedWallets={[{ adapter: new MorphisWalletAdapter() } as Wallet]}
    >
      <WithLegacyWalletAdapter />
    </WalletProvider>
  )
}
```

Then in your components, use the hook `useWallet` to get the wallet information and methods.

```
import { useWallet } from "@mysten/wallet-adapter-react";

export default function Page() {
  const { supportedWallets, connect } = useWallet();

  return (
    <div>
      {supportedWallets.map((wallet) => (
        <div
          key={wallet.adapter.name}
          onClick={() => connect(wallet.adapter.name)}
        >
          {wallet.adapter.name}
        </div>
      ))}
    </div>
  )
}
```
