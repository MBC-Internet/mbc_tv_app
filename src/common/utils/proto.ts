/**
 * @title Array type check
 * @param array
 * @param cls
 * @returns boolean
 */
export function isArrayOf<T>(
	array: any[],
	cls: new (...args: any[]) => T,
): array is T[] {
	for (const item of array) {
		if (item != null) return item instanceof cls;
	}
	return false;
}
