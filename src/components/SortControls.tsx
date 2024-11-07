import React from 'react';
import styles from '../styles/SortControls.module.css';

interface SortControlsProps {
  sortOrder: "alphabetical" | "date";
  setSortOrder: React.Dispatch<React.SetStateAction<"alphabetical" | "date">>;
}

const SortControls: React.FC<SortControlsProps> = ({ sortOrder, setSortOrder }) => (
  <div className={styles.sortControls}>
    <button onClick={() => setSortOrder('alphabetical')} className={sortOrder === 'alphabetical' ? styles.active : ''}>Sort A-Z</button>
    <button onClick={() => setSortOrder('date')} className={sortOrder === 'date' ? styles.active : ''}>Sort by Date</button>
  </div>
);

export default SortControls;
