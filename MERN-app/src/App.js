import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [devices, setDevices] = useState([]);
	const [vendors, setVendors] = useState([]);
	const [vendor, setVendor] = useState("");

	//useEffect is a function that takes a function and an array as arguments. The function runs once when the component loads
	// and then again if any of the state variables in the array are changed. What matters most here is that if you leave the array empty
	// the code in the function will only run once but not every time we call setGreeting (like the App function).
	useEffect(() => {
		const getGreeting = async () => {
			//to be able to use async and await in useEffect we need to create an async function.
			const response = await fetch("http://localhost:5001/devices"); //we fetch from our api server running on port 5001
			const data = await response.json(); //we get the json data
			//the data is an array with list of devices.

			//now let's add the array to the list of devices
			setDevices(data);
			//Now lets find all unique vendors and add to another array for filtering in the application
			setVendors([...new Set(data.map((item) => item.vendor))]);
		};

		getGreeting();
	}, []);

	const changeVendor = async ({ target }) => {
		setVendor(target.value);

		const url = target.value
			? `http://localhost:5001/devices/vendor/${target.value}`
			: "http://localhost:5001/devices";

		//fetch updated device list by vendor on the server
		const response = await fetch(url);
		const data = await response.json();

		setDevices(data);
	};

	//Display a list of devices with the option to use the dropdown filter to filter by vendor (all filtering done on server)
	return (
		<div>
			<select value={vendor} onChange={changeVendor}>
				<option value="">All</option>
				{vendors.map((v) => {
					return (
						<option key={v} value={v}>
							{v}
						</option>
					);
				})}
			</select>
			<div>
				{devices.map((device) => (
					<div key={device._id}>
						{device.vendor} {device.name}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
