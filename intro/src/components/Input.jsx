export default function Input({ label, ...props }) {
	return (
		<>
			<label>{label}</label>
			<input {...props} />
		</>
	);
}
