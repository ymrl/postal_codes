import { othersItemStyle, othersStyle } from "./Others.css";

export const Others = ({ list }: { list: (string | false)[] }) => (
  <ul className={othersStyle}>
    {list.map(
      (item, i) =>
        item && (
          <li key={i} className={othersItemStyle}>
            {item}
          </li>
        ),
    )}
  </ul>
);
