export interface MbcDataProxy {
	Data: MbcDataInterface[];
}

export interface MbcDataInterface {
	Division: Division;
	DivisionType: string;
	Info: MbcDataInterface_Info;
}

interface MbcDataInterface_Info {
	Program: string;
	Title: string;
	Desc: string;
	BroadDate: string;
	Image: string;
	Progress: string;
	Relation: MbcDataInterface_Info_Relation;
}
interface MbcDataInterface_Info_Relation {
	ActionType: string;
	BID: string;
	ContentNumber: null;
	ContentImage: string;
	TalkID: string;
	Keyword: null;
	LinkType: string;
	LinkURL: string;
	NoticeMsg: string;
	ScheduleCode: string;
}

export interface IOnAirListSchema {
	OnAirImage: string;
	Title: string;
	percentTime: number;
	TypeTitle: string;
	StartTime: string;
	EndTime: string;
}

export interface ISportsListSchema {
	Title: string;
	percentTime: string;
	StartDate: string;
	EndTDate: string;
	OnAirAttr: string;
}

enum Division {
	Banner = 'Banner',
}
