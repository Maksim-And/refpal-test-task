export interface PlayerStatistic {
  playerName: string;
  countShort: number;
  countDefault: number;
  description: string;
  hasBackground: boolean;
  isShort: boolean;
  isNotAvailable: boolean;
}

interface Incident {
  id: number;
  minute: number;
  time: string;
  topic: string;
  subtopic: string;
  offender: {
    name: string;
    team: string;
    image: boolean;
  };
  decision: RefereeIconType;
  officialMark: number;
  myMark: null;
  communityMark: number;
  aa: number;
  hk: number;
  ko: number;
  hasMessage: boolean;
  playersStatistic: PlayerStatistic[];
}

export interface IncidentTopic {
  id: number;
  topic: string;
  incidents: Incident[];
}

export interface SimilarIncident {
  date: string;
  team1: string;
  team2: string;
  image: number;
  playerName: string;
  scale: number;
  season: string;
  topic: string;
  subtopic: string;
  referee: string;
}

export interface IFilters {
  team: string;
  referee: string;
  scale: string;
  fromDate: string;
  toDate: string;
  sortBy: string;
  sortOrder: string;
  season: string;
  topic: string;
  subtopic: string;
  decreasing: string;
  byDate: string;
}

export enum FilterValues {
  Team = "team",
  Referee = "referee",
  Scale = "scale",
  FromDate = "fromDate",
  ToDate = "toDate",
  SortBy = "sortBy",
  SortOrder = "sortOrder",
  Season = "season",
  Topic = "topic",
  Subtopic = "subtopic",
  Decreasing = "decreasing",
  ByDate = "byDate",
  Desc = "desc",
  Asc = "asc",
}

export enum RefereeIconType {
  YellowCard = "yellow-card",
  Replay = "replay",
  Whistle = "whistle",
  Flag = "flag",
}
