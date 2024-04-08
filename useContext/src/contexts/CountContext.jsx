import { createContext, useContext, useState } from "react";

export const CountContext = createContext({ count: 0, setCount: () => {} });

export default function CountContextProvider({ children }) {
	const [count, setCount] = useState(0);
	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
}

export function useCountContext() {
	return useContext(CountContext);
}
