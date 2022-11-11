import { ColumnInterface } from "../interfaces/column.interface";

export const COLUMN_LIST: ColumnInterface[] = [
  {
    label: '#',
    shortcut: 'number',
    position: 0,
    selected: true
  },
  {
    label: 'Rank',
    shortcut: 'rank',
    position: 0,
    selected: true
  },
  {
    label: 'Coin',
    shortcut: 'coin',
    position: 0,
    selected: true
  },
  {
    label: 'Coin price',
    shortcut: 'price',
    position: 3,
    selected: true
  },
  {
    label: 'Total coins',
    shortcut: 'totalCoins',
    position: 1,
    selected: true
  },
  {
    label: 'Amount in currency',
    shortcut: 'totalInCurrency',
    position: 7,
    selected: true
  },
  {
    label: 'Total spent usd',
    shortcut: 'investedAmount',
    position: 2,
    selected: true
  },
  {
    label: 'Average price',
    shortcut: 'averagePrice',
    position: 4,
    selected: true
  },
  {
    label: 'Percentage result',
    shortcut: 'percentageResult',
    position: 5,
    selected: true
  },
  // {
  //   label: 'Currency result',
  //   shortcut: 'currencyResult',
  //   position: 6,
  //   selected: true
  // }
];