export class Rect {
	x = 0
	y = 0
	width = 0
	height = 0

	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	public setSize(w: number, h: number) {
		this.width = w
		this.height = h
	}

	public copy(r: Rect) {
		this.x = r.x
		this.y = r.y
		this.width = r.width
		this.height = r.height
	}
}
