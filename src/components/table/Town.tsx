export const Town = ({
  kana,
  kanji,
  showRuby,
}: {
  kanji: string;
  kana: string;
  showRuby: boolean;
}) => {
  if (!showRuby) return <span>{kanji}</span>;
  const symbols = /([（）、・〔〕])/;
  const splittedKanji = kanji.split(symbols);
  const splittedKana = kana.split(symbols);

  return (
    <span data-kana={kana} data-kanji={kanji}>
      {Array(Math.max(splittedKanji.length, splittedKana.length))
        .fill(null)
        .map((_, i) =>
          splittedKana[i] && !splittedKana[i].match(symbols) ? (
            <ruby key={i}>
              {splittedKanji[i]}
              <rp>(</rp>
              <rt>{splittedKana[i]}</rt>
              <rp>)</rp>
            </ruby>
          ) : (
            splittedKanji[i]
          ),
        )}
    </span>
  );
};
