import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";

async function onSubmit(values, actions) {
	console.log("Values:", values);
	console.log("Actions:", actions);

	await new Promise((resolve) => setTimeout(resolve, 3000));
	actions.resetForm();
}

export default function BasicForm() {
	const {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		isSubmitting,
	} = useFormik({
		initialValues: {
			email: "",
			age: "",
			password: "",
			confirmPassword: "",
		},

		validationSchema: BasicFormSchema,
		onSubmit,
	});
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					id="email"
					value={values.email}
					onChange={handleChange("email")}
					placeholder="Email"
					onBlur={handleBlur("email")}
					className={errors.email && touched.email ? "input-error" : ""}
				/>
				{errors.email && touched.email && (
					<p className="error">{errors.email}</p>
				)}
				<input
					type="number"
					name="age"
					id="age"
					value={values.age}
					onChange={handleChange("age")}
					placeholder="Age"
					onBlur={handleBlur("age")}
					className={errors.age && touched.age ? "input-error" : ""}
				/>
				{errors.age && touched.age && <p className="error">{errors.age}</p>}
				<input
					type="password"
					name="password"
					id="password"
					value={values.password}
					onChange={handleChange("password")}
					placeholder="Password"
					onBlur={handleBlur("password")}
					className={errors.password && touched.password ? "input-error" : ""}
				/>
				{errors.password && touched.password && (
					<p className="error">{errors.password}</p>
				)}
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					value={values.confirmPassword}
					onChange={handleChange("confirmPassword")}
					placeholder="Confirm Password"
					onBlur={handleBlur("confirmPassword")}
					className={
						errors.confirmPassword && touched.confirmPassword
							? "input-error"
							: ""
					}
				/>
				{errors.confirmPassword && touched.confirmPassword && (
					<p className="error">{errors.confirmPassword}</p>
				)}
				<button disabled={isSubmitting}>Submit</button>
				<p>{errors}</p>
			</form>
		</>
	);
}
