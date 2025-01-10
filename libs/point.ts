export class Point {
	x = 0
	y = 0

	constructor(x = 0, y = 0) {
		this.x = x
		this.y = y
	}

	public set(x = 0, y = 0) {
		this.x = x
		this.y = y
	}

	public copy(p: Point) {
		this.x = p.x
		this.y = p.y
	}

	public distance(p: Point): number {
		const dx = this.x - p.x
		const dy = this.y - p.y
		return Math.sqrt(dx * dx + dy * dy)
	}
}
