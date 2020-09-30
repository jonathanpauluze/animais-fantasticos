import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

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

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
