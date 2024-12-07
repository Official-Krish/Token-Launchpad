import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'
import { Toaster } from 'sonner';
import { Home } from './pages/Hero';
import Footer from './components/Footer';
import Appbar from './components/Appbar';
import Swap from './pages/Swap';

function App() {
  const network = 'devnet'
  const endpoint = clusterApiUrl(network)

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <RecoilRoot>
            <Router>
              <div className="flex w-full">
                <div className="w-full">
                  <Appbar />
                  <main className='min-h-[80vh]'>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/swap' element={<Swap />} />
                    </Routes>
                  </main>
                  <Footer />
                  <Toaster />
                </div>
              </div>
            </Router>
          </RecoilRoot>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider >
  )
}

export default App