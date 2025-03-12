function Counter() {
	const [count, setCount] = useState(0);
	const [checked, toggle] = useState(false);

	useEffect(() => {
		...
		}, [cheked]);

		useEffect(() => {
			...
		}, []);

		useEffect(() => {
			...
		}, [count]);

		return ( ... )
}