//ReasonforSparing Component
interface reasonForSparingProps {
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<reasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => (
	<div>
		<label htmlFor='reasonForSparing'>Reason For Sparing</label>
		<textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing} />

	</div>);
export default ReasonForSparing;