import { Conf } from './conf'
import { ScreenType } from './screenType'

export class Func {
	/**
	 * CSSピクセルの解像度と物理ピクセルの解像度の比を返す
	 * @returns window.devicePixelRatio || 1
	 */
	public static ratio(): number {
		return window.devicePixelRatio || 1
	}

	/**
	 * 引数の数字にpxを付けて返す
	 * @param num
	 * @returns ${num}px
	 */
	public static px(num: number): string {
		return `${num}px`
	}

	/**
	 * 画面オブジェクトが参照出来るかを返す
	 * @returns boolean
	 */
	public static useScreen(): boolean {
		return screen !== undefined
	}

	/**
	 * ScreenWidthを返す
	 * @returns document.body.clientWidth
	 */
	public static sw(): number {
		return document.body.clientWidth
	}

	/**
	 * ウィンドウの内部の高さをピクセル単位で返す
	 * @returns window.innerHeight
	 */
	public static sh(): number {
		return window.innerHeight
	}

	/**
	 * ウィンドウの幅とブレイクポイントによってScreenTypeのメンバを返す
	 * @returns ScreenType.~~
	 */
	public static screen(): number {
		if (window.innerWidth <= Conf.BREAKPOINT) {
			return ScreenType.XS
		}
		return ScreenType.LG
	}

	public static isXS(): boolean {
		return Func.screen() === ScreenType.XS
	}

	public static isLG(): boolean {
		return Func.screen() === ScreenType.LG
	}

	/**
	 * ウィンドウの幅
	 * @param xs
	 * @param lg
	 * @returns
	 */
	public static val(xs: number, lg: number): number {
		if (Func.isXS()) {
			return xs
		}
		return lg
	}
}
