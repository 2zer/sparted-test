# Hello la team SPARTED !

N'ayant jamais utilisé mithril auparavant, j'ai commencé par me rendre sur la doc de Mithril afin d'en apprendre un peu plus sur la techno (très intéressante !).

Pour ne pas perdre de temps avec les configurations de Mithril, Webpack et babel, j'ai pris la décision d'utiliser create-mithril-app (inspiré par create-react-app) : https://www.npmjs.com/package/create-mithril-app.
Partant d'une app disposant déjà du squelette, j'ai pu commencer à segmenter mes tâches.

Après le traditionnel "Hello World" et un petit tour sur l'API de Picsum, j'ai rapidement écarté l'idée d'utiliser une librairie supplémentaire pour gérer les composants (UI Kit) ainsi que les events (On suit la logique minimaliste de Mithril). 

Comme sur le rought du fichier pdf de l'exercice, j'ai procédé par trois colonnes placées dans un container flex. (Je n'ai pas utilisé le composant Grid de mithril)

Pour les chargements, j'ai commencé par mettre en place le lazyload pour les performances (intersectionObserver). Ensuite, j'ai ajouté un spinner mais je n'ai pas pris le temps de fixer l'affichage progressif (je comptais mettre en place un chargement asynchrone js, pour render uniquement une fois le load terminé). Pour finir, j'ai ajouté un EventListener sur l'event 'load', qui se contente d'un alert() pour le moment.

## Organisation du code :

    - `model.js` - on récupère le flux de donnée et on le divise en 3 groupes.
    - `PictureList.js` - on récupère les groupes et on les render dans la colonne associée.
    - `index.js` - on monte le composant

## La road map se présente comme suit :

    - Fixer la méthode de lancement de la requête (hack nécessaire pour éviter l'envoie de plusieurs requêtes en simultané)
    - Fixer le chargement progressif des images dans le DOM virtuel (via asynch loading)
    - Revoir le lifecycle du composant et la gestion du store
    - Compléter la fonction pour les connexions lentes

J'aurai aimé prendre plus de temps pour vous livrer un code supérieur, et plus en adéquation avec les best practices de la techno.
Je serai très heureux de pouvoir échanger avec vous sur ce sujet.