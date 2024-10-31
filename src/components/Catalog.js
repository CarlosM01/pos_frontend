import React from 'react';
import useAuth from '../hooks/useAuth';

function ProductCatalog() {
  const { role, loading } = useAuth(); // Rol del usuario
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Producto ${productId} añadido al carrito`);
  };

  const handleEditProduct = (productId) => {
    console.log(`Editar producto: ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    console.log(`Eliminar producto: ${productId}`);
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>

            {role === 'admin' ? (
              <div>
                <button onClick={() => handleEditProduct(product.id)}>Editar</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
              </div>
            ) : (
              <button onClick={() => handleAddToCart(product.id)}>Añadir al Carrito</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '200px',
    textAlign: 'center',
  },
  // image: {
  //   width: '100%',
  //   height: '150px',
  //   objectFit: 'cover',
  //   marginBottom: '8px',
  // },
};

export default ProductCatalog;
