import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { measurePerformance, preloadCriticalResources } from './utils/performance.js'

// Initialize performance monitoring
measurePerformance();
preloadCriticalResources();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
