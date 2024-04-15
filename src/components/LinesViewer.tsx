import { useMemo } from "react"
import { Line } from "../atoms/lines"
import { TextColumn } from "./TextColumn"
import { Textbox } from "./Textbox"

interface Props {
  lines: Line[],
  selectedLineIndex?: number,
  onSelectIndex(index: number): void,
  onChangeLines(lines: Line[]): void
}

export const LinesViewer: React.FC<Props> = ({ lines, selectedLineIndex, onSelectIndex, onChangeLines }) => {

  const handleSelect = useMemo(() => lines.map((_, i) => () => onSelectIndex(i)), [lines, onSelectIndex]);
  const handleChangeLine = useMemo(() => 
    lines.map((_, i) => (text: string) => onChangeLines(lines.map((line, j) => i === j ? ({...line, text}) : line))), 
  [lines, onChangeLines]);

  return (
    <TextColumn>
      {lines.map((line, i) => (
        <Textbox text={line.text} isFocused={i === selectedLineIndex} onSelect={handleSelect[i]} onChange={handleChangeLine[i]}/>
      ))}
    </TextColumn>
  )
}