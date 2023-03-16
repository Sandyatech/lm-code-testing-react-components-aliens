import { screen,render,fireEvent} from '@testing-library/react';
import SpeciesName from './SpeciesName';
import W12MForm from './W12MForm';
import user from '@testing-library/user-event';

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

test('renders SpeciesName Component', () => {

	render(<SpeciesName speciesName="" onChangeSpeciesName={() => { }} />);

});

const validSpeciesName1: SpeciesNameProps = {
	speciesName: 'Human', onChangeSpeciesName: jest.fn()
};
test('Valid input test', async() => {
	await render(<SpeciesName {...validSpeciesName1} />);
	const input = screen.getByRole('textbox');
	expect(input).toHaveValue('Human');
});
{/*
const validSpeciesName2: SpeciesNameProps = {
	speciesName: '23', onChangeSpeciesName: jest.fn()
};
test('Invalid input test', async () => {
	await render(<SpeciesName {...validSpeciesName2} />);
	const input = screen.getByRole('textbox');
	await user.type(input, '23');
	expect(input).toHaveValue('Human');
});*/}