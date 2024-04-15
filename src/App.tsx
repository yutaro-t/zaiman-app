import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import './App.css';
import { Textbox } from './components/Textbox';
import { TextColumn } from './components/TextColumn';
import { LinesViewerContainer } from './containers/LinesViewerContainer';

function App() {
  return (
    <RecoilRoot>
      <LinesViewerContainer /> 
    </RecoilRoot>
  );
}

export default App;
