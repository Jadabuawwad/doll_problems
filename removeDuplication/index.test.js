/**
 * Complete the method/function so that it removes the duplication letter
*/

/**
 * Examples
  "hello"  gets converted to "helo"
  "absadsasdasdad"  gets converted to "absd"
  "good morning"  gets converted to "god mrni"
 */

function removeDuplication(str) {
  const cahracters = str.split('')
  const set = new Set(cahracters)
  const uniqueString = Array.from(set).join('')

  return uniqueString

}

describe('Tests', () => {
  it('test removeDuplication', () => {
    expect(removeDuplication('hello')).toStrictEqual('helo')
    expect(removeDuplication('absadsasdasdad')).toStrictEqual('absd')
    expect(removeDuplication('good morning')).toStrictEqual('god mrni')
  })
})
