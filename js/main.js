// Get Side Bar Element
let sideBar = document.querySelector('.side-bar');

// Get Side Zipper Element
let sideZipper = document.querySelector('.side-bar .side-zipper');

// Toggle Classes On Side Bar Element To Open onclick On Side Zipper
sideZipper.onclick = function () {
       // Toggle Open Class On Side Bar
       sideBar.classList.toggle('open');

       // Toggle Swipe Class On Side Zipper
       sideZipper.classList.toggle('swipe');
};

// Get Every Li In Ul In Gallery
let galleryList = document.querySelectorAll('.gallery ul li');

// Get Every Catalog Image Div In catalog
let catalogImages = document.querySelectorAll('.catalog .catalog-image');

// Loop On Every Element In Gallery List
galleryList.forEach((e) => {
       e.addEventListener('click', () => {
              activeClass(galleryList, e);

              //   Loop On Every Element On Catalog Images
              catalogImages.forEach((catImg) => {
                     //   Hidden All Catalog Image
                     catImg.style.display = 'none';
              });
              //   Loop On All Element Data Equal To Classes
              document.querySelectorAll(e.dataset.catg).forEach((e) => {
                     //   Show Catalog Image
                     e.style.display = 'block';
              });
       });
});

// Get Side Links
let sideLinks = document.querySelectorAll('.lefter .links li');

// Loop On Every Link In Side Links
sideLinks.forEach((e) => {
       e.addEventListener('click', () => {
              activeClass(sideLinks, e);
       });
});

// Get Side Bar Links
let sideBarLinks = document.querySelectorAll('.side-bar .links li');

// Loop On Every Link In Side Bar Links
sideBarLinks.forEach((e) => {
       e.addEventListener('click', () => {
              activeClass(sideBarLinks, e);
       });
});

// Start Function To Active Class
function activeClass(parent, ele) {
       parent.forEach((ele) => {
              ele.classList.remove('active');
       });
       ele.classList.add('active');
}
