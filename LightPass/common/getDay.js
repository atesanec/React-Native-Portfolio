import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import startOfWeek from 'date-fns/startOfWeek';

// https://github.com/date-fns/date-fns/issues/1287#issuecomment-567566711
export default function getDay(date) {
  return differenceInCalendarDays(date, startOfWeek(date, { weekStartsOn: 1 }));
}
