import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SudokuProvider } from './contexts/Sudoku.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SudokuProvider>
    <App />
  </SudokuProvider>,
)
