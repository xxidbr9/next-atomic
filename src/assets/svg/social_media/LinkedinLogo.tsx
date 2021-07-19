import * as React from "react"
import { SvgProps } from "./socMed"

const LinkedinLogo: React.FC<SvgProps> = (props) => {
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
        d="M4.61.5A3.931 3.931 0 00.692 4.417V16.58a3.93 3.93 0 003.92 3.92h12.162a3.93 3.93 0 003.918-3.92V4.418A3.93 3.93 0 0016.773.5H4.61zm.986 3.3c1.034 0 1.67.678 1.69 1.57 0 .872-.656 1.57-1.71 1.57h-.019c-1.014 0-1.669-.698-1.669-1.57 0-.892.675-1.57 1.708-1.57zm8.906 4.168c1.987 0 3.477 1.299 3.477 4.09v5.211h-3.02v-4.862c0-1.221-.437-2.055-1.53-2.055-.835 0-1.332.562-1.55 1.105-.08.194-.1.465-.1.737v5.075H8.76s.04-8.236 0-9.088h3.02v1.287c.402-.62 1.12-1.5 2.723-1.5zM4.066 8.18h3.02v9.088h-3.02V8.181z"
        fill={props.fill}
      />
    </svg>
  )
}

export default LinkedinLogo
