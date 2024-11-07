import React, { memo } from 'react';
import styles from '../styles/ItemList.module.css';
import { Item } from '../types';

interface ItemListProps {
  items: Item[];
  view: "list" | "grid";
}

const ItemList: React.FC<ItemListProps> = memo(({ items, view }) => (
  <div className={view === "grid" ? styles.gridContainer : styles.listContainer}>
    {items.map(item => (
      <div key={item.id} className={styles.item}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <span>{item.date.toDateString()}</span>
      </div>
    ))}
  </div>
));

export default ItemList;
