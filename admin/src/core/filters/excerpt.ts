/**
 * @filter [excerpt]
 *
 * @param {string} content
 * @param {number} limit
 * @return {string}
 */
export const excerpt = (content: string, limit: number) => {
  if (!content) return '';
  content = content.toString();
  if (!limit || content.length < limit) return content;
  return content.substr(0, limit) + '...';
};
