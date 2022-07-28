# P7_GEHU_Cyprien
Pour mettre en place le projet :
 - 1er étape : 
Télécharger le dossier complet dans vos dossiers

 - 2ème étape :
mettre en place le front-end et le back-end

  * 1er terminal pour front-end : 
  via le terminale ou vscode on met le chemin jusqu'au dossier front puis on tape la commande "npm run serve" dans le terminal 
  et pour finir vous attendez que la page se charge, quand la page a fini de se préparé vous utiliser le lien : http://localhost:8080/
  
  * 2ème terminal pour le back-end : via le terminale ou vscode on met le chemin jusqu'au dossier back puis on tape la commande "node server" 
  pour lancer le serveur avec l'api

- 3ème étape mettre en place la base de donnée:
 Nous utilisons une base de donnée MongoDB (no-sql) donc pour importer la BDD il faut passer directement par le site avec ces étapes :
 
  * Commencer par crée un compte mongodb, puis dans "databasse Access" vous aurez besoin de crée un "add new user databasse" avec son identifiant, 
  son mot de passe et dans "built in-role" vous prenez "read and write to any databasse" (vous aurez l'identifiant et le mode passe pour la suite)
  
  * Pour continuer vous crée un cluster avec les options gratuit, quand le cluster a était crée vous allez dans "browse collection" puis "created database", 
  vous lui donnez un nom puis vous crée 2 collection (User et things)
  
  * Pour importer la base de donnée vous aurez besoin du logiciel "mongodb compass" pour connecter à votre base de donnée et vous aurez besoin de recopier cette commande quand le logiciel vous demandera de vous connecter a votre base de donnée (changer le contenu "") : 
  mongodb+srv://"utilisateur databasse":"mot de passe"@cluster0.dtsg5.mongodb.net/"nom de la base de donnée"
  
  * Quand la connexion s'effectue bien avec mongodb compass vous aller dans une collection puis dans les option en haut du logiciel vous faites "collection" puis import data, vous prenez le fichier qui correspond a la collection puis vous choisissez "JSON" puis vous faites pareil pour votre base donnée
  
  * Dernier point important, dans le programme vous devez changer une ligne de code  (dans "back" puis "app.js" à la ligne 11):
  mongoose.connect('mongodb+srv://dragon:sonic1234@cluster0.dtsg5.mongodb.net/?retryWrites=true&w=majority',
  changer dragon avec votre nom utilisateur 
  et changer sonic1234 avec le mot de passe de utilisateur de la base de donnée
