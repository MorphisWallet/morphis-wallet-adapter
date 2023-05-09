import { Link } from 'react-router-dom'
import cl from 'classnames'
import { useWalletKit } from '@mysten/wallet-kit'

import WalletConnect from './components/wallet_connect'

export default function WithLegacyWalletAdapter() {
  const { isConnected, isConnecting } = useWalletKit()

  const handleTransaction = async () => {
    if (!isConnected) return

    try {
      //
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <div className="flex flex-col grow p-4">
      <div className="flex justify-between">
        <Link to="/">⬅️ Back to Home</Link>
        <WalletConnect />
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-4xl mb-4">Legacy Wallet Adapter example</h1>
        <button
          disabled={!isConnected || isConnecting}
          onClick={handleTransaction}
          className={cl([
            'bg-teal-500 hover:bg-teal-700 px-5 py-2 leading-5 rounded-full font-semibold text-white',
            !isConnected &&
              'bg-neutral-500 hover:bg-neutral-700 cursor-not-allowed',
          ])}
        >
          {isConnecting ? 'connecting...' : 'Send Transaction'}
        </button>
      </div>
    </div>
  )
}
