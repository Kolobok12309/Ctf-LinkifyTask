import scrollparent from 'scrollparent';

export default (el) => {
  if (!el) return;

  const closestScrollableEl = scrollparent(el);
  const top = el.offsetTop;
  closestScrollableEl.scroll({ top, left: 0, behavior: 'smooth' });
};
