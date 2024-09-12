export interface iGetMenuParams {
	limit: number
	page: number
	name?: string
	filial?: string
	tt?: string
	active?: 'active' | 'no_active'
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
