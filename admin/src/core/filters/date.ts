// import { format } from '@/core/utils/formatDate';
import dayjs from 'dayjs';
/**
 * @filter [date]
 *
 * @param {string} value
 * @param {string} targetFormat
 *
 * @return {string}
 */
export const date = (value: string, targetFormat: string): string => {
  if (!value) return '';
  value = value.toString();
  // return format(value, targetFormat);
  return dayjs(value).format(targetFormat);
};
