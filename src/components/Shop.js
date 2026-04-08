import React from 'react';
import Product from './Product';
import { useParams, Link } from 'react-router-dom';

const Shop = ({ products: propsProducts }) => {
	const { cat = null } = useParams();

	const products = propsProducts.filter(
		(prod) =>
			cat?.toLowerCase() === prod.category.toLowerCase() || cat === null,
	);

	return (
		<section>
			{products.map((p) => (
				<Link to={`/task02/product-${p.id}`}>
					<Product {...p} />
				</Link>
			))}
		</section>
	);
};

export default Shop;
