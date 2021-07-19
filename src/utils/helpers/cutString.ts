const cutString = (
  title: string,
  length: number = 100,
  endText = '....'
): string => (title.length >= length ? title.slice(0, length) + endText : title)

export default cutString
