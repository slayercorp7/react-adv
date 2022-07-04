import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/index";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className={"bg-dark text-white"}>
          <ProductCard.Image className={"custom-image"} />
          <ProductCard.Title title="hola" className={"text-white"} />
          <ProductCard.Buttons className={"custom-buttons"} />
        </ProductCard>
        <ProductCard product={product} className={"bg-dark text-white"}>
          <ProductImage className={"custom-image"} />
          <ProductTitle className={"text-white"} />
          <ProductButtons className={"custom-buttons"} />
        </ProductCard>
        <ProductCard product={product} className={"bg-dark text-white"} style={{backgroundColor: '#70d1f8'}}>
          <ProductImage className={"custom-image"} style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle className={"text-white"} style={{fontWeight:'bold'}} />
          <ProductButtons className={"custom-buttons"} style={{display:'flex', justifyContent:'end'}} />
        </ProductCard>
      </div>
      <hr />
    </div>
  );
};
