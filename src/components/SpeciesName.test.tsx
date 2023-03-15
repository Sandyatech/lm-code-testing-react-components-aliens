import { screen,render,fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import W12MForm from './W12MForm';

test('renders SpeciesName Component', () => {

	render(<SpeciesName speciesName="" onChangeSpeciesName={() => { }} />);

});

