# Parapharmacie Opal — V1 Luxury Website

Projet V1 gratuit, prêt à tester et à déployer.

## Ce que contient cette V1

- Site public premium FR / AR / EN avec RTL arabe.
- Design luxury noir profond / gold / glassmorphism.
- Catalogue produits dynamique.
- Panier localStorage.
- Commande WhatsApp automatique.
- Interface admin protégée en mode démo.
- Ajout / modification / suppression produits.
- Gestion logo, favicon, couleur accent, Google Maps embed, WhatsApp, horaires.
- Données sauvegardées en localStorage en mode démo.
- Fichier Supabase SQL fourni pour passer vers une vraie base gratuite.

## Démarrage immédiat

Ouvre simplement `index.html` dans ton navigateur.

Identifiants admin démo :

- Email : `admin@opal.ma`
- Mot de passe : `Opal@2026`

## Déploiement gratuit rapide

### Option test / démo — GitHub Pages
GitHub Pages peut publier des fichiers HTML/CSS/JS statiques. Utilise-le pour test, portfolio ou démo.
Pour un vrai site commercial/e-commerce, vérifie les conditions GitHub Pages avant utilisation.

1. Crée un repository GitHub.
2. Upload tous les fichiers.
3. Va dans Settings > Pages.
4. Source : Deploy from branch.
5. Branch : main / root.
6. Ton site sera en ligne.

### Option test / démo — Vercel Hobby
Vercel Hobby est pratique pour tester, mais son usage gratuit est orienté projets personnels/non-commerciaux.

1. Upload le projet sur GitHub.
2. Importer le repo dans Vercel.
3. Déployer.

### Option gratuite plus adaptée commercialement — Netlify Free
Netlify Free est une meilleure option gratuite pour tester un site commercial statique, sous réserve de rester dans les limites du plan gratuit.

## Passage vers Supabase

Le fichier `supabase/schema.sql` contient une base de départ avec tables, rôles, produits, catégories et settings.

Pour une vraie sécurité admin :
- Crée un projet Supabase.
- Exécute `supabase/schema.sql`.
- Active Supabase Auth.
- Crée un bucket Storage `opal-assets`.
- Connecte ensuite les fonctions JS à Supabase.

## Important

Cette V1 fonctionne sans backend pour que tu puisses tester vite et gratuitement.
Le mode localStorage n’est pas une sécurité forte pour un vrai admin en production.
Pour production, il faut activer Supabase Auth + RLS.
