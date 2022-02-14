export interface NewsProxy {
	Data: News[];
}

export interface NewsDeskProxy {
	Data: NewsDesk[];
}

export interface News {
	Section: string;
	AId: string;
	Title: string;
	Desc: string;
	Image: string;
	Link: string;
	IsVod: string;
}

export interface NewsDesk {
	Section: string;
	AId: string;
	Image: string;
	Title: string;
	Link: string;
	StartDate: string;
	IsVod: string;
	Author: '';
}
