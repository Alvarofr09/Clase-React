import { useField } from "formik";

export default function Input({ label, ...props }) {
	const [field, meta] = useField(props);
	return (
		<>
			<label>{label}</label>
			<br />
			<input
				{...props}
				{...field}
				className={
					meta.touched && meta.error ? "border border-red-700" : " border"
				}
			/>
			{meta.touched && meta.error && (
				<div className="text-red-700 text-sm">{meta.error}</div>
			)}
		</>
	);
}
