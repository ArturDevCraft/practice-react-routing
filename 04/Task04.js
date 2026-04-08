import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task04 = () => {
	const history = useHistory();
	const changeHandler = (e) => {
		const sort = e.target.value;
		const link = `/task04/${sort}`;
		history.push(link);
	};
	return (
		<>
			<h1>Task04</h1>
			<select onChange={changeHandler}>
				<option>-- Select sort --</option>
				<option value="price-asc">Sort by price asc</option>
				<option value="price-desc">Sort by price desc</option>
			</select>
			<Route path="/task04/:sort">
				<Shop products={products} />
			</Route>
		</>
	);
};

export default Task04;
