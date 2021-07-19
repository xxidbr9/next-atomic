import * as React from "react"
import { SvgProps } from "./socMed"

const YoutubeLogo: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width={21}
      height={17}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.691.8c-9.828 0-10 .873-10 7.7 0 6.825.172 7.7 10 7.7s10-.875 10-7.7c0-6.827-.172-7.7-10-7.7zm3.205 8.033l-4.49 2.096c-.393.182-.715-.022-.715-.456V6.525c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z"
        fill={props.fill}
      />
    </svg>
  )
}

export default YoutubeLogo
