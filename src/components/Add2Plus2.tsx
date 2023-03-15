//Add2Plus2 Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
interface Add2Plus2Props {
	add2Plus2: string;
	onChangeAdd2Plus2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Add2Plus2: React.FC<Add2Plus2Props> = ({ add2Plus2, onChangeAdd2Plus2 }) => {

	const [errorMessage, setErrorMessage] = useState<string | undefined>('');

	const validate: (value: string) => string | undefined = (value) => {

		if (value!== "4")
			return ("add2Plus2 should be 4");
		return undefined;
	}

	return (
		<>
			<label htmlFor='add2Plus2'>What is 2 + 2</label>
			<select
				id='add2Plus2'
				value={add2Plus2}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeAdd2Plus2(e);
				}
				}
			>
				<option value="select">Select</option>
				<option value="4">4</option>
				<option value="Not4">Not 4</option>

			</select>
			<ErrorMessage errorMessage={errorMessage} />
		</>

	);
}
export default Add2Plus2;

