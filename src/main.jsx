
import React from 'react'
import { createRoot } from 'react-dom/client'
import GiftSite from './GiftSite'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftSite />
  </React.StrictMode>,
)
