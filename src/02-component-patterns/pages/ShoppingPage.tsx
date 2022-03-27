import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/index";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "compra",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping store</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="hola" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
      <hr />
    </div>
  );
};
