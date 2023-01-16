type getDaysInMonth = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  year?: number;
};

function getDaysByMotnh(props: getDaysInMonth) {
  const { year = new Date().getFullYear(), month } = props;

  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => ({
      date: new Date(year, month, i + 1),
      day: new Date(year, month, i + 1).getDay(),
      month: new Date(year, month, i + 1).getMonth(),
      numb: i + 1,
    })
  );
}

export default getDaysByMotnh;
