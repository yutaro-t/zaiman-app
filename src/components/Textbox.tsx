import { TextField, CardContent, Card } from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Line } from '../atoms/lines';

export interface Props {
  text: string,
  isFocused: boolean,
  onSelect(): void,
  onChange(text: string): void
}

export const Textbox: React.FC<Props> = ({text, isFocused, onSelect, onChange}) => {

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused])

  if (isFocused) {
    return (
      <Card onClick={onSelect}>
        <CardContent>
        <TextField
          fullWidth
          multiline
          value={text}
          variant="standard"
          onChange={handleChange}
          inputRef={inputRef}
        />  
        </CardContent>
      </Card>
    )
  }

  return (
    <Card onClick={onSelect}>
      <CardContent>{text}</CardContent>
    </Card>
  )
}