export default {
  getCentury (year) {
    return parseInt(year % 100 === 0 ? year / 100 : year / 100 + 1)
  }
}