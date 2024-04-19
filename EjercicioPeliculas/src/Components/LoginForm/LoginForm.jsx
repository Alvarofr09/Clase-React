import { Formik, Form } from "formik";
import { initialValues } from "./LoginInitialValues";
import { LoginFormSchema } from "./LoginFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const { login } = useAuthContext();
	const navigate = useNavigate();
	async function onSubmit(values, actions) {
		console.log(values);
		console.log(actions);

		const user = { email: values.email, password: values.password };
		console.log(user);

		login(user);
		navigate("/");
		// actions.resetForm();
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={LoginFormSchema}
			onSubmit={onSubmit}
		>
			{(values, erros, isSubmitting) => (
				<Form className="flex flex-col">
					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="Enter your email"
					/>
					<Input
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
					/>
					<button
						type="submit"
						className="border-none bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-sky-600"
						disabled={isSubmitting}
					>
						Buscar
					</button>
					{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
				</Form>
			)}
		</Formik>
	);
}
