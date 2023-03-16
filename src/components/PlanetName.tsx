//PlanetName Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {

	const [errorMessage, setErrorMessage] = useState<string[] | undefined>();

	const validate: (value: string) => string[] | undefined = (value) => {
		let errors: string[] = [];
		const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
		if ((value.length <= 2) || (value.length >= 49))
			errors.push("Planet Name Should be in between 2 to 49 characeters of length");
		if (specialChars.test(value))
			errors.push("No special characters allowed in Planet Name");
		if (errors.length == 0)
			return undefined;
		else
			return errors;
	}

	return (
		<>
			<label htmlFor='planetName'>Planet Name</label>
			<input
				id='planetName'
				type='text'
				value={planetName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangePlanetName(e);
				}
				}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>

	);
}
export default PlanetName;
