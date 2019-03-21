import dayjs from 'dayjs';
import frFR from 'dayjs/locale/fr';
import zhCN from 'dayjs/locale/zh-cn';

const locales = {
  fr_FR: frFR,
  zh_CN: zhCN,
};

/**
 * Format date
 *
 * @param {DateTimeFormat|string} date
 * @param {string} formatStr
 *
 * @return {string}
 */
// export const format = (date: string, formatStr: string): string => {
//   if (store.state.locale.locale === 'en_GB') {
//     return dayjs(date).format(formatStr);
//   }
//
//   return dayjs(date).locale(locales[store.state.locale.locale]).format(formatStr);
// };
