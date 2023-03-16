import { useState } from 'react';

import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import Add2Plus2 from './Add2Plus2';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
    const [speciesName, setSpeciesName] = useState<string>('');
    const [planetName, setPlanetName] = useState<string>('');
    const [numberOfBeings, setNumberOfBeings] = useState<string>('');
    const [add2Plus2, setAdd2Plus2] = useState<string>('NOT_SELECTED');
    const [reasonForSparing, setreasonForSparing] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(false);

    const DisplayData = () => {
        return (<div>
            <p>Species Name       :{speciesName}</p>
            <p>Planet Name        :{planetName}</p>
            <p>Number of Beings   :{numberOfBeings}</p>
            <p>what is 2+2        :{add2Plus2}</p>
            <p>Reason for Sparing :{reasonForSparing}</p>

        </div>);


    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setDisplay(true);
    }
    return (
        <section className='w12MForm'>
            <W12MHeader />
            <form onSubmit={handleSubmit} data-testid="W12MForm">
                <SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
                <PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} />
                <NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)} />
                <Add2Plus2 add2Plus2={add2Plus2} onChangeAdd2Plus2={(e: any) => setAdd2Plus2(e.target.value)} />
                <ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e: any) => setreasonForSparing(e.target.value)} />
                <button type="submit" data-testid="Submit">Submit</button>
            </form>
            {display && (<DisplayData />)}
        </section>
    );
};

export default W12MForm;
