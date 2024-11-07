import React from 'react';
import styles from '../styles/ViewToggle.module.css';

interface ViewToggleProps {
  view: "list" | "grid";
  setView: React.Dispatch<React.SetStateAction<"list" | "grid">>;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, setView }) => (
  <div className={styles.viewToggle}>
    <button
      onClick={() => setView("list")}
      className={`${styles.toggleButton} ${view === "list" ? styles.active : ""}`}
    >
      List View
    </button>
    <button
      onClick={() => setView("grid")}
      className={`${styles.toggleButton} ${view === "grid" ? styles.active : ""}`}
    >
      Grid View
    </button>
  </div>
);

export default ViewToggle;
