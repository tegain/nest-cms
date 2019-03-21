export const slugify = (text: string): string => {
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
  const to   = 'aaaaaeeeeeiiiiooooouuuunc------';
  let formattedText: string = '';

  for (let i = 0, len = from.length; i < len; i++) {
    formattedText = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return formattedText
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-y-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
