import { TimeRangeInterface } from "../interfaces/time-range.interface";

const START_DATE_MS = 1604181600000;
const START_DATE = '2020 11 01';

const NINETY_DAYS_MS = 7776000000;
const DATE_RANGE = 3;

export function getDateRange(fromDate: number = START_DATE_MS): TimeRangeInterface[] {
  let difference = new Date().getTime() - fromDate;
  let list: any[] = [];

  while (difference !== 0) {
    if (list.length === 0) {
      const date = new Date(fromDate);

      list = [...list, {
        beginTime: new Date(fromDate).getTime(),
        endTime: new Date(date.setMonth(date.getMonth() + DATE_RANGE)).getTime()
      }];
    } else {
      const previous = list[list.length - 1];
      const date = new Date(previous.endTime);

      if (new Date(date.setMonth(date.getMonth() + DATE_RANGE)).getTime() > new Date().getTime()) {
        list = [...list, {
          beginTime: previous.endTime,
          endTime: new Date().getTime()
        }];
      } else {
        const date = new Date(previous.endTime);

        list = [...list, {
          beginTime: previous.endTime,
          endTime: new Date(date.setMonth(date.getMonth() + DATE_RANGE)).getTime()
        }];
      }
    }

    difference = difference > NINETY_DAYS_MS ? difference - NINETY_DAYS_MS : 0;
  }

  return list;
}