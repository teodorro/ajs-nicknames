/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(username) {
    const onlySymbols = /^([a-z]|[A-Z]|-|_|[0-9])+$/.test(username);
    const fourNumbers = /[0-9]{4}/.test(username);
    const badStart = /^([0-9]|-|_)/.test(username);
    const badEnd = /([0-9]|-|_)$/.test(username);
    return onlySymbols && !fourNumbers && !badStart && !badEnd;
  }
}
