export interface ShoppingItem {
  id: number;
  product: string;
  isChecked: boolean;
}

export type ShoppingItemFunctions = {
  removeItem: (id: number) => void;
  checkItem: (id: number) => void;
  uncheckItem: (id: number) => void;
};