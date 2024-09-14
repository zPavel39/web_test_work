export interface iGetMenuParams {
	page: number
	limit: number
	name?: string
	filial?: string
	tt?: string
	active?: 'active' | 'no_active' | 'all'
}

export interface iRoot {
	max_pages: number
	data: iItemMenu[]
}

export interface iItemMenu {
	id: number
	name: string
	filial: iFilial
	tt: iPoint
	active: boolean
	export: string[]
}

export interface iFilial {
	id: number
	name: string
}

export interface iPoint {
	id: number
	name: string
}

export interface iMenuColumnHeader {
	id: number
	name: string
	field: 'name' | 'filial' | 'tt' | 'active' | 'export'
	type: 'search' | 'select' | 'text'
	options?: iOptionsActive[]
}

export interface iOptionsActive {
	id: number
	name: string
	key: 'active' | 'no_active' | 'all'
}
export interface iPaginationSettings {
	page: number
	total: number
}
