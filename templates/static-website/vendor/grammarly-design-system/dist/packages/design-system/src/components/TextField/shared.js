function extendInputProps(inputProps, props) {
  const importantAriaProps = [
    "aria-hidden",
    "aria-controls"
  ];
  importantAriaProps.forEach((attr) => {
    const prop = props[attr];
    if (prop != null && inputProps[attr] == null) {
      inputProps[attr] = prop;
    }
  });
}
export {
  extendInputProps
};
