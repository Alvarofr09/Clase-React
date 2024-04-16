import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Login() {
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

	const { login } = useAuthContext();
	const navigate = useNavigate();

	async function onSubmit(values, actions) {
		console.log(values);

		login(values.email, values.password);
		navigate("/");
		actions.resetForm();
	}
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
		</>
	);
}
