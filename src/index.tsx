import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.tsx'
import { GlobalStyles } from '@globalStyles/globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
