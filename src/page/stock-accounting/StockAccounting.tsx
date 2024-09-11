import React from 'react'
import { useGetFilialQuery } from '../../store/filial-store/filial-api'

const StockAccounting: React.FC = () => {
	const { data } = useGetFilialQuery()
	return <div>{data ? data.length : 0}</div>
}

export default StockAccounting
