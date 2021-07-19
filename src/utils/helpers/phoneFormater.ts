/**
 *
 * @argument value:example 08132275755
 * @argument pattern:that transform the phone number into the shapes
 * @argument replacer: RegEx
 *
 * @example phoneFormat("08132275755")
 * @returns {String} 0813-2275-7551
 * */
const phoneFormat = (value, pattern = '####-####-####', replacer = /#/g) => {
  let i = 0,
    phone = value.toString()
  return pattern.replace(replacer, _ => phone[i++])
}
export default phoneFormat
