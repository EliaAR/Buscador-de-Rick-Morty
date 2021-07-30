function PrintErrorMsg(...rest) {
  return rest.filter(Boolean).join(", ");
}

function GetArrayId(array) {
  return array.map((element) =>
    element.substring(element.lastIndexOf("/") + 1)
  );
}

export { PrintErrorMsg, GetArrayId };
