import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';

const Product = () => {
	const { id } = useParams();
	const [product = null] = products.filter((prod) => prod.id === parseInt(id));
	if (!product) return;
	const { name, description, category, price } = product;
	return (
		<article data-id={id}>
			<h1>{name}</h1>
			<p>Category: {category}</p> <p>Price: {price}</p>
			<p>{description}</p>
		</article>
	);
};

export default Product;
