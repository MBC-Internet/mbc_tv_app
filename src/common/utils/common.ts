/**
 * @title 모바일 타입 체크
 * @returns ios, android, web
 */
export const checkMobile = (): string => {
	const varUA = navigator.userAgent.toLowerCase();
	let userAgent = '';
	if (/android/i.test(varUA)) {
		userAgent = 'android';
	} else if (/iphone|ipad|ipod|mac/i.test(varUA)) {
		userAgent = 'ios';
	} else {
		userAgent = 'other';
	}
	return userAgent;
};

/**
 * @title dateTime url 콜백 파라미터
 * @returns ?date= {yyyymmdd}
 */
export const getDateFormat = (): string => {
	const date = new Date();
	const MM = date.getMonth() + 1;
	const dd = date.getDate();
	const hh = date.getHours();
	const mm = date.getMinutes();

	return [
		date.getFullYear(),
		(MM > 9 ? '' : '0') + MM,
		(dd > 9 ? '' : '0') + dd,
		(hh > 9 ? '' : '0') + hh,
		(mm > 9 ? '' : '0') + mm,
	].join('');
};
