export default function Input({ label, ...props }) {
	return (
		<>
			<label>{label}</label>
			<br />
			<input {...props} />
		</>
	);
}
