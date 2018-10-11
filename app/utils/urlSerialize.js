/* eslint-disable no-restricted-syntax,prefer-template */
export default function urlSerialize(obj) {
	const str = [];
	for (const p in obj) {
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	}
	return str.join('&');
}
