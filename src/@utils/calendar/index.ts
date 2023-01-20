type getDaysInMonth = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  year?: number;
};

function getDaysByMotnh(props: getDaysInMonth) {
  const currentTimeDate = new Date();

  const {
    year = currentTimeDate.getFullYear(),
    month = currentTimeDate.getMonth(),
  } = props;

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
