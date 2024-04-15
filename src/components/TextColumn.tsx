import { css } from "@emotion/css"

export interface Props {
  children: React.ReactNode
}

const containerCSS = css({
  width: 480,
  padding: 16,
  backgroundColor: "pink",
  "& > div:not(:last-child)": {
    marginBottom: 16
  }
})

export const TextColumn: React.FC<Props> = ({children}) => {
  return (
    <div className={containerCSS}>{children}</div>
  )
}