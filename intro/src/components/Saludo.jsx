export default function Saludo(props) {
	console.log(props);
	return <h1>Hola! Mi nombre es {props.name}</h1>;
}
