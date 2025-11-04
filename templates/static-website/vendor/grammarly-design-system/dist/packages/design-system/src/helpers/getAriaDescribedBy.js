function getAriaDescribedBy(ariaDescribedBy, helperMessageId, errorMessageId) {
  if (!ariaDescribedBy && !helperMessageId && !errorMessageId) {
    return void 0;
  }
  const ids = [ariaDescribedBy, helperMessageId, errorMessageId].filter(Boolean);
  return ids.join(" ");
}
export {
  getAriaDescribedBy
};
