import Collapsible from './Collapsible';

const container = document.querySelector('.widget');
const block = new Collapsible(container);

block.subscribeOnEvents();
