import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeViewer from './MemeViewer';
import { DummyMeme, I_Image } from '../../interfaces/meme';
const img : I_Image = {
  id: 0,
  url: '',
  w:10,
  h: 10,
  name: 'name'
};
describe('<MemeViewer />', () => {
  test('it should mount', () => {
    render(<MemeViewer image={img}  meme={DummyMeme}/>);
    
    const memeViewer = screen.getByTestId('MemeViewer');

    expect(memeViewer).toBeInTheDocument();
  });
});