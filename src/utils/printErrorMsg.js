function PrintErrorMsg() {
  return arguments.filter(Boolean).join(", ");
}

export { PrintErrorMsg };
