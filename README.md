# Documentation CoMobi 

# CoMobi
Page de présentation de [CoMobi](http://comobi.fr) déployée avec Github pages.

Cette documentation est en cours de 

# Installation d'une nouvelle instance
Comment déployer une nouvelle instance de CoMobi et la rendre disponible depuis une URL publique.

## 1. Créer un compte [github](https://github.com/)
<!-- pourquoi on ne peut pas faire sans ? car on à le github actions -->

## 2. Forker le dépôt [neutre.comobi.fr](https://github.com/betagouv/neutre.comobi.fr)
- Faire une copie du dépôt [neutre.comobi.fr](https://github.com/betagouv/neutre.comobi.fr) sur votre compte Github.
- Changer le nom dépôt (dans les paramètre du dépôt)

*__Note__ : les fork permettent de pouvoir récupérer un projet à un instant t (avec toute son histoire) et de le modifier sans modifier le projet de base. Les modifications du fork n'impacteront pas le projet de base et inversement.*

*Dans le contexte de CoMobi qui est sous licence MIT, permet à n'importe qui de copier le projet et de le rendre public ou non et nous ne sommes plus responsables de cette nouvelle version.*

*[neutre.comobi.fr](https://github.com/betagouv/neutre.comobi.fr) est le dépôt de l'instance [neutre](http://neutre.comobi.fr) utilisé comme base de démonstration de l'outil CoMobi.*

## 3. Déployer l'application chez un hébergeur
Nous avons choisi d'utiliser CleverCloud une entreprise Française, car ils nous permettent de déployer l'application sur des serveurs en France.

### a. Créer un compte sur CleverCloud
### b. Créer une application
- sélectionnez le dépôt que vous venez de créer
- sélectionnez *Node* comme type d'application
- choisir *nano* comme taille (au moins 512mb)
- choisir une serveur en France
- aucun service supplémentaire n'est nécessaire
- ajouter les variables d'environnements : 

| Nom         | Description | 
| ----------- | ----------- | 
| GOOGLE_API_KEY     | [clé d'API google](#google_api) permettant à l'application d'accéder au fichier google |
| GOOGLE_DRIVER_SPREADSHEET_ID | identifiant de tableur google stockant les trajets lié [au formulaire d'inscription](#form) |

- dans "Information" 
    - > "Branche Github utilisée pour le déploiement" > modifier la branche github qui est déployée et utiliser *deploy* (cf [doc sur le déploiement automatisé](#google_workflow))
    - cochez *Forcer HTTPS*
    - cliquez sur Sauvegarder

#### <a name="google_api"></a> Où trouver ma clé d'API Google ?
- Créer un projet dans [la console Google](https://console.developers.google.com/home/dashboard)
- Dans le menu à gauche cliquez sur > API et Services > Identifiant
    - Cliquez sur "Créer des identifiant" > "Clés API"
    - Copiez la clé créée et la copier comme variable d'environnement **GOOGLE_API_KEY** dans CleverCloud

## 4. Gestion des données

### a. Créer un compte Google
<!-- pourquoi il nous faut un compte Google ? car on est lié à GoogleForm et GoogleSheet -->

### b. Créer le formulaire pour les propositions des trajets <a name="form"></a>
- copiez le [formulaire](https://docs.google.com/forms/d/19g8Ou06Ibg_16SOrN8uYv1S50bCNvTp48zooRrLrZZE/edit?usp=drive_web) de neutre.comobi
- récupérer l'adresse du formulaire
    - cliquez sur "Envoyer"
    - Cliquez sur le second icône (partager)
    - copier le lien dans le fichier de configuration _config

<!-- TODO : Expliquer la gestion du fichier de config -->

<!-- TODO : la doc technique pour expliquer où la lecture de ces données est gérée -->

### c. récupérer l'identifiant du tableau des réponses
- ouvrir les droits du [tableur des réponses](https://docs.google.com/spreadsheets/d/1LtRgQlsF-_oz6Us3AtpdNK-0bN0de5iV1Rug09F5y6w/) à n'importe qui possédant l'URL du tableur : 
    - dans l'onglet réponse du formulaire cliquer sur l'icône "tableur" : le tableur devrait s'ouvrir 
    - en cliquant sur "partager" en haut à droite du document, une nouvelle fenêtre s'ouvre permettant de gérer les droits d'accès
    - dans l'url du fichier récupérer l'identifiant du document à utiliser comme variable d'environnement *GOOGLE_DRIVER_SPREADSHEET_ID* -> https://docs.google.com/spreadsheets/d/<ID_A_COPIER>/

https://docs.google.com/spreadsheets/d/1LtRgQlsF-_oz6Us3AtpdNK-0bN0de5iV1Rug09F5y6w/edit?usp=sharing

*note 1 : vous pouvez changez l'intitulé des questions, mais si vous ne souhaitez pas adapter le code correspondant au traitement des réponses il est nécessaire de garder la consitance des données. Par exemple : la colonne destinée à recevoir le départ doit rester cohérent*

*note 2 : la gestion des données est amenée à changer*

## 5. (optionnel) Créer un tableur avec une liste de lieux précis <a name="localisation"></a>
Dans le formulaire de recherche vous pouvez ajouter des noms de lieux qui ont du sens et une utilité pour votre contexte.
Pour cela : 
- copier le format de [ce tableau](https://docs.google.com/spreadsheets/d/19wFbYCz6PLKaUmnDgCYPOpj5xfuYBaBTYh1QT1pK90w/edit#gid=0) dans un nouveau fichier
- ajouter l'identifiant du fichier https://docs.google.com/spreadsheets/d/<IDENTIDIANT>/edit#gid=0 dans le fichier _config.yml pour l'attribut *liste_noms_locaux_lieux*

# Customiser son instance
Grâce au fichier de configuration *_config.yml* vous pouvez customiser différents éléments du site.
Copiez le fichier [_config.example.xml](https://github.com/betagouv/neutre.comobi.fr/blob/main/_config.example.yml) en remplaçant le fichier *_config.yml* de votre dépôt.

# Mettre à jour son instance
## Que se passe-t-il quand des fichiers sont modifiés sur la branche **master** ? <a name="google_workflow"></a>
<!-- décrire le workflow github qui est exécuté -->
