import React from 'react';
import Product from './Product';
import { useParams, Link } from 'react-router-dom';

const Shop = ({ products: propsProducts }) => {
	const { cat = null, sort = null } = useParams();

	if (sort === 'price-asc') {
		propsProducts.sort((a, b) => a.price - b.price);
	}

	if (sort === 'price-desc') {
        propsProducts.sort((a, b) => b.price - a.price);
	}

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
