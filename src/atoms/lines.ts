import { atom } from "recoil";

export interface Line {
  text: string;
  for: number;
}

export const linesState = atom<Line[]>({
  key: "lines",
  default: [{
    text: "foo", for: 1
  },{
    text: "bar", for: 2
  },{
    text: "biz", for: 1
  },{
    text: "bax", for: 2
  }]
});

export const selectedLineIndexState = atom<number | undefined>({
  key: "selectedLineIndex",
  default: undefined
})