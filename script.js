// ======================================================
// KERIPIK TEMPE LANCAR ABADI
// WEBSITE INTERACTIONS + SHOPPING CART
// ======================================================

document.addEventListener('DOMContentLoaded', () => {

 // ==================================================
// PREVIEW CONTOH KEMASAN
// ==================================================

const kemasanModal = document.getElementById('kemasanModal');
const kemasanImage = document.getElementById('kemasanModalImage');
const kemasanTitle = document.getElementById('kemasanModalTitle');
const kemasanPrice = document.getElementById('kemasanModalPrice');
const kemasanOrder = document.getElementById('kemasanModalOrder');
const kemasanClose = document.getElementById('kemasanModalClose');

const gambarKemasan = {
  kecil: {
    nama: 'Kemasan Kecil',
    harga: 'Rp 8.000',
    gambar: 'assets/kemasan/kemasan-kecil.webp'
  },

  besar: {
    nama: 'Kemasan Besar',
    harga: 'Rp 12.000',
    gambar: 'assets/kemasan/kemasan-besar.webp'
  },

  '1kg': {
    nama: 'Kemasan 1 Kg',
    harga: 'Rp 75.000',
    gambar: 'assets/kemasan/kemasan-1kg.webp'
  }
};

document.querySelectorAll('.kemasan-btn').forEach(button => {

  button.addEventListener('click', () => {

    const jenis = button.dataset.kemasan;
    const data = gambarKemasan[jenis];

    if (!data || !kemasanModal) return;

    kemasanTitle.textContent = data.nama;
    kemasanPrice.textContent = data.harga;
    kemasanImage.src = data.gambar;
    kemasanImage.alt = data.nama;

    kemasanOrder.href =
      `https://wa.me/6289639173344?text=${encodeURIComponent(
        `Halo, saya ingin memesan ${data.nama} Keripik Tempe Lancar Abadi dengan harga ${data.harga}.`
      )}`;

    kemasanModal.classList.add('active');
    kemasanModal.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

  });

});

function tutupKemasan() {

  if (!kemasanModal) return;

  kemasanModal.classList.remove('active');
  kemasanModal.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';

}


// Tombol X
kemasanClose?.addEventListener(
  'click',
  tutupKemasan
);


// Klik background
document
  .querySelectorAll('[data-close-kemasan]')
  .forEach(element => {

    element.addEventListener(
      'click',
      tutupKemasan
    );

  });


// Tombol ESC
document.addEventListener(
  'keydown',
  event => {

    if (event.key === 'Escape') {
      tutupKemasan();
    }

  }
);

  // ==================================================
  // MOBILE NAVIGATION
  // ==================================================

  const navToggle =
    document.getElementById('navToggle');

  const navMenu =
    document.getElementById('navMenu');


  if (navToggle && navMenu) {

    navToggle.addEventListener(
      'click',
      () => {

        navMenu.classList.toggle('active');

        const icon =
          navToggle.querySelector('i');

        icon.classList.toggle('fa-bars');

        icon.classList.toggle('fa-times');

      }
    );

  }


  document
    .querySelectorAll('.nav-link')
    .forEach(link => {

      link.addEventListener(
        'click',
        () => {

          if (!navMenu || !navToggle)
            return;

          navMenu.classList.remove(
            'active'
          );

          const icon =
            navToggle.querySelector('i');

          icon.classList.add(
            'fa-bars'
          );

          icon.classList.remove(
            'fa-times'
          );

        }
      );

    });



  // ==================================================
  // NAVBAR SCROLL EFFECT
  // ==================================================

  const navbar =
    document.getElementById('navbar');


  const handleScroll = () => {

    if (!navbar)
      return;


    if (window.scrollY > 40) {

      navbar.classList.add(
        'scrolled'
      );

    } else {

      navbar.classList.remove(
        'scrolled'
      );

    }

  };


  window.addEventListener(
    'scroll',
    handleScroll
  );

  handleScroll();



  // ==================================================
  // REVEAL ANIMATION
  // ==================================================

  const revealObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'active'
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12,

        rootMargin:
          '0px 0px -60px 0px',
      }

    );


  document
    .querySelectorAll('.reveal')
    .forEach(el => {

      revealObserver.observe(el);

    });



  // ==================================================
  // SMOOTH SCROLL
  // ==================================================

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener(
        'click',
        (event) => {

          const targetId =
            anchor.getAttribute('href');


          if (
            targetId &&
            targetId.length > 1
          ) {

            const target =
              document.querySelector(
                targetId
              );


            if (target) {

              event.preventDefault();


              const navbarHeight =
                navbar
                  ? navbar.offsetHeight
                  : 0;


              const position =
                target
                  .getBoundingClientRect()
                  .top
                +
                window.pageYOffset
                -
                navbarHeight
                +
                1;


              window.scrollTo({

                top: position,

                behavior: 'smooth',

              });

            }

          }

        }
      );

    });



  // ==================================================
  // SHOPPING CART
  // ==================================================

  const OWNER_WHATSAPP =
    '6289639173344';


  let cart = [];


  // ==================================================
  // ELEMENTS
  // ==================================================

  const cartFloating =
    document.getElementById(
      'cartFloating'
    );


  const cartCount =
    document.getElementById(
      'cartCount'
    );


  const cartModal =
    document.getElementById(
      'cartModal'
    );


  const cartClose =
    document.getElementById(
      'cartClose'
    );


  const cartItems =
    document.getElementById(
      'cartItems'
    );


  const cartEmpty =
    document.getElementById(
      'cartEmpty'
    );


  const cartSummary =
    document.getElementById(
      'cartSummary'
    );


  const cartTotalItem =
    document.getElementById(
      'cartTotalItem'
    );


  const cartTotalPrice =
    document.getElementById(
      'cartTotalPrice'
    );


  const checkoutBtn =
    document.getElementById(
      'checkoutBtn'
    );


  const checkoutModal =
    document.getElementById(
      'checkoutModal'
    );


  const checkoutClose =
    document.getElementById(
      'checkoutClose'
    );


  const checkoutForm =
    document.getElementById(
      'checkoutForm'
    );


  const checkoutItems =
    document.getElementById(
      'checkoutItems'
    );


  const checkoutTotal =
    document.getElementById(
      'checkoutTotal'
    );



  // ==================================================
  // RUPIAH FORMATTER
  // ==================================================

  const rupiah = (number) => {

    return new Intl.NumberFormat(

      'id-ID',

      {
        style: 'currency',

        currency: 'IDR',

        minimumFractionDigits: 0,
      }

    ).format(number);

  };



  // ==================================================
  // SAVE CART
  // ==================================================

  const saveCart = () => {

    localStorage.setItem(

      'lancarAbadiCart',

      JSON.stringify(cart)

    );

  };



  // ==================================================
  // LOAD CART
  // ==================================================

  const loadCart = () => {

    const savedCart =
      localStorage.getItem(
        'lancarAbadiCart'
      );


    if (savedCart) {

      try {

        cart =
          JSON.parse(savedCart);

      } catch {

        cart = [];

      }

    }

  };



  // ==================================================
  // CALCULATE CART
  // ==================================================

  const calculateCart = () => {

    let totalItem = 0;

    let totalPrice = 0;


    cart.forEach(item => {

      totalItem +=
        item.quantity;


      totalPrice +=
        item.price *
        item.quantity;

    });


    return {

      totalItem,

      totalPrice,

    };

  };



  // ==================================================
  // ADD TO CART
  // ==================================================

  const addToCart =
    (name, price) => {


      const existing =
        cart.find(
          item =>
            item.name === name
        );


      if (existing) {

        existing.quantity++;

      } else {

        cart.push({

          name,

          price,

          quantity: 1,

        });

      }


      saveCart();

      renderCart();

      showCart();

    };



  // ==================================================
  // BUTTON ADD CART
  // ==================================================

  document
    .querySelectorAll(
      '.add-cart-btn'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const name =
            button.dataset.name;


          const price =
            Number(
              button.dataset.price
            );


          addToCart(
            name,
            price
          );

        }
      );

    });



  // ==================================================
  // CHANGE QUANTITY
  // ==================================================

  const changeQuantity =
    (index, change) => {


      cart[index].quantity +=
        change;


      if (
        cart[index].quantity <= 0
      ) {

        cart.splice(
          index,
          1
        );

      }


      saveCart();

      renderCart();

  };



  // ==================================================
  // REMOVE PRODUCT
  // ==================================================

  const removeItem =
    (index) => {

      cart.splice(
        index,
        1
      );


      saveCart();

      renderCart();

    };



  // ==================================================
  // RENDER CART
  // ==================================================

  const renderCart = () => {

    if (!cartItems)
      return;


    cartItems.innerHTML = '';


    const {

      totalItem,

      totalPrice,

    } = calculateCart();


    if (cartCount) {

      cartCount.textContent =
        totalItem;

    }


    if (
      cart.length === 0
    ) {

      if (cartEmpty)
        cartEmpty.style.display =
          'flex';


      if (cartSummary)
        cartSummary.style.display =
          'none';


    } else {

      if (cartEmpty)
        cartEmpty.style.display =
          'none';


      if (cartSummary)
        cartSummary.style.display =
          'block';

    }


    cart.forEach(
      (item, index) => {


        const subtotal =
          item.price *
          item.quantity;


        const element =
          document.createElement(
            'div'
          );


        element.className =
          'cart-item';


        element.innerHTML = `

          <div class="cart-item-top">

            <div>

              <h4>
                ${item.name}
              </h4>

              <span class="cart-item-price">
                ${rupiah(item.price)} / pcs
              </span>

            </div>


            <button
              type="button"
              class="remove-cart-item"
              aria-label="Hapus produk"
            >

              <i class="fas fa-trash"></i>

            </button>

          </div>


          <div class="cart-item-bottom">

            <div class="quantity-control">

              <button
                type="button"
                class="quantity-btn minus"
              >
                −
              </button>


              <span class="quantity-number">

                ${item.quantity}

              </span>


              <button
                type="button"
                class="quantity-btn plus"
              >
                +
              </button>

            </div>


            <span class="cart-subtotal">

              ${rupiah(subtotal)}

            </span>

          </div>

        `;


        element
          .querySelector('.minus')
          .addEventListener(
            'click',
            () => {

              changeQuantity(
                index,
                -1
              );

            }
          );


        element
          .querySelector('.plus')
          .addEventListener(
            'click',
            () => {

              changeQuantity(
                index,
                1
              );

            }
          );


        element
          .querySelector(
            '.remove-cart-item'
          )
          .addEventListener(
            'click',
            () => {

              removeItem(index);

            }
          );


        cartItems.appendChild(
          element
        );

      }
    );


    if (cartTotalItem) {

      cartTotalItem.textContent =
        totalItem;

    }


    if (cartTotalPrice) {

      cartTotalPrice.textContent =
        rupiah(totalPrice);

    }

  };



  // ==================================================
  // SHOW CART
  // ==================================================

  const showCart = () => {

    if (!cartModal)
      return;


    cartModal.classList.add(
      'active'
    );


    document.body.style.overflow =
      'hidden';

  };



  // ==================================================
  // CLOSE CART
  // ==================================================

  const closeCart = () => {

    if (!cartModal)
      return;


    cartModal.classList.remove(
      'active'
    );


    document.body.style.overflow =
      '';

  };



  if (cartFloating) {

    cartFloating.addEventListener(
      'click',
      showCart
    );

  }


  if (cartClose) {

    cartClose.addEventListener(
      'click',
      closeCart
    );

  }


  document
    .querySelectorAll(
      '[data-close-cart]'
    )
    .forEach(element => {

      element.addEventListener(
        'click',
        closeCart
      );

    });



  // ==================================================
  // CHECKOUT
  // ==================================================

  const showCheckout = () => {

    if (
      cart.length === 0
    )
      return;


    closeCart();


    renderCheckout();


    checkoutModal.classList.add(
      'active'
    );


    document.body.style.overflow =
      'hidden';

  };



  const closeCheckout = () => {

    if (!checkoutModal)
      return;


    checkoutModal.classList.remove(
      'active'
    );


    document.body.style.overflow =
      '';

  };



  if (checkoutBtn) {

    checkoutBtn.addEventListener(
      'click',
      showCheckout
    );

  }


  if (checkoutClose) {

    checkoutClose.addEventListener(
      'click',
      closeCheckout
    );

  }


  document
    .querySelectorAll(
      '[data-close-checkout]'
    )
    .forEach(element => {

      element.addEventListener(
        'click',
        closeCheckout
      );

    });



  // ==================================================
  // CHECKOUT SUMMARY
  // ==================================================

  const renderCheckout = () => {

    if (!checkoutItems)
      return;


    checkoutItems.innerHTML = '';


    cart.forEach(item => {

      const subtotal =
        item.price *
        item.quantity;


      const row =
        document.createElement(
          'div'
        );


      row.className =
        'checkout-item';


      row.innerHTML = `

        <span>

          ${item.name}
          ×
          ${item.quantity}

        </span>


        <strong>

          ${rupiah(subtotal)}

        </strong>

      `;


      checkoutItems.appendChild(
        row
      );

    });


    const {
      totalPrice
    } =
      calculateCart();


    checkoutTotal.textContent =
      rupiah(totalPrice);

  };



  // ==================================================
  // SEND TO WHATSAPP
  // ==================================================

  if (checkoutForm) {

    checkoutForm.addEventListener(
      'submit',
      event => {

        event.preventDefault();


        const name =
          document
            .getElementById(
              'customerName'
            )
            .value
            .trim();


        const phone =
          document
            .getElementById(
              'customerPhone'
            )
            .value
            .trim();


        const address =
          document
            .getElementById(
              'customerAddress'
            )
            .value
            .trim();


        const note =
          document
            .getElementById(
              'customerNote'
            )
            .value
            .trim();


        if (
          !name ||
          !phone ||
          !address
        ) {

          alert(
            'Mohon lengkapi data customer terlebih dahulu.'
          );

          return;

        }


        const {

          totalItem,

          totalPrice,

        } =
          calculateCart();



        let orderDetails = '';


        cart.forEach(
          (item, index) => {

            const subtotal =
              item.price *
              item.quantity;


            orderDetails +=
              `${index + 1}. ${item.name}\n` +
              `   ${item.quantity} × ${rupiah(item.price)}\n` +
              `   Subtotal: ${rupiah(subtotal)}\n\n`;

          }
        );



        const message =
`Halo Owner Lancar Abadi 👋

Saya ingin melakukan pemesanan Keripik Tempe Lancar Abadi.

*DATA CUSTOMER*
Nama: ${name}
No. WhatsApp: ${phone}
Alamat: ${address}

*PESANAN*
${orderDetails}
Total Item: ${totalItem}
*TOTAL PESANAN: ${rupiah(totalPrice)}*

Catatan:
${note || '-'}

Mohon konfirmasi ketersediaan dan proses pesanannya. Terima kasih.`;


        const whatsappURL =
          `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(
            message
          )}`;


        window.open(
          whatsappURL,
          '_blank'
        );

      }
    );

  }



  // ==================================================
  // ESC CLOSE MODAL
  // ==================================================

  document.addEventListener(
    'keydown',
    event => {

      if (
        event.key !==
        'Escape'
      )
        return;


      closeCart();

      closeCheckout();

    }
  );



  // ==================================================
  // INITIALIZE CART
  // ==================================================

  loadCart();

  renderCart();



  // ==================================================
  // SMOOTH AUTO HIDE SCROLLBAR
  // Kalau kode scrollbar sebelumnya sudah ada,
  // hapus bagian ini supaya tidak dobel.
  // ==================================================

  const root =
    document.documentElement;


  const triggerZone =
    35;


  let hideTimer = null;


  const showScrollbar = () => {

    clearTimeout(
      hideTimer
    );


    root.classList.add(
      'scrollbar-visible'
    );

  };


  const hideScrollbar = () => {

    clearTimeout(
      hideTimer
    );


    hideTimer =
      setTimeout(
        () => {

          root.classList.remove(
            'scrollbar-visible'
          );

        },
        500
      );

  };


  document.addEventListener(
    'mousemove',
    event => {

      const distanceFromRight =
        window.innerWidth -
        event.clientX;


      if (
        distanceFromRight <=
        triggerZone
      ) {

        showScrollbar();

      } else {

        hideScrollbar();

      }

    }
  );


});