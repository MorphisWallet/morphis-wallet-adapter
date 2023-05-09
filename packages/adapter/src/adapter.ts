import {
  SUI_DEVNET_CHAIN,
  SUI_TESTNET_CHAIN,
  SUI_MAINNET_CHAIN,
  type WalletVersion,
  type SuiSignAndExecuteTransactionBlockInput,
  type SuiSignTransactionBlockInput,
  type SuiSignMessageInput,
} from '@mysten/wallet-standard'
import { StandardWalletAdapter } from '@mysten/wallet-adapter-wallet-standard'
import { StandardWalletAdapterConfig } from '@mysten/wallet-adapter-wallet-standard/dist/StandardWalletAdapter'

import { MorphisIcon } from './icon'

export class MorphisWalletAdapter extends StandardWalletAdapter {
  constructor() {
    super({
      wallet: {
        name: 'Morphis Wallet',
        icon: MorphisIcon,
        version: '1.0.0' as WalletVersion,
        chains: [SUI_DEVNET_CHAIN, SUI_TESTNET_CHAIN, SUI_MAINNET_CHAIN],
        accounts: [],
        features: {
          'standard:connect': {
            version: '1.0.0',
            connect: async () => {
              await this.connect()
              return this.wallet
            },
          },
          'standard:events': {
            version: '1.0.0',
            on: (...args) => this.on(...args),
          },
          'sui:signAndExecuteTransactionBlock': {
            version: '1.0.0',
            signAndExecuteTransactionBlock: async (
              input: SuiSignAndExecuteTransactionBlockInput
            ) => {
              return await this.signAndExecuteTransactionBlock(input)
            },
          },
          'sui:signTransactionBlock': {
            version: '1.0.0',
            signTransactionBlock: async (input: SuiSignTransactionBlockInput) =>
              await this.signTransactionBlock(input),
          },
          'sui:signMessage': {
            version: '1.0.0',
            signMessage: async (input: SuiSignMessageInput) =>
              await this.signMessage(input),
          },
        },
      },
    } as StandardWalletAdapterConfig)
  }
}
