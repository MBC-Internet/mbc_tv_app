export interface ProgramPromotion {
	Title: string;
	BID: string;
	Image: string;
	FontColor: string;
	RelationContents?: ProgramPromotionData[];
}
export interface IReplayListProxy {
	BBSID: string;
	BBSURL: string;
	BroadCastID: string;
	BroadDate: string;
	BroadDateString: string;
	Category: string;
	ContentNumber: string;
	ContentType: number;
	ContentTypeName: string;
	Duration: string;
	Image: string;
	IsNewWindow: boolean;
	IsText: boolean;
	ListID: number;
	Priority: string;
	ProgramID: string;
	ProgramTitle: string;
	SubCategoryID: number;
	Title: string;
	URL: string;
}

export interface UserSeamProxy {
	SeamList: UserSeam[];
}

export interface UserSeam {
	ProgramId: string;
	ProgramTitle: string;
	ContentTitle: string;
	ContentNumber: string;
	BroadDate: string;
	ContentImg: string;
	Preview: string;
	VodItemId: string;
	DownItemId: string;
	TargetAge: number;
	ContentTypeId: string;
	TotalDuration: number;
	LinkUrl: string;
	VodType: string;
	Uno: string;
	ContentId: string;
	MediaTime: number;
	ViewDate: string;
}

export interface OldRecommendVodProxy {
	Channel: string;
	Link: string;
	List: OldRecommendVod[];
}

export interface OldRecommendVod {
	BID: string;
	Image: string;
	Title: string;
	URL: string;
}

export interface EditorPickList {
	ChannelID: number;
	EditorIdx: number;
	totalCnt: number;
	List: EditorPick[];
}

export interface EditorPick {
	BGImage: string;
	ChannelID: number;
	EditorTitle: string;
	List: EditorSubPick[];
}

export interface EditorSubPick {
	BID: string;
	ContentType: string;
	Image: string;
	Link: string;
	PlayTime: string;
	Title: string;
}

export type ProgramPromotionData = IReplayListProxy;
export type BestVod = IReplayListProxy;
export type NewestVod = IReplayListProxy;

export type PreviewVod = MbcDataInterface;
export type SketchVod = MbcDataInterface;
