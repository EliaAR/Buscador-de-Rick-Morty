function PrintErrorMsg(...rest) {
  return rest.filter(Boolean).join(", ");
}

export { PrintErrorMsg };
