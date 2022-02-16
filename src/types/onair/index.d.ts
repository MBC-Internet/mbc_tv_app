import { IOnAirListSchema, ISportsListSchema } from '..';

export interface OnairData extends IOnAirListSchema {
	Type: string;
	ScheduleCode: string;
	MediaCode: string;
	HomepageURL: string;
	Photo: string;
	IsOnAirNow: string;
	TargetAge: string;
	OrderNum: number;
	TalkID: number;
	Content: string;
}

export interface SportsLiveData extends ISportsListSchema {
	IsOnAir: string;
	Date: string;
	link: string;
	IsStart: string;
	TitleImage: string;
	SportsCode: string;
	SportTitle: string;
	Content: string;
	HeightImage: string;
	TalkID: number;
}
