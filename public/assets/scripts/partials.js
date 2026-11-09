/**
 * Shared fragments of the pages (header and footer), kept once in public/partials/.
 * Every element with data-partial="<name>" is replaced by the content of
 * partials/_<name>.html before the components are initialized.
 */
export async function loadPartials() {
  const placeholders = [...document.querySelectorAll('[data-partial]')];

  await Promise.all(placeholders.map(async placeholder => {
    const name = placeholder.dataset.partial;
    const response = await fetch(new URL(`../../partials/_${name}.html`, import.meta.url));
    if (!response.ok) throw new Error(`Partial "${name}" could not be loaded (HTTP ${response.status}).`);

    const template = document.createElement('template');
    template.innerHTML = await response.text();
    linkSectionsToIndex(template.content);
    placeholder.replaceWith(template.content);
  }));
}

/**
 * The section links of the partials (#features, #plans...) point to the Landing Page.
 * On the other pages (terms, privacy) they must open index.html at that section,
 * and none of them is marked as the active one.
 */
function linkSectionsToIndex(fragment) {
  if (document.getElementById('home')) return;
  fragment.querySelectorAll('a[href^="#"]').forEach(link => {
    const hash = link.getAttribute('href');
    if (hash !== '#' && hash !== '#main') link.setAttribute('href', `index.html${hash}`);
    link.classList.remove('active');
  });
}
