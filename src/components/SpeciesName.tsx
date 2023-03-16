//SpeciesName Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

	const [errorMessage, setErrorMessage] = useState<string[] | undefined>();

	const validate: (value: string) => string[] | undefined = (value) => {
		
		const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
		const numbers = /[0-9]/;
		let errors: string[]=[];

		if ((value.length <= 3) || (value.length >= 23))
			errors.push("Species Name Should be in between 3 to 23 characeters of length");
		if (specialChars.test(value))
			errors.push("No special characters allowed in Species Name");
		if (numbers.test(value))
			errors.push("No Numbers are allowed in Species Name");
		if (errors.length == 0)
			return undefined;
		else
			return errors;
	}

	return (
		<>
			<label htmlFor='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				}
				}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>

	);
}
export default SpeciesName;