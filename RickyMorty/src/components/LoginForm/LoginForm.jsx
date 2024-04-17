import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function LoginForm() {
	const { login } = useAuthContext();
	const navigate = useNavigate();
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
			password: "",
		},

		validationSchema: LoginFormSchema,
		onSubmit,
	});

	async function onSubmit(values, actions) {
		const user = { email: values.email, password: values.password };
		console.log(values);
		console.log(user);

		login(values.email, values.password);
		navigate("/");
		actions.resetForm();
	}

	console.log(errors);
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
				<button disabled={isSubmitting}>Submit</button>
			</form>
			<pre style={{ color: "white" }}>
				{JSON.stringify({ values, errors }, null, 1)}
			</pre>
			;
		</>
	);
}
