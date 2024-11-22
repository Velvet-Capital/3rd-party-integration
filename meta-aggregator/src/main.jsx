import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WagmiProviderComp } from './provider/WagmiProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProviderComp>
    <App />
    </WagmiProviderComp>
  </StrictMode>,
)
