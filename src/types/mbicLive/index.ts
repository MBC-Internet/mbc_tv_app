import { IOnAirListSchema } from '..';

export interface mbicLiveData extends IOnAirListSchema {
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
