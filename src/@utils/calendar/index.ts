type getDaysInMonth = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  year?: number;
};

const getBeforeOrAfterMonth = (
  year: number,
  month: number,
  type: "before" | "after"
) => {
  const currentMonth = month;
  const currentYear = year;

  const beforeMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const beforeYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  const mainYear = type === "before" ? beforeYear : nextYear;
  const mainMonth = type === "before" ? beforeMonth : nextMonth;

  const daysInMonth = new Date(mainYear, mainMonth + 1, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, i) => {
    const currentBeforeDate = new Date(mainYear, mainMonth, i + 1);
    return {
      date: currentBeforeDate,
      gridPosition: currentBeforeDate.getDay(),
      isToday: false,
      countMonth: currentBeforeDate.getMonth(),
      countNumber: i + 1,
    };
  }).reverse();
};

function getDaysByMotnh(props: getDaysInMonth) {
  const currentTimeDate = new Date();

  const {
    year = currentTimeDate.getFullYear(),
    month = currentTimeDate.getMonth(),
  } = props;

  console.log(getBeforeOrAfterMonth(year, month, "before"));
  console.log(getBeforeOrAfterMonth(year, month, "after"));

  //////////////////
  /////////////
  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////  //////////////////
  /////////////
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => {
      const currentDate = new Date(year, month, i + 1);
      const currentDay = currentTimeDate;

      return {
        date: currentDate,
        gridPosition: currentDate.getDay(),
        isToday:
          currentDay.getDate() === i + 1 &&
          currentDate.getMonth() === currentDay.getMonth(),
        countMonth: currentDate.getMonth(),
        countNumber: i + 1,
      };
    }
  );
}

export default getDaysByMotnh;
