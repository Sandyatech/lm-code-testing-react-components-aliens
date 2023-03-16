//NumberofBeings Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
interface NumberOfBeingsProps {
	numberOfBeings?: string;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {

	const [errorMessage, setErrorMessage] = useState<string[] | undefined>();

	const validate: (value: string) => string[] | undefined = (value) => {
		let errors: string[] = [];
		if (isNaN(parseInt(value)))
			errors.push("Its Not valid Number");
		if (parseInt(value) < 1000000000)
			errors.push("Number of Beings Should be atleast 1000000000");
		if (errors.length == 0)
			return undefined;
		else
			return errors;
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