import { NATIONALITIES } from "../constants/api";

export const getNationalityName = (code: string): string => {
  const nationality = NATIONALITIES.find((nat) => nat.code === code);
  return nationality ? nationality.name : code.toUpperCase();
};
