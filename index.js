const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
  dropdown.addEventListener('click', () => {
    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  });
});

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 57; i++) {
      const products = data['products_' + i];
      const productsContainer = document.getElementById('products_' + i);
      if (products && productsContainer) {
        for (let product of products) {
          const productContainer = document.createElement('div');
          productContainer.classList.add('product');
          const productName = document.createElement('h2');
          productName.textContent = product.name;
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;
          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;
          const productPrice = document.createElement('p');
          productPrice.textContent = `$${product.price}`;
          const button = document.createElement('a');
          button.classList.add('btn');
          productContainer.appendChild(productName);
          productContainer.appendChild(productImage);
          productContainer.appendChild(productDescription);
          productContainer.appendChild(productPrice);
          productContainer.appendChild(button);
          productsContainer.appendChild(productContainer);
        }
      }
    }
    
  })
  .catch(error => console.error(error));

  