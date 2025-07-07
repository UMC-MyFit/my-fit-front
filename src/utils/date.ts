export const getTodayDateObj = () => new Date();

export const getLastDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDay();
};
