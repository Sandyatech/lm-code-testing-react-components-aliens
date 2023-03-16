//NumberofBeings Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
interface NumberOfBeingsProps {
	numberOfBeings?: string;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {

	const [errorMessage, setErrorMessage] = useState<string | undefined>('');

	const validate: (value: string) => string | undefined = (value) => {

		if (isNaN(parseInt(value)))
			return ("Its Not valid Number");
		if (parseInt(value) < 1000000000)
			return ("Number of Beings Should be atleast 1000000000");
		return undefined;
	}

	return (
		<>
			<label htmlFor='numberOfBeings'>Number of beings</label>
			<input
				id='numberOfBeings'
				type='text'
				value={numberOfBeings}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeNumberOfBeings(e);
				}
				}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>

	);
}
export default NumberOfBeings;