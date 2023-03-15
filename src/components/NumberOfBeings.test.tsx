import { render } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders form element', () => {

	render(<NumberOfBeings numberOfBeings="" onChangeNumberOfBeings={() => { }} />);

});