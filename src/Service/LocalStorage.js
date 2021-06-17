function GetLocalStorage(key, defaultValue) {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultValue;
  } else {
    return JSON.parse(data);
  }
}
function SetLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { GetLocalStorage, SetLocalStorage };
