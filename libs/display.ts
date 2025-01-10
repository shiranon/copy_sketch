export interface DisplayConstructor {
	element: HTMLElement | null
	displayId?: number
}

type RectType = {
	width: number | null
	height: number | null
}

type OffsetType = {
	x: number
	y: number
}

export class Display {
	options: DisplayConstructor | null
	element: HTMLElement | null

	constructor(options: DisplayConstructor) {
		this.options = options
		this.element = this.options.element
	}

	init() {}

	/**
	 * elementとoptionsを破棄する
	 */
	public dispose() {
		this.options = null
		this.element = null
	}

	/**
	 *
	 * @returns
	 */
	public getEl(): HTMLElement {
		if (!this.element) {
			throw new Error('Element is not initialized')
		}
		return this.element as HTMLElement
	}

	public hasData(name: string): boolean {
		const value = this.getEl().getAttribute(name)
		if (value === undefined) {
			return false
		}
		return true
	}

	public getData<T>(name: string, def: T): T {
		const value = this.getEl().getAttribute(name)
		if (value === undefined) {
			return def
		}
		return value as T
	}

	public qs(selector: string): HTMLElement | null {
		if (!this.element) return null
		return this.element.querySelector(selector) || null
	}

	public qsAll(selector: string): Array<HTMLElement> {
		if (!this.element) return []
		const elements = this.element.querySelectorAll(selector)
		return Array.from(elements) as Array<HTMLElement>
	}

	public hasClass(className: string): boolean {
		if (!this.element) return false
		return this.element.classList.contains(className)
	}

	public addClass(className: string): void {
		this.element?.classList.add(className)
	}

	public attachClass(
		element: HTMLElement | undefined,
		className: string,
	): void {
		element?.classList.add(className)
	}

	public detachClass(
		element: HTMLElement | undefined,
		className: string,
	): void {
		element?.classList.remove(className)
	}

	public removeClass(className: string): void {
		this.element?.classList.remove(className)
	}

	getWidth(element: Element | null): number {
		if (element === null) {
			return 0
		}
		const value = document.defaultView?.getComputedStyle(element, null).width
		return Number(value?.replace('px', ''))
	}

	getHeight(element: Element | null): number {
		if (element === null) {
			return 0
		}
		const value = document.defaultView?.getComputedStyle(element, null).height
		return Number(value?.replace('px', ''))
	}

	getRect(element: Element): RectType {
		const style = document.defaultView?.getComputedStyle(element, null)
		if (style !== undefined) {
			return {
				width: Number(style.width.replace('px', '')),
				height: Number(style.height.replace('px', '')),
			}
		}
		return {
			width: null,
			height: null,
		}
	}

	public getDataNumber(name: string): number {
		const data = this.getEl().getAttribute(name)
		if (data === undefined) {
			return 0
		}
		return Number(data)
	}

	public getOffsetTop(element: Element): number {
		const rect = element.getBoundingClientRect()
		const scrollTop = window.scrollY || document.documentElement.scrollTop
		return rect.top + scrollTop
	}

	public getOffset(element: Element): OffsetType {
		const rect = element.getBoundingClientRect()
		const scrollTop = window.scrollY || document.documentElement.scrollTop
		return {
			x: rect.left,
			y: rect.top + scrollTop,
		}
	}
}
