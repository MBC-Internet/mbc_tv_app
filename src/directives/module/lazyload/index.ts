/* eslint-disable @typescript-eslint/no-explicit-any */
export const lazyLoad: any = {
	mounted(el: Element) {
		function imageLoad(targetElement: any) {
			const imgElement = targetElement;
			imgElement.setAttribute('src', imgElement.getAttribute('data-url'));
			imgElement.onload = function () {
				imgElement.removeAttribute('data-url');
			};
		}

		function callIntersectionApi() {
			const options = {
				root: null,
				threshold: 0.5,
				rootMargin: '20px',
			};

			const lazyLoadCallback = (
				entries: any[],
				observer: { unobserve: (arg0: any) => void },
			) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						imageLoad(entry.target);
						observer.unobserve(entry.target);
					}
				});
			};

			const lazyLoadingIO = new IntersectionObserver(lazyLoadCallback, options);
			lazyLoadingIO.observe(el);
		}
		window.IntersectionObserver ? callIntersectionApi() : imageLoad(el);
	},
};
