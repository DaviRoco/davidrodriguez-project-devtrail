import { ExperienceRecords } from "../types/types";

export const calculateTotalExperience = (records: ExperienceRecords[]): string => {
  let totalYears = 0;
  let totalMonths = 0;

  records.forEach((record) => {
    const startDate = new Date(record._startDate);
    let endDate = record._endDate ? new Date(record._endDate) : new Date();

    const isPlaceholderEndDate =
      endDate.getFullYear() === 2000 &&
      endDate.getMonth() === 0 &&
      endDate.getDate() === 1;

    if (isPlaceholderEndDate) {
      endDate = new Date();
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    totalYears += years;
    totalMonths += months;
  });

  totalYears += Math.floor(totalMonths / 12);
  totalMonths = totalMonths % 12;

  if (totalMonths === 11) {
    totalYears += 1;
    totalMonths = 0;
  }

  return `${totalYears} year(s)${totalMonths > 0 ? ` and ${totalMonths} month(s)` : ''}`;
};
