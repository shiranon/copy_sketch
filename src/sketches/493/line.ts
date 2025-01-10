import { Color } from 'three'
import { MyDisplay } from '@core/myDisplay'
import { Func } from '@core/func'
import { Val } from '@libs/val'
import { DisplayConstructor } from '@libs/display'

export class Line extends MyDisplay {
	private _total: number = Func.val(30, 30)
	private _text: Array<{
		t: string
		start: number
		end: number
	}> = []

	private _allTexts =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	private _showRateA = new Val(0)
	private _showRateB = new Val(0)

	private _isShowed = false
	private _isLast = false

	constructor(option: DisplayConstructor, isLast = false) {
		super(option)

		this._isLast = isLast

		if (this._isLast) {
			this.addClass('-last')
		}

		let str = ''

		for (let i = 0; i < this._total; i++) {
			str += '<span style="color: #000">_</span>'
		}

		if (this.element) {
			this.element.innerHTML = str
		}
	}
}
