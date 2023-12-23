import { ACTION_TYPE_ENUM } from "../../../enums/action-type.enum";
import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const BORROWS_STATE = [
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 2_335,
    currency: CURRENCY_ENUM.UAH,
    period: '08 November 2023 10:44:00',
    description: 'Dental',
  },
  // {
  //   action: ACTION_TYPE_ENUM.BORROW,
  //   amount: 1_700,
  //   currency: CURRENCY_ENUM.UAH,
  //   period: '09 October 2023 10:44:00',
  //   description: 'Dental',
  // },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 100,
    currency: CURRENCY_ENUM.EUR,
    period: '03 November 2023 21:21:21',
    description: 'Kozak',
    rate: 38.8
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 400,
    currency: CURRENCY_ENUM.USD,
    period: '03 November 2023 21:50:00',
    description: 'Parents',
    rate: 37.453
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 200,
    currency: CURRENCY_ENUM.EUR,
    period: '03 November 2023 20:50:00',
    description: 'Parents',
    rate: 38.8
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    amount: 600,
    currency: CURRENCY_ENUM.USD,
    period: '08 September 2023 21:50:00',
    description: 'Crypto COMMS',
    rate: 37.453
  },
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
    description: 'Braces',
    category: 'Teeth',
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 1_775,
    period: '01 June 2023 17:59:00',
    description: 'Teeth equipements',
    category: 'Teeth',
  },
  {
    action: ACTION_TYPE_ENUM.BORROW,
    currency: CURRENCY_ENUM.UAH,
    amount: 43_000,
    period: '31 May 2023 11:30:00',
    description: 'Braces',
    category: 'Teeth',
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
    description: 'Front teeth, remove 8s',
    category: 'Teeth',
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
    amount: 2890,
    period: '05 May 2023 23:02:00',
    description: 'Business Event'
  },
];