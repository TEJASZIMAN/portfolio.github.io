const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 15000,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 45000,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'cycle',
      price: 10000,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'playstation 5',
      price: 55000,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      name: 'television',
      price: 45000,
      image: 'https://via.placeholder.com/200',
    },
    
  ];
  
  const cart = [];
  
  const productsContainer = document.getElementById('products');
  if (productsContainer) {
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} INR</p>
          <a href="">View Details</a>
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });
  }
  
  