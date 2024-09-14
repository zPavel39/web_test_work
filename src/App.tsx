import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/stock-accounting/stock-menu')
	}, [])
	return (
		<>
			<Outlet />
		</>
	)
}

export default App
