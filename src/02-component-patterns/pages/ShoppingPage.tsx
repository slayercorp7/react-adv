import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/index";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          key={product.id}
          product={product}
          InitialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({maxCount, reset, increaseBy, count, isMaxCountReached}) => (
            <>
              <ProductImage  />
              <ProductTitle  />
              <ProductButtons  maxCount={maxCount} />
              <button onClick={reset}>reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {/* si no llega al maxcount ocultar */}
              <button onClick={() => increaseBy(+2)} 
              disabled={(isMaxCountReached)}
              >+2</button>
              <span>count:{count}</span>

            </>
          )}
        </ProductCard>
      </div>

      <hr />
    </div>
  );
};
