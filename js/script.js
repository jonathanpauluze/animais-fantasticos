import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import AnimateOnScroll from './modules/animate-on-scroll.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MobileMenu from './modules/mobile-menu.js';
import OpeningHours from './modules/opening-hours.js';
import SlideNav from './modules/slide';

const smoothScroll = new SmoothScroll({
  links: '[data-menu="smooth"] a[href^="#"]',
});
smoothScroll.init();

const accordion = new Accordion({
  list: '[data-anime="accordion"] dt',
});
accordion.init();

const tabNav = new TabNav({
  menu: '[data-tab="menu"] li',
  content: '[data-tab="content"] section',
});
tabNav.init();

const modal = new Modal({
  openButton: '[data-modal="abrir"]',
  closeButton: '[data-modal="fechar"]',
  modalContainer: '[data-modal="container"]',
});
modal.init();

const tooltip = new Tooltip({
  tooltips: '[data-tooltip]',
});
tooltip.init();

const animateOnScroll = new AnimateOnScroll({
  sections: '[data-animate="scroll"]',
});
animateOnScroll.init();

const dropdownMenu = new DropdownMenu({
  dropdownMenus: '[data-dropdown]',
});
dropdownMenu.init();

const mobileMenu = new MobileMenu({
  menuButton: '[data-menu="button"]',
  menuList: '[data-menu="list"]',
});
mobileMenu.init();

const openingHours = new OpeningHours({
  openingDays: '[data-weekdays]',
});
openingHours.init();


fetchAnimals('./animalsapi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-price');

const slideNav = new SlideNav({
  container: '.slide-container',
  wrapper: '.slide-wrapper',

});

slideNav.init();
slideNav.addDots('.custom-dots');
