import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import StockAccounting from './page/stock-accounting/StockAccounting.tsx'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import StockInvoices from './page/stock-accounting/stock-invoices/StockInvoices.tsx'
import StockComponents from './page/stock-accounting/stock-components/StockComponents.tsx'
import StockMenu from './page/stock-accounting/stock-menu/StockMenu.tsx'
import StockInventory from './page/stock-accounting/stock-inventory/StockInventory.tsx'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='stock-accounting' element={<StockAccounting />}>
						<Route path='stock-invoices' element={<StockInvoices />} />
						<Route path='stock-components' element={<StockComponents />} />
						<Route path='stock-menu' element={<StockMenu />} />
						<Route path='stock-inventory' element={<StockInventory />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
