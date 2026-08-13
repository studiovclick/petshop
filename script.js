const catalog = {
  all: [
    {
      id: 1,
      name: 'Ração Premium Cães',
      category: 'racao',
      price: 89.9,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
      badge: 'Ração',
      description: 'Fórmula rica em proteínas para energia, saúde e sabor irresistível no dia a dia.'
    },
    {
      id: 2,
      name: 'Brinquedo de Pelúcia',
      category: 'brinquedos',
      price: 49.9,
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      badge: 'Brinquedo',
      description: 'Ideal para diversão, conforto e interação durante os momentos de brincadeira.'
    },
    {
      id: 3,
      name: 'Kit Higiene Pet',
      category: 'higiene',
      price: 129.9,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
      badge: 'Higiene',
      description: 'Shampoo, toalha e itens essenciais para limpeza suave e prática da pelagem.'
    },
    {
      id: 4,
      name: 'Coleira Luxo',
      category: 'acessorios',
      price: 69.9,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
      badge: 'Acessório',
      description: 'Coleira resistente e elegante, com acabamento confortável para passeios diários.'
    },
    {
      id: 5,
      name: 'Ração Filhote',
      category: 'racao',
      price: 96.5,
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
      badge: 'Filhote',
      description: 'Nutrição específica para crescimento com sabor e digestibilidade reforçada.'
    },
    {
      id: 6,
      name: 'Bolinha Inteligente',
      category: 'brinquedos',
      price: 39.0,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
      badge: 'Diversão',
      description: 'Brinquedo leve e interativo para estimular o exercício e o aprendizado do pet.'
    },
    {
      id: 7,
      name: 'Escova e Pente',
      category: 'higiene',
      price: 54.9,
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
      badge: 'Higiene',
      description: 'Ferramenta essencial para manter o pelo macio, limpo e livre de nós.'
    },
    {
      id: 8,
      name: 'Caminha Confort',
      category: 'acessorios',
      price: 149.9,
      image: 'https://images.unsplash.com/photo-1601758123927-5d1ac8f0a9f6?auto=format&fit=crop&w=900&q=80',
      badge: 'Conforto',
      description: 'Caminha macia e resistente para descanso e relaxamento do seu pet em qualquer ambiente.'
    }
  ],
  racao: [
    {
      id: 1,
      name: 'Ração Premium Cães',
      category: 'racao',
      price: 89.9,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
      badge: 'Ração',
      description: 'Fórmula rica em proteínas para energia, saúde e sabor irresistível no dia a dia.'
    },
    {
      id: 5,
      name: 'Ração Filhote',
      category: 'racao',
      price: 96.5,
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
      badge: 'Filhote',
      description: 'Nutrição específica para crescimento com sabor e digestibilidade reforçada.'
    },
    {
      id: 9,
      name: 'Ração Light',
      category: 'racao',
      price: 82.4,
      image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=80',
      badge: 'Saúde',
      description: 'Opção equilibrada para manter o peso ideal e o bem-estar do seu pet.'
    }
  ],
  brinquedos: [
    {
      id: 2,
      name: 'Brinquedo de Pelúcia',
      category: 'brinquedos',
      price: 49.9,
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      badge: 'Brinquedo',
      description: 'Ideal para diversão, conforto e interação durante os momentos de brincadeira.'
    },
    {
      id: 6,
      name: 'Bolinha Inteligente',
      category: 'brinquedos',
      price: 39.0,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
      badge: 'Diversão',
      description: 'Brinquedo leve e interativo para estimular o exercício e o aprendizado do pet.'
    },
    {
      id: 10,
      name: 'Mordedor de Borracha',
      category: 'brinquedos',
      price: 44.5,
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
      badge: 'Mordedor',
      description: 'Excelente para mastigar, exercitar a boca e aliviar o tédio de filhotes.'
    }
  ],
  higiene: [
    {
      id: 3,
      name: 'Kit Higiene Pet',
      category: 'higiene',
      price: 129.9,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
      badge: 'Higiene',
      description: 'Shampoo, toalha e itens essenciais para limpeza suave e prática da pelagem.'
    },
    {
      id: 7,
      name: 'Escova e Pente',
      category: 'higiene',
      price: 54.9,
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
      badge: 'Higiene',
      description: 'Ferramenta essencial para manter o pelo macio, limpo e livre de nós.'
    },
    {
      id: 11,
      name: 'Lenços de Limpeza',
      category: 'higiene',
      price: 27.9,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
      badge: 'Limpeza',
      description: 'Lenços práticos para retirar sujeira, odores e manter a higiene do dia a dia.'
    }
  ],
  acessorios: [
    {
      id: 4,
      name: 'Coleira Luxo',
      category: 'acessorios',
      price: 69.9,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
      badge: 'Acessório',
      description: 'Coleira resistente e elegante, com acabamento confortável para passeios diários.'
    },
    {
      id: 8,
      name: 'Caminha Confort',
      category: 'acessorios',
      price: 149.9,
      image: 'https://images.unsplash.com/photo-1601758123927-5d1ac8f0a9f6?auto=format&fit=crop&w=900&q=80',
      badge: 'Conforto',
      description: 'Caminha macia e resistente para descanso e relaxamento do seu pet em qualquer ambiente.'
    },
    {
      id: 12,
      name: 'Comedouro Premium',
      category: 'acessorios',
      price: 64.9,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
      badge: 'Utilidade',
      description: 'Comedouro resistente e prático, pensado para manter a alimentação mais organizada.'
    }
  ]
};

const state = {
  cart: []
};

const currentPageCategory = document.body.dataset.pageCategory || 'all';
const products = catalog[currentPageCategory] || catalog.all;

const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const floatingCartCount = document.getElementById('floatingCartCount');
const totalValue = document.getElementById('totalValue');
const totalValueFinal = document.getElementById('totalValueFinal');
const clearCartBtn = document.getElementById('clearCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartPanel = document.querySelector('.cart-panel');
const cartTriggerButtons = document.querySelectorAll('.cart-trigger');
const cartCloseBtn = document.querySelector('.cart-close');

function money(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function toggleCart(open) {
  if (!cartPanel) return;
  cartPanel.classList.toggle('is-open', open);
  cartPanel.setAttribute('aria-hidden', String(!open));

  cartTriggerButtons.forEach((button) => {
    button.setAttribute('aria-expanded', String(open));
  });
}

function renderProducts() {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-meta">
          <span class="product-badge">${product.badge}</span>
          <span class="product-price">${money(product.price)}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button class="btn-cart" data-product-id="${product.id}">Adicionar ao pedido</button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.btn-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      addToCart(productId);
      toggleCart(true);
    });
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  state.cart.push(product);
  updateCart();
}

function removeFromCart(productId) {
  const itemIndex = state.cart.findIndex((item) => item.id === productId);

  if (itemIndex >= 0) {
    state.cart.splice(itemIndex, 1);
    updateCart();
  }
}

function updateCart() {
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  cartCount.textContent = state.cart.length;
  if (floatingCartCount) {
    floatingCartCount.textContent = state.cart.length;
  }
  totalValue.textContent = money(total);
  totalValueFinal.textContent = money(total);

  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio. Escolha um produto para começar.</div>';
    return;
  }

  cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${money(item.price)}</div>
      </div>
      <button class="cart-item-remove" data-remove-id="${item.id}" aria-label="Remover ${item.name}">✕</button>
    </div>
  `).join('');

  document.querySelectorAll('.cart-item-remove').forEach((button) => {
    button.addEventListener('click', () => {
      removeFromCart(Number(button.dataset.removeId));
    });
  });
}

function clearCart() {
  state.cart = [];
  updateCart();
}

function sendWhatsApp() {
  if (!state.cart.length) {
    alert('Adicione pelo menos um produto antes de finalizar o pedido.');
    return;
  }

  const items = state.cart
    .map((item, index) => `${index + 1}. ${item.name} - ${money(item.price)}`)
    .join('%0A');

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);
  const whatsappNumber = '5551989727254';
  const message = encodeURIComponent(
    `Olá! Gostaria de fazer o pedido.%0A%0A` +
    `Itens:%0A${items}%0A%0A` +
    `Quantidade: ${state.cart.length}%0A` +
    `Total: ${money(total)}%0A%0A` +
    `Por favor, me confirme o prazo de entrega e a forma de pagamento.`
  );

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  clearCart();
  toggleCart(false);
}

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', clearCart);
}

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', sendWhatsApp);
}

if (cartCloseBtn) {
  cartCloseBtn.addEventListener('click', () => toggleCart(false));
}

cartTriggerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = cartPanel && cartPanel.classList.contains('is-open');
    toggleCart(!isOpen);
  });
});

renderProducts();
updateCart();
toggleCart(false);
