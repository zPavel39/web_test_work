import { useEffect } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/stock-accounting')
	}, [navigate])
	return (
		<>
			<Outlet />
		</>
	)
}

export default App
