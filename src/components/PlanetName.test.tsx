import { render } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders form element', () => {

    render(<PlanetName planetName="" onChangePlanetName={() => { }} />);

});