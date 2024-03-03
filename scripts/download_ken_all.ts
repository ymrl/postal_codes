import { execSync } from "child_process";
import { parse } from "csv-parse/sync";
import { readFileSync, writeFileSync } from "fs";

const now = new Date();
execSync(
  "curl -o utf_ken_all.zip https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip",
);
execSync("unzip utf_ken_all.zip");
const csv = readFileSync("utf_ken_all.csv", "utf-8");
writeFileSync(
  "./public/ken_all.json",
  JSON.stringify({ kenAll: parse(csv), downloadedAt: now.toISOString() }),
);
execSync("rm utf_ken_all.zip utf_ken_all.csv");
