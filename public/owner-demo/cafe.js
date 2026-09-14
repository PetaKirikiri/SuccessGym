// Structured menu data; prices and availability transcribed from Success Cafe.
const cafeGroups = [
  ['Coffee', [
    ['Espresso', 80, 'Hot'],
    ['Espresso Macchiato', 90, 'Hot'],
    ['Piccolo Latte', 90, 'Hot'],
    ['Flat White', 90, 'Hot'],
    ['Americano', 90, 'Hot / Iced'],
    ['Latte', 90, 'Hot / Iced'],
    ['Cappuccino', 90, 'Hot / Iced'],
    ['Caramel Macchiato', 120, 'Hot / Iced'],
    ['Dirty Coffee', 90, 'Iced'],
    ['Es - Yen - Thai - Style', 100, 'Iced'],
  ]],
  ['Non-Coffee', [
    ['Milky Caramel', 90, 'Hot / Iced'],
    ['Cacao', 90, 'Hot / Iced'],
    ['Thai Tea', 90, 'Hot / Iced'],
    ['Matcha Latte', 90, 'Hot / Iced'],
    ['Lemonade Soda', 100, 'Iced'],
    ['Thai Tea Lemon Soda', 120, 'Iced'],
  ]],
  ['Signature Drink', [
    ['Aladdin', 120, 'Iced'],
    ['Orange Matcha', 120, 'Iced'],
    ['Orange Coffee', 120, 'Iced'],
    ['Mulan (Coconut Coffee)', 150, 'Iced'],
    ['Thai Tea Coco', 150, 'Iced'],
  ]],
  ['Extra', [
    ['Honey', 15],
    ['Oat Milk / Almond Milk', 30],
    ['Extra Shot', 50],
  ]],
];

class SuccessCafeMenu extends HTMLElement {
  connectedCallback() {
    if (this.childElementCount) return;
    this.innerHTML = `
      <header class="cafe-heading"><h3>Success Cafe</h3>
        <p>Open daily · 8:00 AM–5:00 PM <a href="tel:+66654020088">+66 65 402 0088</a></p>
      </header>
      <div class="cafe-photo-gallery" aria-label="Success Cafe drink photos">
        ${[
          [103, 'Iced coffee in a Success Cafe cup'],
          [718, 'Hot coffee with latte art'],
          [1333, 'Citrus drink in a Success Cafe cup'],
        ].map(([top, description]) => `
          <div class="cafe-photo">
            <img src="/owner-demo/cafe-menu-source.png" alt="${description}" style="top:-${top / 565 * 100}%" loading="lazy" width="1414" height="2000" />
          </div>`).join('')}
      </div>
      <div class="digital-menu" aria-label="Success Cafe drinks menu">
        ${cafeGroups.map(([name, items]) => `
          <details class="menu-category" open><summary>${name}</summary>
            <div class="menu-items">${items.map(([title, price, availability]) => `
              <article class="menu-item"><strong>${title}</strong><span class="price">฿${price}</span>
                ${availability ? `<small>${availability}</small>` : ''}
              </article>`).join('')}
            </div>
          </details>`).join('')}
      </div>`;
  }
}
customElements.define('success-cafe-menu', SuccessCafeMenu);
