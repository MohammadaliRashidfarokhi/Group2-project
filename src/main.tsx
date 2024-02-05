import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DarkModeContextProvider } from './context/darkModeContext.tsx'
// import { AuthContext } from '@/context/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      {/*<AuthContext>*/}
      <App />
      {/*</AuthContext>*/}
    </DarkModeContextProvider>
  </React.StrictMode>,
)
