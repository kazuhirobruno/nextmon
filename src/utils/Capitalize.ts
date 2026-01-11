export function cssCapitalize(text: string) {
  return text.replace(/\b\p{L}/gu, letter => letter.toUpperCase())
}