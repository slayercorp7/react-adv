import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/index";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {
 const {products, onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className={"bg-dark text-white"}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className={"custom-image"} />
            <ProductTitle className={"text-white"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className={"bg-dark text-white"}
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className={"custom-image"} />
            <ProductButtons
              className={"custom-buttons"}
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      <hr />
    </div>
  );
  
};
