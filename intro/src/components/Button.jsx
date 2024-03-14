export default function Button({name}) {
	function handleClick() {
		alert(`Bienvenido ${name} a nuestra App`);
	}

	return <button onClick={() => handleClick(name)}>Click aqui</button>;
}
