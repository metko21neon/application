import { ACTION_TYPE_ENUM } from "../../../enums/action-type.enum";
import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const BORROWS_STATE = [
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 100,
    currency: CURRENCY_ENUM.USD,
    period: '04 September 2023 09:00:00',
    description: 'University',
    rate: 37.453
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 4_000,
    period: '31 July 2023 09:28:00',
    description: 'Braces'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 1_775,
    period: '01 June 2023 17:59:00',
    description: 'Teeth equipements'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 43_000,
    period: '31 May 2023 11:30:00',
    description: 'Braces'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 2200,
    period: '03 May 2023',
    description: 'Clothes'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 2300,
    period: '14 May 2023 15:50',
    description: 'Sunglasses'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 9_100,
    period: '19 May 2023 17:04',
    description: 'Front teeth, remove 8s'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 8000,
    period: '18 May 2023 14:25',
    description: 'Emily'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 12500,
    period: '12 May 2023',
    description: 'Car'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 8700,
    period: '05 May 2023 23:02:00',
    description: 'Business Event'
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 3600,
    period: '02 May 2023 12:46',
    description: 'Home'
  },
];