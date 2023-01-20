type getDaysInMonth = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  year?: number;
};

const MAPGRID = {
  0: 6,
  6: 5,
  5: 4,
  4: 3,
  3: 2,
  2: 1,
  1: 0,
};
const MAPGRIDREVERSE = {
  1: 6,
  2: 5,
  3: 4,
  4: 3,
  5: 2,
  6: 1,
};

const getBeforeOrAfterMonth = (
  year: number,
  month: number,
  type: "after" | "before"
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

  const mainData = Array.from({ length: daysInMonth }, (_, i) => {
    const currentBeforeDate = new Date(mainYear, mainMonth, i + 1);
    return {
      date: currentBeforeDate,
      gridPosition: currentBeforeDate.getDay(),
      isToday: false,
      countMonth: currentBeforeDate.getMonth(),
      countNumber: i + 1,
      isMonth: false,
    };
  });

  const sliceByType = type === "before" ? mainData.reverse() : mainData;
  return sliceByType;
};

function getDaysByMotnh(props: getDaysInMonth) {
  const currentTimeDate = new Date();

  const {
    year = currentTimeDate.getFullYear(),
    month = currentTimeDate.getMonth(),
  } = props;

  const monthCurrent = Array.from(
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
        isMonth: true,
      };
    }
  );

  const first = monthCurrent?.[0]?.gridPosition;
  const last = monthCurrent?.[monthCurrent?.length - 1]?.gridPosition;

  const after = getBeforeOrAfterMonth(year, month, "after").filter(
    (_, indx) => indx + 1 <= MAPGRIDREVERSE[last]
  );
  const before = getBeforeOrAfterMonth(year, month, "before").filter(
    (_, indx) => indx + 1 <= MAPGRID[first]
  );

  return [...before, ...monthCurrent, ...after];
}

export default getDaysByMotnh;
