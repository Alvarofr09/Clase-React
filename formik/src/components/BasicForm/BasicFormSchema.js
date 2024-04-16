import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

export const BasicFormSchema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email Required"),
	age: yup.number().min(18).max(100).integer().required("Age Required"),
	password: yup
		.string()
		.matches(passwordRules, {
			message:
				"Please create a password containing //min 5 characters, 1 uppercase, 1 lowercase, 1 number digit",
		})
		.required("Password Required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref(`password`)], "Passwords must match")
		.required("Confirm Password Required"),
});
