const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=document.querySelector('.nav nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
let category='All';
const search=document.querySelector('#search');
function filterPosts(){let count=0;document.querySelectorAll('.card').forEach(card=>{const match=(category==='All'||card.dataset.category===category)&&card.dataset.search.includes((search?.value||'').trim().toLowerCase());card.hidden=!match;if(match)count++;});const empty=document.querySelector('.empty');if(empty)empty.hidden=count>0;}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;document.querySelectorAll('.filter').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});filterPosts();}));
search?.addEventListener('input',filterPosts);
