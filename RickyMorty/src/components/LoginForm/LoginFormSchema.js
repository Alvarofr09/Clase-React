import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

export const LoginFormSchema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email Required"),
	password: yup
		.string()
		.matches(passwordRules, {
			message:
				"Please create a password containing //min 5 characters, 1 uppercase, 1 lowercase, 1 number digit",
		})
		.required("Password Required"),
});
