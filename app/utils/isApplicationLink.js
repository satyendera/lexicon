// @flow

export const isApplicationLink = (href) => {
  if (!href) return false;

  if (/^(f|ht)tps?:\/\//i.test(href) || /^(mailto|tel):/.test(href)) return false;
  return true;
};

export default {};
