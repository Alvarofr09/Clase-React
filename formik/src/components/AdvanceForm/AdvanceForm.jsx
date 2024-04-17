import { Formik, Form } from "formik";
import { initialValues } from "./InitialValues";
import { AdvancedFormSchema } from "./AdvanceFormSchema";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";

async function onSubmit(values, actions) {
	console.log(values);
	console.log(actions);

	await new Promise((resolve) => setTimeout(resolve, 3000));
	actions.resetForm();
}
export default function AdvanceForm() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={AdvancedFormSchema}
			onSubmit={onSubmit}
		>
			{(values, errors, isSubmitting) => (
				<Form>
					<Input
						label="Username"
						name="username"
						type="text"
						placeholder="Enter your username"
					/>
					<Select
						label="Job type"
						name="jobType"
						placeholder="Please select a jon"
					>
						<option value="">Please select a job</option>
						<option value="developer">Developer</option>
						<option value="designer">Designer</option>
						<option value="manager">Product Manager</option>
						<option value="other">Other</option>
					</Select>
					<Checkbox type="checkbox" name="acceptedTC" />
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
					<pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
				</Form>
			)}
		</Formik>
	);
}
