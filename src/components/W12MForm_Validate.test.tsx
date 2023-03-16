import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import user from '@testing-library/user-event';

async function enterIntoTextBox(
	textBoxes: HTMLElement[],
	id: string,
	value: string
) {
	const input = textBoxes.find((t) => t.id === id);
	expect(input).toBeInTheDocument();
	if (input) {
		//await user.clear(input);
		//await user.type(input, "", { allAtOnce: true });
		await user.type(input, value);
	}
}

describe('<W12MForm>', () => {
	{/*it('renders form element', () => {
		render(<W12MForm />);

		const form = screen.getByTestId('W12MForm');

		expect(form).toBeInTheDocument();
	});*/}

	it('displays all entered values on submit', async () => {
		render(<W12MForm />);

		const textBoxes = screen.getAllByRole('textbox');

		await enterIntoTextBox(textBoxes, 'speciesName', '1*');
		await enterIntoTextBox(textBoxes, 'planetName', '1*');
		await enterIntoTextBox(
			textBoxes,
			'reasonForSparing',
			'It is 1234*'
		);
		await enterIntoTextBox(textBoxes, 'numberOfBeings', '12345*');

		const twoPlusTwo = screen
			.getAllByRole('combobox')
			.find((c) => c.id === 'add2Plus2');

		expect(twoPlusTwo).toBeInTheDocument();

		if (twoPlusTwo) {
			await user.selectOptions(twoPlusTwo, 'Not4');
		}

		const submit = screen.getByRole('button');

		await user.click(submit);

		expect(screen.getByText(/Species Name Should be in between 3 to 23 characeters of length/i)).toBeInTheDocument();
		expect(screen.getByText(/No special characters allowed in Species Name/i)).toBeInTheDocument();
		expect(screen.getByText(/No Numbers are allowed in Species Name/i)).toBeInTheDocument();
		expect(screen.getByText(/Planet Name Should be in between 2 to 49 characeters of length/i)).toBeInTheDocument();
		expect(screen.getByText(/No special characters allowed in Planet Name/i)).toBeInTheDocument();
		const reason = screen.getAllByText(/.*Reason for Sparing Should be in between 17 to 153 characeters of length.*/i);
		expect(reason[0]).toBeInTheDocument();
		expect(screen.getByText(/Number of Beings Should be atleast 1000000000/i)).toBeInTheDocument();
		const select4 = screen.getAllByText(/.*It should be 4.*/i);
		expect(select4[0]).toBeInTheDocument();
	});
});