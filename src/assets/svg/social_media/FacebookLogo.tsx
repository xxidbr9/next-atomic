import * as React from "react"
import { SvgProps } from "./socMed"

const FacebookLogo: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.691 10.555c0 4.972 3.611 9.106 8.334 9.944v-7.222h-2.5v-2.778h2.5V8.277c0-2.5 1.61-3.889 3.889-3.889.722 0 1.5.111 2.222.222v2.556h-1.278c-1.222 0-1.5.61-1.5 1.389v1.944h2.667l-.444 2.778h-2.223v7.222c4.723-.838 8.333-4.972 8.333-9.944 0-5.53-4.5-10.056-10-10.056s-10 4.525-10 10.056z"
        fill={props.fill}
      />
    </svg>
  )
}

export default FacebookLogo
