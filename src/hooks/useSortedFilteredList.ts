import { useMemo } from 'react';
import { Item } from '../types';

function useSortedFilteredList(
  data: Item[],
  sortOrder: "alphabetical" | "date",
  searchTerm: string
): Item[] {
  return useMemo(() => {
    let filteredList = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredList.sort((a, b) => {
      if (sortOrder === 'alphabetical') {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === 'date') {
        return b.date.getTime() - a.date.getTime();
      }
      return 0;
    });

    return filteredList;
  }, [data, sortOrder, searchTerm]);
}

export default useSortedFilteredList;
