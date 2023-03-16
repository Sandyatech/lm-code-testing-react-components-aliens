import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import user from '@testing-library/user-event';
/*test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});*/

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

		await enterIntoTextBox(textBoxes, 'speciesName', 'Humans');
		await enterIntoTextBox(textBoxes, 'planetName', 'Earth');
		await enterIntoTextBox(
			textBoxes,
			'reasonForSparing',
			'It is nice to be nice'
		);
		await enterIntoTextBox(textBoxes, 'numberOfBeings', '1000000000');

		const twoPlusTwo = screen
			.getAllByRole('combobox')
			.find((c) => c.id === 'add2Plus2');

		expect(twoPlusTwo).toBeInTheDocument();

		if (twoPlusTwo) {
			await user.selectOptions(twoPlusTwo, '4');
		}

		const submit = screen.getByRole('button');

		await user.click(submit);

		expect(screen.getByText(/Humans/i)).toBeInTheDocument();
		expect(screen.getByText(/Earth/i)).toBeInTheDocument();
		const reason = screen.getAllByText(/.*It is nice to be nice.*/i);
		expect(reason[0]).toBeInTheDocument();
		expect(screen.getByText(/1000000000/i)).toBeInTheDocument();
		expect(screen.getByText("4")).toBeInTheDocument();
	});
});