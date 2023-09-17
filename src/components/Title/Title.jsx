import css from "./Title.module.css";

export function Title({ text }) {
  return <h2 className={css.title}>{text}</h2>;
}
