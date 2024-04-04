import { KenAllDispatch } from "./reducer";
import { TownFiles } from "./constants";
import { City, Town } from "./types";

export const downloadNumbers = async (dispatch: KenAllDispatch) => {
  const res = await fetch("./data/numbers.json");
  const text = await res.text();
  const json = JSON.parse(text);
  const numbers: string[] =
    json.numbers?.map((n: number) => n.toString()) || [];
  const timestamp: Date | null = json.timestamp
    ? new Date(Date.parse(json.timestamp))
    : null;
  dispatch({ type: "DOWNLOADED_NUMBERS", payload: { numbers, timestamp } });
};

export const downloadCities = async (dispatch: KenAllDispatch) => {
  const res = await fetch("./data/cities.json");
  const text = await res.text();
  const json = JSON.parse(text);
  const cities: { [code: string]: City } = json.cities || {};
  dispatch({ type: "DOWNLOADED_CITIES", payload: { cities } });
};

let downloadingTownFiles: (typeof TownFiles)[number][] = [];
export const downloadTowns = async (
  dispatch: KenAllDispatch,
  file: (typeof TownFiles)[number],
) => {
  if (downloadingTownFiles.includes(file)) return;
  downloadingTownFiles.push(file);
  const res = await fetch(`./data/towns${file}.json`);
  const text = await res.text();
  const json = JSON.parse(text);
  const towns: { [number: string]: Town } = json.towns || {};
  dispatch({ type: "DOWNLOADED_TOWNS", payload: { towns, file } });
  downloadingTownFiles = downloadingTownFiles.filter((f) => f !== file);
};
