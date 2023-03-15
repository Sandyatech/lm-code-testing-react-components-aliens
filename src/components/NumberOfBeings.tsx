//NumberofBeings Component
interface numberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<numberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => (
	<div>
		<label htmlFor='numberOfBeings'>Number Of Beings</label>
		<input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
	</div>);
export default NumberOfBeings;