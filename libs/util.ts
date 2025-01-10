export class Util {
	private constructor() {}

	/**
	 * 値のマッピング
	 * @param num マッピングする値
	 * @param toMin 変換後の最小値
	 * @param toMax 変換後の最大値
	 * @param fromMin 変換前の最小値
	 * @param fromMax 変換前の最大値
	 * @returns
	 */
	public static map(
		num: number,
		toMin: number,
		toMax: number,
		fromMin: number,
		fromMax: number,
	): number {
		// 値が範囲外であれば最小、最大値を返す
		if (num <= fromMin) return toMin
		if (num >= fromMax) return toMax

		// 値から変化前最小値を引いて比率を掛けて変換後最小値を足す
		const p = (toMax - toMin) / (fromMax - fromMin)
		return (num - fromMin) * p + toMin
	}
}
