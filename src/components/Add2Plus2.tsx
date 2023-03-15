//Add2Plus2 Component
interface add2Plus2Props {
	add2Plus2: string;
	onChangeAdd2Plus2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Add2Plus2: React.FC<add2Plus2Props> = ({ add2Plus2, onChangeAdd2Plus2 }) => (
	<div>
		<label htmlFor='add2Plus2'>What is 2 + 2</label>
		<select id='add2Plus2' value={add2Plus2} onChange={onChangeAdd2Plus2}>
			<option value="select">Select</option>
			<option value="4">4</option>
			<option value="Not4">Not 4</option>
		</select>
	</div>);
export default Add2Plus2;