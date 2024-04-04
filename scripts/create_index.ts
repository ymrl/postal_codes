import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
const directory = "./public/data";
execSync(`mkdir -p ${directory}`);
const raw = readFileSync(`${directory}/ken_all.json`, "utf-8");
const json = JSON.parse(raw);
const { kenAll, timestamp } = json;
const arr: string[][] = Array.from(kenAll).map((a: unknown) =>
  Array.isArray(a) ? a.map((e) => "" + e) : [],
);

const cities = {};
arr.forEach(
  (a) =>
    (cities[a[0]] = cities[a[0]] || {
      code: a[0],
      prefKana: a[3],
      cityKana: a[4],
      pref: a[6],
      city: a[7],
    }),
);
writeFileSync(
  `${directory}/cities.json`,
  JSON.stringify({ timestamp, cities }),
);

const numbers = arr.map((a) => a[2]);
writeFileSync(
  `${directory}/numbers.json`,
  JSON.stringify({ timestamp, numbers }),
);

const towns = {};
arr.forEach(
  (a) =>
    (towns[a[2]] = towns[a[2]] || {
      number: a[2],
      code: a[0],
      townKana: a[5],
      town: a[8],
      part: a[9] === "1",
      spread: a[10] === "1",
      chome: a[11] === "1",
      koaza: a[12] === "1",
    }),
);
writeFileSync(`${directory}/towns.json`, JSON.stringify({ timestamp, towns }));

Array(10)
  .fill(0)
  .forEach((_, i) => {
    const t: typeof towns = {};
    Object.keys(towns)
      .filter((k) => k.substring(0, 1) === `${i}`)
      .forEach((k) => (t[k] = towns[k]));
    writeFileSync(
      `${directory}/towns${i}00.json`,
      JSON.stringify({ timestamp, towns: t }),
    );
  });

//  0 全国地方公共団体コード（JIS X0401、X0402）………　半角数字
//  1 （旧）郵便番号（5桁）………………………………………　半角数字
//  2 郵便番号（7桁）………………………………………　半角数字
//  3 都道府県名　…………　全角カタカナ（コード順に掲載）　（※1）
//  4 市区町村名　…………　全角カタカナ（コード順に掲載）　（※1）
//  5 町域名　………………　全角カタカナ（五十音順に掲載）　（※1）
//  6 都道府県名　…………　漢字（コード順に掲載）　（※1,2）
//  7 市区町村名　…………　漢字（コード順に掲載）　（※1,2）
//  8 町域名　………………　漢字（五十音順に掲載）　（※1,2）
//  9 一町域が二以上の郵便番号で表される場合の表示　（※3）　（「1」は該当、「0」は該当せず）
// 10 小字毎に番地が起番されている町域の表示　（※4）　（「1」は該当、「0」は該当せず）
// 11 丁目を有する町域の場合の表示　（「1」は該当、「0」は該当せず）
// 12 一つの郵便番号で二以上の町域を表す場合の表示　（※5）　（「1」は該当、「0」は該当せず）
// 13 更新の表示（※6）（「0」は変更なし、「1」は変更あり、「2」廃止（廃止データのみ使用））
// 14 変更理由　（「0」は変更なし、「1」市政・区政・町政・分区・政令指定都市施行、「2」住居表示の実施、「3」区画整理、「4」郵便区調整等、「5」訂正、「6」廃止（廃止データのみ使用））
