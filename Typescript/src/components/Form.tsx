/* eslint-disable no-mixed-spaces-and-tabs */
import useNewSubForm from "../hook/UseNewSubForm";
import { Sub } from "../types";

interface FormProps {
	onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
	const [inputValues, dispatch] = useNewSubForm();

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		onNewSub(inputValues);
		handleClear();
	};

	const handleChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = evt.target;

		dispatch({
			type: "change_value",
			payload: {
				inputName: name,
				inputValue: value,
			},
		});
	};

	const handleClear = () => {
		dispatch({ type: "clear" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				value={inputValues.nick}
				type="text"
				placeholder="nick"
				name="nick"
			/>
			<input
				onChange={handleChange}
				value={inputValues.subMonths}
				type="number"
				placeholder="subMonths"
				name="subMonths"
			/>
			<input
				onChange={handleChange}
				value={inputValues.avatar}
				type="text"
				placeholder="avatar"
				name="avatar"
			/>
			<textarea
				onChange={handleChange}
				value={inputValues.description}
				placeholder="description"
				name="description"
			/>
			<button onClick={handleClear} type="button">
				Clear the form
			</button>
			<button type="submit">Save new Sub!</button>
		</form>
	);
};

export default Form;
