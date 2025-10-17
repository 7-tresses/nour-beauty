# Charte synthétique — Biozazat Cosmetics

But : centraliser règles visuelles pour site et supports.

## Logo
- Utiliser uniquement le logo fourni (ne pas déformer, ne pas recolorer).
- Versions : logo principal (carré), logo horizontal (si besoin), favicon (32×32).

## Couleurs (variables CSS)
- Terre cuite : #C76B4C (--brand-terre)
- Accent orange : #D57F30 (--brand-accent)
- Vert olive : #5E7A4D (--brand-olive)
- Or pâle : #D4B08C (--brand-gold)
- Fond crème : #F9F5F0 (--bg-cream)
- Bleu nuit : #24324A (--brand-dark)
- Texte : #222222

## Typographies
- FR titres : Cormorant Garamond (Google Fonts)
- FR texte : Montserrat (Google Fonts)
- AR titres & texte : Tajawal (Google Fonts) — respecter RTL
- Ne pas mélanger d'autres familles pour les titres.

## Motifs & éléments graphiques
- Utiliser motifs zellige et feuilles stylisées comme éléments décoratifs (fonds légers, encadrements).
- Fournir SVG optimisés dans /public/assets/brand/patterns/.

## RTL & Arabe
- Respect strict du RTL : utilitaire .rtl (direction: rtl; unicode-bidi: embed).
- Vérifier order des éléments, alignements, et test manuel sur pages arabes.

## Accessibilité
- Respecter ratios WCAG 4.5:1 pour texte normal.
- Boutons primaires : utiliser --brand-terre ou --brand-accent (contraste vérifié).

## Interdits
- Ne pas déformer le logo.
- Ne pas modifier les couleurs principales.
- Ne pas mélanger typographies.

## Livrable
- Export PDF : public/assets/brand/guide.pdf
