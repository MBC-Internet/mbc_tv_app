const saveUserAgentToCookie = (value: string): void => {
	document.cookie = `mbc_mobile=${value}`;
};

const getUserAgentFromCookie = () => {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)mbc_mobile\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
};

const deleteCookie = (value: string): void => {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export { saveUserAgentToCookie, getUserAgentFromCookie, deleteCookie };
