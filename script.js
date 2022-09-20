const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

/* footer year */
const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}
handleCurrentYear();
/* end of footer year */

/* tools nav */
    const toolsNav = document.querySelector('.tools-nav');
    const navItem = document.querySelectorAll('.nav-item');
    const frontPage = document.querySelector('.front-page');
    const body = document.querySelector('body');
    const navTools = document.querySelector('.nav-tools');
    const navToolsLinkA = document.querySelector('.nav-tools-link a');
    const exit = document.querySelector('.exit');

    const thirdItem = document.querySelector('.nav-menu :nth-child(3)');
    console.log(thirdItem);

    const navToolsLink = document.querySelectorAll('.nav-tools-link');

    thirdItem.addEventListener('click', () => {
        frontPage.style.display = "none";
        body.style.backgroundImage = "none"
        body.style.backgroundColor = "#262626"
        toolsNav.style.display = "block";
        toolsNav.style.left = "0";
    })

    exit.addEventListener('click', () => {
        frontPage.style.display = "block";
        body.style.backgroundImage = " url('img/DesktopXL.jpg')";
        body.style.backgroundColor = "#none"
        toolsNav.style.display = "none";
    })

    document.querySelectorAll(".nav-tools-link").forEach(tl => tl.addEventListener('click', () => {
        frontPage.style.display = "block";
        body.style.backgroundImage = " url('img/DesktopXL.jpg')";
        body.style.backgroundColor = "none"
        toolsNav.style.display = "none";
    }))

    // navToolsLink.addEventListener('click', () => {
    //     frontPage.style.display = "block";
    //     body.style.backgroundImage = " url('img/DesktopXL.jpg')";
    //     body.style.backgroundColor = "#none"
    //     toolsNav.style.display = "none";
    // })  

/* end of tools nav */

const scrollToTopBtn = document.getElementById("scrollToTopBtn")
const rootElement = document.documentElement;

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  scrollToTopBtn.addEventListener("click", scrollToTop)