export type FilterCondition = {
  query: string;
  partOfTown: boolean;
  spreadAcrossTowns: boolean;
  koaza: boolean;
  choume: boolean;
};
export type City = {
  code: string;
  prefKana: string;
  cityKana: string;
  pref: string;
  city: string;
};
export type Town = {
  number: string;
  code: string;
  townKana: string;
  town: string;
  part: boolean;
  spread: boolean;
  chome: boolean;
  koaza: boolean;
};
