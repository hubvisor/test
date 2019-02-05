# Description

L'API de github permet d'obtenir le détail des derniers commits d'un repository ainsi que leurs auteurs (`https://api.github.com/repos/torvalds/linux/commits -> commits-original.json`).

Un script (`split.js`) est venu séparer les détails des auteurs du commits (`users.json`) de la liste des commits (`commits.json`).

# Mission

Ta mission sera :

- 1 - de créer un serveur node contenant deux endpoints:
  - un pour les utilisateurs
  - un pour la liste des commits
  - **technos attendues:** express.js, ...
- 2 - de créer une webapp vue.js affichant la liste des commits ainsi que leurs messages, qui sera requetée depuis ton serveur
  - Lorsqu'un commit est sélectionné, tu devra charger ses committeurs et auteurs afin de les afficher
  - **technos attendues:** vuejs, flexbox, ...
