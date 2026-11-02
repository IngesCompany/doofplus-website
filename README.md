# DoofPlus Landing Page

Landing Page of **DoofPlus**, the quality management and batch traceability platform for pharmaceutical laboratories, built by IngesCompany. It presents the value proposition to QA/QC specialists and production supervisors and ends with a call to action for each segment, which opens the corresponding view of the DoofPlus Web Application.

- Published site: https://ingescompany.github.io/doofplus-website/
- Web Application: https://doofplus-webapp.web.app

## Technologies

HTML5, CSS3 and JavaScript (ES modules), with no framework. Texts in English (default) and Latin American Spanish.

## Run locally

No installation is needed: serve the `public/` folder with any static server, for example the **Live Server** extension of VS Code (open `public/index.html` and choose *Open with Live Server*) or:

```bash
cd public
python -m http.server 8080
```

The site must be opened through a server (`http://localhost:...`), not by double-clicking the file, because the scripts are ES modules and the texts are loaded with `fetch`. On `localhost`, the sign-in and call to action buttons open the Web Application running locally at `http://localhost:4200` (`ng serve`); on any other host they open the published Web Application.

## Structure

```text
public/                   Everything that is published
  index.html              Landing Page
  terms.html, privacy.html  Legal pages linked from the footer
  404.html                Page shown by GitHub Pages for unknown paths
  favicon.ico, robots.txt
  assets/
    scripts/              Entry point (main.js), settings (config.js), i18n and one module per component
    styles/               Variables, reset, layout, grid, components, sections and responsive rules
    images/               Logo, pictures, team photos and custom cursors
    i18n/                 English and Spanish texts (en.json, es.json)
docs/                     User stories of the Landing Page
.github/workflows/        Deployment of public/ to GitHub Pages
```

## Deployment

Every push to `main` publishes the `public/` folder on GitHub Pages through GitHub Actions. In the repository settings, *Pages → Build and deployment → Source* must be set to **GitHub Actions**.

## Contributing

The repository follows GitFlow (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`), Conventional Commits and Semantic Versioning.

## License

MIT, see [LICENSE.txt](LICENSE.txt).
