import { useState } from 'react';
import { PlanetName, NumberOfBeings, Add2Plus2, ReasonForSparing } from './SpeciesName';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName'
const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const [planetName, setPlanetName] = useState<string>('earth');
	const [numberOfBeings, setNumberOfBeings] = useState<string>('10000');
	const [add2Plus2, setAdd2Plus2] = useState<string>('select');
	const [reasonForSparing, setreasonForSparing] = useState<string>('Please enter Area');
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)} />
			<Add2Plus2 add2Plus2={add2Plus2} onChangeAdd2Plus2={(e: any) => setAdd2Plus2(e.target.value)} />
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e: any) => setreasonForSparing(e.target.value)} />
		</section>
	);
};

export default W12MForm;
