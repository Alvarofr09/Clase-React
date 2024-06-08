import { Sub } from "../types";

interface Props {
	subs: Array<Sub>;
}

export default function List({ subs }: Props) {
	const renderList = (): Array<JSX.Element> => {
		return subs.map((sub) => (
			<li key={sub.nick}>
				<img src={sub.avatar} alt={`Avatar de ${sub.nick}`} />
				<h4>
					{sub.nick} (<small>{sub.subMonths}</small>)
				</h4>
				<p>{sub.description?.substring(0, 100)}</p>
			</li>
		));
	};
	return <ul>{renderList()}</ul>;
}
