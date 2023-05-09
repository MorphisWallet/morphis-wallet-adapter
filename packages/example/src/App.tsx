import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WalletKitProvider } from '@mysten/wallet-kit'

import Home from './pages/home'
import WithWalletKit from './pages/with_wallet_kit'
// import WithLegacyWalletAdapter from './pages/with_legacy_wallet_adapter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'with-wallet-kit',
    element: (
      <WalletKitProvider>
        <WithWalletKit />
      </WalletKitProvider>
    ),
  },
  // {
  //   path: 'with-legacy-wallet-adapter',
  //   element: (
  //     <WalletKitProvider adapters={[new MorphisWalletAdapter()]}>
  //       <WithLegacyWalletAdapter />
  //     </WalletKitProvider>
  //   ),
  // },
])

export default function App() {
  return <RouterProvider router={router} />
}
