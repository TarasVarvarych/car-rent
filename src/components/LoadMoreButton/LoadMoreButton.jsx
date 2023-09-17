import css from "./LoadMoreButton.module.css";
export function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
