import React from "react";
import { SettingsContext } from "../../../contexts";

export const RubyText = ({ kana, kanji }: { kanji: string; kana: string }) => {
  const { showRuby } = React.useContext(SettingsContext);
  if (!showRuby) return <span>{kanji}</span>;
  const symbols = /([（）、・〔〕])/;
  const splittedKanji = kanji.split(symbols);
  const splittedKana = kana.split(symbols);
  return (
    <span>
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
