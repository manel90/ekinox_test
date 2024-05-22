# Utiliser une image de base Node.js officielle
FROM node:16.16.0

# Installer Angular CLI globalement
RUN npm install -g @angular/cli@12.2.18 --force


# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 4200

# Définir la commande par défaut pour exécuter le serveur Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
