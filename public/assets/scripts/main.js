import { i18n } from './i18n.js';
import { loadPartials } from './partials.js';
import { initializeLanguageSwitcher } from './language-switcher.js';
import { initializeNavbar } from './navbar.js';
import { initializeSegmentAccess } from './segment-access.js';
import { initializeAccordions } from './accordion.js';
import { initializeBillingToggle } from './billing-toggle.js';
import { initializeVideoPlayers } from './video-player.js';
import { initializeMagneticEffect } from './magnetic.effect.js';

/**
 * Entry point of the Landing Page.
 * The shared header and footer are loaded first, then the texts and the components.
 * Each component checks that its elements exist on the current page.
 */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadPartials();
  } catch (error) {
    console.error(error);
  }

  try {
    await i18n.init();
  } catch (error) {
    // The HTML already contains the English texts, so the page stays usable.
    console.error(error);
  }

  initializeLanguageSwitcher();
  initializeNavbar();
  initializeSegmentAccess();
  initializeAccordions();
  initializeBillingToggle();
  initializeVideoPlayers();
  initializeMagneticEffect();
});
