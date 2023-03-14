interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;

	// You might be wondering what line 50 (e: React.ChangeEvent<HTMLInputElement>) is saying. 
	//Let's break it down! 🔨😃 

	// React has different ChangeEvents for different elements that might change. 
	//Imagine a React.ChangeEvent < HTMLTextAreaElement > or React.ChangeEvent<HTMLSelectElement>, 
	//these are the specific events you get back from changing specific types of element.
	//This means when you write the code you know what type of element you're reacting to, so you might 
	//want to do different things with a select versus an input text box.

	// If you wanted the same function for all of them (for example, if we wanted to 
	//refactor our forms so we had one function that handled all of them), you could write a 
	//function with the signature
	//(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, 
	//and pass that function as onChange to any of those kinds of elements!
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (
    <div>
        <label htmlFor='speciesName'>Species Name</label>
		<input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
	</div>);

export default SpeciesName;

interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => (
	<div>
		<label htmlFor='planetName'>Planet Name</label>
		<input id='planetName' type='text' value={planetName} onChange={onChangePlanetName} />
	</div>);

interface numberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeings: React.FC<numberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings}) => (
	<div>
		<label htmlFor='numberOfBeings'>Number Of Beings</label>
		<input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
	</div>);

interface add2Plus2Props {
	add2Plus2: string;
	onChangeAdd2Plus2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Add2Plus2: React.FC<add2Plus2Props> = ({ add2Plus2, onChangeAdd2Plus2 }) => (
	<div>
		<label htmlFor='add2Plus2'>What is 2 + 2</label>
		<select id='add2Plus2' value={add2Plus2} onChange={onChangeAdd2Plus2}>
			<option value="select">Select</option>
			<option value="4">4</option>
			<option value="Not4">Not 4</option>
		</select>
	</div>);

interface reasonForSparingProps {
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ReasonForSparing: React.FC<reasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => (
	<div>
		<label htmlFor='reasonForSparing'>Reason For Sparing</label>
		<textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing}/>

	</div>);