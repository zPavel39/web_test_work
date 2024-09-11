import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import StockAccounting from './page/stock-accounting/StockAccounting.tsx'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/stock-accounting' element={<StockAccounting />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
