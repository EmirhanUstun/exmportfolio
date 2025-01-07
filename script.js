// 1. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// 2. Portfolio Filtreleme
const portfolioItems = document.querySelectorAll('.work-item');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (category === 'all' || itemCategory === category) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});

// 3. Form Doğrulama
document.querySelector('.contact form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  if (name === '' || email === '' || message === '') {
      alert('Lütfen tüm alanları doldurun.');
  } else {
      alert('Mesajınız başarıyla gönderildi!');
      this.reset();
  }
});

// 4. Popup Görsel Galerisi
document.querySelectorAll('.work-item img').forEach(img => {
  img.addEventListener('click', () => {
      const popup = document.createElement('div');
      popup.classList.add('popup');
      const largeImg = document.createElement('img');
      largeImg.src = img.src;  // Tıklanan görselin kaynağını al
      popup.appendChild(largeImg);

      document.body.appendChild(popup);

      popup.addEventListener('click', () => {
          popup.remove();
      });
  });
});