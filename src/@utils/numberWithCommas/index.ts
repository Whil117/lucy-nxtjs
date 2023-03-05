type IOptions = {
  error?: string;
  prefix?: string;
  suffix?: string;
};
const NumberWithCommas = (x: number, opt = {} as IOptions) => {
  const { error, prefix, suffix } = opt;
  if (!x) return error ?? null;

  const convertNumber = Number(x);
  if (!convertNumber) return error ?? null;

  return `${prefix ?? ""}${convertNumber
    ?.toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}${suffix ?? ""}`;
};

export default NumberWithCommas;
