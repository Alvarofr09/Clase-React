import * as yup from "yup";

export const AdvancedFormSchema = yup.object().shape({
	username: yup.string().min(5).required("Username is required"),
	jobType: yup
		.string()
		.oneOf(["developer", "designer", "manager", "other"], "Invalid job type")
		.required("Job type is required"),
	acceptedTC: yup
		.boolean()
		.oneOf([true], "Please accept the terms and conditions"),
});
