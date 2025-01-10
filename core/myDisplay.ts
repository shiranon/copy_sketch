import { Display, type DisplayConstructor } from '../libs/display'
import { Point } from '../libs/point'
import { Rect } from '../libs/rect'
import { Util } from '../libs/util'

export class MyDisplay extends Display {
	private _updateHandler: (() => void) | null
	private _resizeHandler: (() => void) | null

	protected _isVisible = true
	protected _displayId = 0
	protected _elSize: Rect = new Rect()
	protected _counter = 0
	protected _isEnter = false
	protected _isOneEnter = false
	protected _observer: IntersectionObserver
	protected _elPoint: Point = new Point(0, 9999)
	protected _eRollOverHandler
	protected _eRollOutHandler

	public set isEnter(v: boolean) {
		this._isEnter
	}

	public get isEnter(): boolean {
		return this._isEnter
	}

	protected _isShow = false

	public set isShow(b: boolean) {
		this._isShow = b
	}

	public get isShow(): boolean {
		return this._isShow
	}

	constructor(options: DisplayConstructor) {
		super(options)
		this._displayId = Number(options.displayId)

		this._updateHandler = this._update.bind(this)
	}

	init() {
		super.init()
	}

	protected _update(): void {
		this._counter++
	}

	protected _setClickEvent(element:HTMLElement,func:)

	protected _resize(): void {}

	protected _tag(tag: string, c = ''): HTMLElement {
		const t = document.createElement(tag)
		if (c !== '') t.classList.add(c)
		return t
	}

	public map(
		num: number,
		toMin: number,
		toMax: number,
		fromMin: number,
		fromMax: number,
	): number {
		return Util.map(num, toMin, toMax, fromMin, fromMax)
	}

	public setVisible(b: boolean): void {
		this._isVisible = b
		if (b) {
			this.removeClass('-hide')
		}
		this.addClass('-hide')
	}

	public list(sel: string, arr: Array<HTMLElement>): void {
		for (const el of this.qsAll(sel)) {
			arr.push(el)
		}
	}
}
