import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserAuthContextProvider from './context/UserAuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<UserAuthContextProvider>
			<App />
		</UserAuthContextProvider>
	</BrowserRouter>
)
