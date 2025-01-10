export class Update {
	private static _instance: Update

	// 更新回数
	public count = 0

	// 毎フレーム実行させる関数を保持
	private _updateList: Array<() => void> = []

	public play = true

	constructor() {
		window.requestAnimationFrame(this._update)
	}

	public static get instance(): Update {
		if (!Update._instance) {
			Update._instance = new Update()
		}
		return Update._instance
	}

	public add(f: () => void) {
		this._updateList.push(f)
	}

	public remove(f: () => void) {
		// 削除したい関数以外が入った配列を作成してUpdateListに入れている
		const arr: Array<() => void> = []
		for (const val of this._updateList) {
			if (val !== f) {
				arr.push(val)
			}
		}
		this._updateList = arr
	}

	_update = () => {
		if (this.play) {
			for (const item of this._updateList) {
				if (item != null) item()
			}
			this.count++
			window.requestAnimationFrame(this._update)
		}
	}
}
