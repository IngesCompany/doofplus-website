# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.0] - 2026-11-09
### Added
- Alisee Torres in the Our Team section, with her photo and her description in English and Spanish.
### Changed
- The header and the footer of every page are shared through partials.
- The site is served as static files from `public/`, without npm (Live Server or `python -m http.server`).
- Component files, scripts and cursor paths renamed for consistency; team photos use the `team-member-<name>.jpg` naming.
- CONTRIBUTING.md uses the `doofplus-website` repository name in its title.
### Fixed
- GitHub link of the footer points to the IngesCompany organization.
### Removed
- Unused styles of the former contact form and section.
- `robots.txt`, `.nojekyll` and the boilerplate 404 page.

## [2.1.1] - 2026-11-01
### Fixed
- GitHub link of the footer and published site URL of the README point to the IngesCompany organization.

## [2.1.0] - 2026-10-31
### Fixed
- Update Footer section with contact info
### Added
- "Call-to-action" section to the frontend application
### Remove
- "Contact" section

## [2.0.0] - 2026-10-10
### Fixed
- Update Hero section according to the required design
- Update Services and section Features according to the required design
- Update Plans and Features section according to the required design
- Update About Us section according to the required design
### Added
- Firebase project alias in `.firebaserc`; the deploy cache `.firebase/` is ignored.

## [1.0.0] - 2026-05-09
### Added
- Initial release of the DoofPlus Landing Page.
- "Hero" section with the main value proposition and getting-started CTA.
- "Services and Features" section detailing modules like Real-Time IoT Monitoring and Digital Batch Management.
- "Plans and Pricing" section with monthly/annual toggle (Standard Lab and Enterprise).
- "About Us" section containing the startup description and founding team profiles.
- Interactive accordion-style "Frequently Asked Questions (FAQ)" section.