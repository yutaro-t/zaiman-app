import { useRecoilState } from "recoil";
import { linesState, selectedLineIndexState } from "../atoms/lines";
import { LinesViewer } from "../components/LinesViewer";
import { useCallback } from "react";

export const LinesViewerContainer: React.FC = () => {
  const [lines, setLines] = useRecoilState(linesState);
  console.log(lines.map(a => a.text).join(", "));
  const [selectedLineIndex, setSelectedLineIndex] = useRecoilState(selectedLineIndexState);
  return (
    <LinesViewer lines={lines} selectedLineIndex={selectedLineIndex} onSelectIndex={setSelectedLineIndex} onChangeLines={setLines}/>
  )
}