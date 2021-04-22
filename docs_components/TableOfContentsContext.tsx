import { createContext, FC, useContext, useState } from "react";

interface ITableOfContentsItem {
  link: string;
  name: string;
}

export interface ITableOfContentsContext {
  contents: Array<ITableOfContentsItem>;
  addContentItem: (item: ITableOfContentsItem) => void;
}

const TableOfContentsContext = createContext<ITableOfContentsContext>({
  contents: [],
  addContentItem: () => null,
});

export const useTableOfContents = () => useContext(TableOfContentsContext);

export const TableOfContentsContextProvider: FC = ({ children }) => {
  const [items, setItems] = useState<Array<ITableOfContentsItem>>([]);

  const addContentItem = (item: ITableOfContentsItem) => {
    if (items.every((currItem) => item.link !== currItem.link))
      setItems((prev) => ([...prev, item]));
  }

  return (
    <TableOfContentsContext.Provider value={{ addContentItem, contents: items }}>
      {children}
    </TableOfContentsContext.Provider>
  )
}

