type PlayersStatistic = {
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
  playersStatistic: PlayersStatistic[];
};

export type IncidentTopic = {
  id: number;
  topic: string;
  incidents: Incident[];
};

export type Images = {
  date: string;
  team1: string;
  team2: string;
  image: number;
  playerName: string;
  score: number;
};
