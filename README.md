# Nobonaga

Gulp c'est un outil d'automatisation les taches répétitives

pour lancer le startr on a besion d'installer node.js [http://nodejs.org](http://nodejs.org)

pour update de voter verson node utiliser chocolaty [http://chocolaty.org](http://chocolaty.org)

puis lancer la commande si dessus pour installer gulp de maniere general sur votre machine

> npm i -g gulp

pour installer les packages lancer cette commande : 

> npm i

puis faire gulp sur votre command line pour voir la compilation

on premier point vous etes besion de configurer votre projet sur le fichier config.js sur le root du dossier

les parametre que vous le droit du changer sont (projectName, cmsName, host, themeColor, browserList)

puis lancer la commande si desssous pour la deployer le projet

> gulp deploy


pour genere la favicon mettre en place dans le dossier source/medias/favicon avec une taille du 260*260 ou plus proportionnel et avec le nom du favicon.png et lancer la commande si dessous

> gulp favicon

pour optim des images mettre dans le dossier sources/medias/images

pour convertir les icons svg en fonts mettre dans le dossier sources/medias/icons

pour les sprites mettre dans le dossier public/assets/medias/sprites ça genere un seul image de sprites et il va mettre le fichier scss dans dossier sources/scss/local/utils/_sprites.scss
