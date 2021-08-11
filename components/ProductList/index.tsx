import Loader from 'components/Loader';
import ProductItem from 'components/Product';
import { ProductContext } from 'provider/ProductsQueryProvider';
import React, { useContext } from 'react';
import { Product } from 'types';
import styles from './productList.module.css';

interface Props {
  addToCart: (item: Product) => void;
  currency: string;
}

function ProductList({ addToCart, currency }: Props) {
  const { products, productsLoading } = useContext(ProductContext);

  const renderProducts = () => {
    if (!products || productsLoading) {
      return <Loader />;
    }
    return (
      <ul title="product-list" className={styles.list}>
        {products.length >= 1 ? (
          products.map((product: Product) => (
            <li title="product-item" key={product.id}>
              <ProductItem currency={currency} addToCart={addToCart} product={product} />
            </li>
          ))
        ) : (
          <h1 className={styles.breadcrumb}>No Products</h1>
        )}
      </ul>
    );
  };

  return (
    <section className={styles.productContainer}>
      <div className={styles.productHeader}>
        <div>
          <div className={styles.title}>All Products </div>
          <div className={styles.subTitle}>A 360&#176; look at Lumin</div>
        </div>

        <label>
          <select id="filter-by-category" className={styles.sortSelect}>
            <option value="">Filter</option>
            <option value="all-products">All Products</option>
            <option value="new-products">New Products</option>
          </select>
        </label>
      </div>

      <div className={styles.listBox}>{renderProducts()}</div>
    </section>
  );
}

export default ProductList;
