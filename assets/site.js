(() => {
 const root=document.getElementById('eagle-site')||document;
 root.addEventListener('click',event=>{
  const toggle=event.target.closest('[data-menu]');
  if(toggle){const nav=root.querySelector('#mobile-nav');nav.hidden=!nav.hidden;toggle.setAttribute('aria-expanded',String(!nav.hidden));}
  const photo=event.target.closest('[data-photo]');
  if(photo){const dialog=root.querySelector('#photo-dialog');dialog.querySelector('img').src=photo.dataset.photo;dialog.querySelector('img').alt=photo.dataset.caption||'Eagle Eye Roofing project photograph';dialog.showModal();}
  if(event.target.closest('[data-close-photo]'))root.querySelector('#photo-dialog').close();
  const faq=event.target.closest('[data-faq]');
  if(faq){const answer=root.querySelector('#'+faq.dataset.faq);const open=answer.classList.toggle('open');faq.setAttribute('aria-expanded',String(open));}
  const more=event.target.closest('[data-reviews]');
  if(more){const group=root.querySelector('#'+more.dataset.reviews);group.hidden=!group.hidden;more.textContent=group.hidden?'Show more reviews':'Show fewer reviews';more.setAttribute('aria-expanded',String(!group.hidden));}
 });

 const dialog=root.querySelector('#photo-dialog');
 if(dialog)dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
})();
