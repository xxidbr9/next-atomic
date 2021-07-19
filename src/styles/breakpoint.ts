import baseTailwindConfig from '@base/tailwind.config'

const { screens: twScreen } = baseTailwindConfig.theme.extend

const breakpoint = {
  ...twScreen
}


export default breakpoint



const breakScreen = Object.assign({}, breakpoint)
Object.keys(breakScreen).forEach(key => breakScreen[key] = +(breakScreen[key].replace("px", "")))
export { breakScreen }