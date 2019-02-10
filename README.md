Dev In Progress...

# Gladys Synology

Ce module vous permet d'activer et désactiver vos caméras paramétrées dans Synology Surveillance Station depuis Gladys.  

## Prérequis

Pour fonctionner, ce module nécessite :

- SurveillanceStation Version 7 ou +

## Installation

### Création des paramètres dans Glayd 

- Ajouter les paramètres suivants dans l'onglet "Paramètres" puis "Paramètres" de Gladys :
  - SYNO_IP	: L'adresse IP de votre Surveillance Station
  - SYNO_PORT  : Le port de votre Surveillance Station
  - SYNO_USER	: Un utilisateur Synology avec les droits de contrôle de vos caméras
  - SYNO_PWD : Le mot de passe du compte

### Ajouter ce module à Gladys

- Installez ce module à partir de l'onglet "avancé" du menu "module", en remplissant les différents champs de la façon suivante :

  - Nom : `synocam`
  - Version : `0.1`
  - URL : `https://github.com/link39/gladys-synology-camera.git`
  - Slug : `synology-camera`

### Redémarrer Gladys

Depuis le premier onglet du menu "Paramètres", en cliquant sur le bouton "Redémarrer".

### Nouveaux périphériques

Rendez-vous maintenant dans l'onglet périphérique pour voir vos caméras. 
