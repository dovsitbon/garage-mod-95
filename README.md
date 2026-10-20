# Garage Mod 95 — site vitrine

Site une page du Garage Mod 95 (Sarcelles, 95200) : pôles d’expertise en cartes 3D, module de devis relié à WhatsApp, avis, FAQ, plan d’accès et horaires en direct.

Tout le site tient dans `index.html` (HTML, CSS Tailwind compilé et JavaScript en ligne). Aucun build n’est nécessaire pour le déployer.

## Modifier les coordonnées

1. **Bloc `CONFIG`** en haut du `<script>` de `index.html` : numéro WhatsApp, téléphone affiché, adresse, horaires. Le statut « Ouvert / Fermé », le tableau des horaires et les liens d’appel se mettent à jour automatiquement.
2. **Bloc JSON-LD** dans le `<head>` : mêmes informations pour Google (adresse, horaires, téléphone).
3. **Avis clients** : les quatre avis sont des exemples signalés comme tels. Remplacez-les par de vrais avis Google, puis retirez la mention « Avis d’exemple ».
4. **Mentions légales** : complétez raison sociale, SIRET et directeur de la publication dans la boîte de dialogue en bas de `index.html`.

## Modifier le style

Les classes Tailwind sont compilées et injectées dans `index.html`. Après avoir ajouté de nouvelles classes ou modifié `src/styles.css` :

```bash
npm install
npm run css
```

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Le site complet |
| `src/styles.css` | Source CSS (Tailwind + composants : carbone, métal brossé, verre, cartes 3D) |
| `fonts/` | Archivo et JetBrains Mono, auto-hébergées |
| `og.jpg`, `favicon.svg`, `apple-touch-icon.png` | Partage social et icônes |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Référencement classique et moteurs IA |
| `vercel.json` | En-têtes de cache et de sécurité |

Photos : Unsplash (licence Unsplash). Plan : © contributeurs OpenStreetMap.
