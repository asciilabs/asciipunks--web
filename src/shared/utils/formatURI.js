const formatURI = (str) =>
  decodeURIComponent(str.replace('data:text/plain;charset=utf-8,', ''))
export default formatURI
