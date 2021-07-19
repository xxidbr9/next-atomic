import ROUTES_CONSTANT, { ROUTES_TYPE } from '@utils/constants/routes'

export function slugGenerator(text: string): string {
  text = text.replace(/^\s+|\s+$/g, '')
  text = text.toLowerCase()
  text = text
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
  return text
}

export default slugGenerator

export const createSlugLink = (
  path: ROUTES_TYPE = ROUTES_CONSTANT.HOME,
  title: string,
  id: string
) => {
  return `${path}/${slugGenerator(title)}/${id}`
}
