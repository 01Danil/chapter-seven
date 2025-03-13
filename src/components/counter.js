/*
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
*/

/*
const { useState } = require("react");

function Counter() {
	const [count, setCount] = useState(0);

	if (count > 5) {
		const [checked, toggle] = useState(false);
	}

	useEffect(() => {
	...
	});

	if(counr > 5) {
		useEffect(() => {
			...	
		});
	}
	useEffect(() => {
		...
		});
		return ( ... )
		}
}
*/

/*
function Couner() {
	const [count, setCount] = useState(0);
	const [checked, toggle] =
	useState(
	count => (count < 5)
	? undefined
	: !c,
	(count < 5) ? undefined
	);
	useEffect(() => {
		...
		});
		useEffect(() => {
		if (count < 5) return;
		...
		});
		useEffect(() => {
		...
		});

		useEffect(() => {
			const fn = async () => {
				await SomePromise();
			}
			fn()
		});

		useEffect(() => {
			(async () => {
				await SomePromise()
			})();
		});

		return ( ... )
		}
*/