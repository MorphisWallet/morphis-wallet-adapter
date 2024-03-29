import { useState } from 'react'
import { useWalletKit } from '@mysten/wallet-kit'

export default function WalletConnect() {
  const {
    currentAccount,
    wallets,
    connect,
    disconnect,
    isConnected,
    isConnecting,
  } = useWalletKit()

  const [modalOpen, setModalOpen] = useState(false)

  const onConnect = (name: string) => {
    if (isConnecting || isConnected) return

    try {
      connect(name)
    } catch (e) {
      console.warn(e)
    }
  }

  const onDisconnect = () => {
    try {
      disconnect()
    } catch (e) {
      console.warn(e)
    }
  }

  if (currentAccount && isConnected) {
    return (
      <button
        onClick={onDisconnect}
        className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl px-4 py-2"
      >
        {`Disconnect ${currentAccount.address}`}
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl px-4 py-2"
      >
        Connect Wallet
      </button>
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center overflow-hidden z-[1010]">
          <div className="flex flex-col items-center relative bg-[#f1f1f1] border border-black rounded-xl shadow-md w-[360px] py-2 z-[1011]">
            <span
              onClick={() => setModalOpen(false)}
              className="absolute px-1.5 py-0.5 right-4 leading-4 cursor-pointer hover:bg-[#e4e4e4]"
            >
              x
            </span>
            <p className="text-center">Connect Wallet</p>
            <div className="text-bolder mb-6 text-sm text-rose-500">
              {`Detected ${wallets.length} wallet${
                wallets.length === 1 ? '' : 's'
              }`}
            </div>
            {wallets.map((wallet) => (
              <div
                key={wallet.name}
                className="flex items-center text-center my-2 px-3 py-3 rounded-md hover:bg-gray-300 cursor-pointer"
                onClick={() => onConnect(wallet.name)}
              >
                <img
                  src={wallet?.icon || 'https://placeholder.com/'}
                  className="w-8"
                />
                <div className="text-bold ml-3">{wallet.name}</div>
              </div>
            ))}
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50 z-[1010]"
            onClick={() => setModalOpen(false)}
          />
        </div>
      )}
    </>
  )
}
