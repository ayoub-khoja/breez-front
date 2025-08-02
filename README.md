# Fouta Tunisienne - Site E-commerce

Un site e-commerce moderne et responsive dédié à la vente de foutas tunisiennes artisanales, construite avec React 19.

## 🌟 Fonctionnalités

### 🛍️ E-commerce
- **Catalogue de produits** : Affichage de foutas avec filtres par catégories
- **Panier d'achat** : Gestion complète du panier avec ajout/suppression/modification des quantités
- **Interface utilisateur moderne** : Design responsive et animations fluides
- **Système de catégories** : Filtrage par type de foutas (traditionnelles, modernes, élégantes, etc.)

### 🎨 Design & UX
- **Design responsive** : Optimisé pour desktop, tablet et mobile
- **Animations fluides** : Transitions et micro-interactions
- **Interface intuitive** : Navigation claire et accessible
- **Thème cohérent** : Système de couleurs et typographie unifié

### 📱 Responsive Design
- **Mobile-first** : Optimisé pour tous les écrans
- **Navigation adaptative** : Menu hamburger sur mobile
- **Grilles flexibles** : Adaptation automatique du contenu

## 🛠️ Technologies Utilisées

- **React 19** : Framework JavaScript moderne
- **CSS3** : Styles personnalisés avec variables CSS
- **HTML5** : Structure sémantique
- **JavaScript ES6+** : Fonctionnalités interactives

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header.js          # Navigation et panier
│   ├── Header.css
│   ├── Hero.js           # Section d'accueil
│   ├── Hero.css
│   ├── Products.js       # Catalogue de foutas
│   ├── Products.css
│   ├── Cart.js          # Panier d'achat
│   ├── Cart.css
│   ├── About.js         # Histoire et tradition
│   ├── About.css
│   ├── Contact.js       # Formulaire de contact
│   ├── Contact.css
│   ├── Footer.js        # Pied de page
│   └── Footer.css
├── App.js               # Composant principal
├── App.css
├── index.js            # Point d'entrée
└── index.css           # Styles globaux
```

## 🎨 Système de Design

### Couleurs
- **Primary** : `#3b82f6` (Bleu principal)
- **Primary Dark** : `#1d4ed8` (Bleu foncé)
- **Primary Light** : `#dbeafe` (Bleu clair)
- **Accent** : `#f59e0b` (Orange accent)
- **Success** : `#10b981` (Vert succès)
- **Danger** : `#ef4444` (Rouge erreur)

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Tailles** : 0.875rem à 3.5rem
- **Poids** : 400, 500, 600, 700

### Composants
- **Boutons** : Primary, Secondary, Outline
- **Cartes** : Produits, Informations
- **Formulaires** : Inputs, Selects, Textareas
- **Modales** : Panier, Confirmations

## 📱 Breakpoints Responsive

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]

# Aller dans le dossier
cd fouta-tunisienne

# Installer les dépendances
npm install
```

### Démarrage
```bash
# Démarrer le serveur de développement
npm start

# Le site sera accessible sur http://localhost:3000
```

### Scripts Disponibles
```bash
npm start          # Démarre le serveur de développement
npm run build      # Construit l'application pour la production
npm test           # Lance les tests
npm run eject      # Éjecte la configuration (irréversible)
```

## 📋 Sections du Site

### 1. Header
- Logo et navigation
- Icône du panier avec compteur
- Menu responsive

### 2. Hero
- Titre accrocheur
- Description des foutas
- Call-to-action vers les produits
- Animations de foutas

### 3. Produits
- Grille de foutas avec filtres
- 8 exemples de foutas différentes
- Catégories : Traditionnelles, Modernes, Élégantes, etc.
- Boutons d'ajout au panier

### 4. À Propos
- Histoire de l'entreprise
- Valeurs et tradition
- Statistiques (années d'expérience, foutas créées)
- Pattern de tissage animé

### 5. Contact
- Informations de contact
- Formulaire avec sujets prédéfinis
- Validation et feedback utilisateur

### 6. Panier
- Modal avec liste des articles
- Gestion des quantités
- Calcul du total
- Bouton de commande

### 7. Footer
- Liens vers les sections
- Informations légales
- Réseaux sociaux

## 🛍️ Fonctionnalités E-commerce

### Catalogue de Produits
- **8 foutas d'exemple** avec différentes caractéristiques
- **Filtrage par catégories** : Traditionnelles, Modernes, Élégantes, Classiques, Luxueuses, Écologiques, Vibrantes, Sophistiquées
- **Informations détaillées** : Prix, matériaux, dimensions, descriptions

### Panier d'Achat
- **Ajout de produits** : Boutons sur chaque fouta
- **Gestion des quantités** : Augmentation/diminution
- **Suppression d'articles** : Bouton de suppression
- **Calcul automatique** : Total mis à jour en temps réel
- **Interface modale** : Ouverture/fermeture fluide

### Exemples de Foutas
1. **Fouta Traditionnelle Rouge** - 25€
2. **Fouta Moderne Bleue** - 28€
3. **Fouta Élégante Verte** - 30€
4. **Fouta Classique Blanche** - 22€
5. **Fouta Luxueuse Dorée** - 45€
6. **Fouta Écologique Naturelle** - 35€
7. **Fouta Vibrante Orange** - 26€
8. **Fouta Sophistiquée Violette** - 38€

## 🎯 Personnalisation

### Modifier les Couleurs
Éditez les variables CSS dans `src/index.css` :
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #1d4ed8;
  --accent: #f59e0b;
  /* ... autres couleurs */
}
```

### Ajouter des Produits
Modifiez le tableau `products` dans `src/components/Products.js` :
```javascript
const products = [
  {
    id: 9,
    name: "Nouvelle Fouta",
    price: 32.00,
    category: "nouvelle-categorie",
    // ... autres propriétés
  }
];
```

### Modifier les Catégories
Ajoutez ou modifiez les catégories dans `src/components/Products.js` :
```javascript
const categories = [
  { id: 'nouvelle-categorie', name: 'Nouvelle Catégorie' }
];
```

## 📈 Performance

- **Chargement rapide** : Optimisation des images et assets
- **Code splitting** : Chargement à la demande
- **Animations fluides** : Utilisation de CSS transforms
- **Responsive images** : Adaptation automatique

## 🔮 Améliorations Futures

- [ ] Intégration d'un backend pour la gestion des commandes
- [ ] Système de paiement (Stripe, PayPal)
- [ ] Gestion des stocks en temps réel
- [ ] Système de recherche avancée
- [ ] Filtres par prix et matériaux
- [ ] Galerie d'images pour chaque fouta
- [ ] Système de notation et avis
- [ ] Wishlist (liste de souhaits)
- [ ] Mode sombre
- [ ] Internationalisation (arabe/français)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou support :
- Email : contact@fouta-tunisienne.com
- Téléphone : +216 71 123 456

---

**Fouta Tunisienne** - L'art du tissage traditionnel tunisien 🌟 