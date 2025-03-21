export type PlayerStatistic = {
  playerName: string;
  countShort: number;
  countDefault: number;
  description: string;
  hasBackground: boolean;
  isShort: boolean;
  isNotAvailable: boolean;
};

type Incident = {
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
  decision: string;
  officialMark: number;
  myMark: null;
  communityMark: number;
  aa: number;
  hk: number;
  ko: number;
  hasMessage: boolean;
  playersStatistic: PlayerStatistic[];
};

export type IncidentTopic = {
  id: number;
  topic: string;
  incidents: Incident[];
};

export type SimilarIncident = {
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
};

export type IFilters = {
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
};
