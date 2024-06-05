import "./Index.css";

const Table = ({ children, ...props }) => {
  const productsList = [];
  async function getProducts() {
    try {
      const productsResponse = await fetch(
        `https://665f28621e9017dc16f31a57.mockapi.io/api/products`
      );
      const products = await productsResponse.json();
      console.log(products);
    } catch (error) {
      console.log();
    }
  }

  getProducts();

  return <table>{children}</table>;
};

export default Table;
