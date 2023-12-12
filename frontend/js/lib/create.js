export const Create = {
  Element: (
    parentElement,
    type,
    id = null,
    classNames = null,
    callback = null,
    body = null
  ) => {
    const element = document.createElement(type);
    id !== null ? (element.id = id) : null;
    classNames !== null ? element.classList.add(...classNames) : null;
    callback !== null ? element.addEventListener("click", callback) : null;
    body !== null ? (element.innerHTML = body) : null;
    parentElement !== null ? parentElement.appendChild(element) : null;
    return element;
  },
};
