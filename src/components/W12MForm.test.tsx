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
        await user.type(input, value);
    }
}

describe('<W12MForm>', () => {


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