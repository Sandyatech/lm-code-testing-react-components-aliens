//ReasonForSparing Component
import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
interface ReasonForSparingProps {
    reasonForSparing: string;
    onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {

    const [errorMessage, setErrorMessage] = useState<string[] | undefined>();

    const validate: (value: string) => string[] | undefined = (value) => {

        if ((value.length <= 17) || (value.length >= 153))
            return (["Reason for Sparing Should be in between 17 to 153 characeters of length"]);
        return undefined;
    }

    return (
        <>
            <label htmlFor='reasonForSparing'>Reason For Sparing</label>
            <textarea
                id='reasonForSparing'
                value={reasonForSparing}
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeReasonForSparing(e);
                }
                }
            />
            <ErrorMessage errorMessage={errorMessage} />
        </>

    );
}
export default ReasonForSparing;