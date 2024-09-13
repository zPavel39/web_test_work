import { useEffect } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

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
