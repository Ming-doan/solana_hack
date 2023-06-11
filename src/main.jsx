import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WalletAdapter } from './components/walletAdapter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletAdapter>
    <App />
    </WalletAdapter>
  </React.StrictMode>,
)
