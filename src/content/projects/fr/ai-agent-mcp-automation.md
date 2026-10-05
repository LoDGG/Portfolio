---
title: "Agent IA & automatisation MCP"
slug: "agent-ia-automatisation-mcp"
translationKey: "ai-agent-mcp-automation"
locale: "fr"
summary: "Un agent Python pour automatiser des tâches email, avec une exécution bornée, des outils MCP structurés et une abstraction des providers LLM. Développé d’abord avec un serveur MCP Gmail simulé."
featured: true
storySummary:
  challenge: "L’automatisation des emails exige des limites explicites entre les décisions du modèle et les actions qui modifient les messages."
  solution: "Une boucle agent Python explicite, une exécution d’outils validée par schéma et une intégration MCP client/serveur séparée, limitées à 4 itérations et 3 appels d’outils."
  outcome: "Un comportement agent testable et une exécution d’outils contrôlée, avec le code propre à chaque provider séparé de l’architecture de l’agent."
evidenceSummary: "Bornes d’exécution : 4 itérations agent maximum · 3 appels d’outils maximum."
architectureFlow:
  - "Demande utilisateur"
  - "Boucle agent"
  - "Provider LLM"
  - "Décision d’outil structurée"
  - "Client MCP"
  - "Serveur MCP Gmail (environnement simulé)"
  - "Action email"
order: 2
status: "published"
projectType:
  - "Agents IA"
  - "Automatisation"
tags:
  - "MCP"
  - "Python"
context: "personal"
role:
  - "Architecture agent, implémentation et tests"
stack:
  - "Python 3.12+"
  - "MCP"
  - "API LLM"
  - "Validation de schéma"
  - "Utilisation structurée d’outils"
  - "Tests automatisés"
  - "Git"
repository: "https://github.com/LoDGG/agent-mcp-showcase"
confidential: false
anonymized: false
---

## Vue d’ensemble

Ce projet personnel d’ingénierie logicielle explore l’automatisation de tâches Gmail/email par un agent IA. Une demande représentative est : « Retrouve la facture de septembre et applique-lui le libellé TO_REVIEW. » L’agent doit interpréter la demande, choisir les outils, récupérer les informations du message et effectuer une action autorisée.

L’implémentation initiale utilise un serveur MCP Gmail simulé. Cette étude décrit ce périmètre de développement, et non un déploiement Gmail en production.

## Problème

Le comportement d’une automatisation devient difficile à comprendre lorsque les sorties du modèle peuvent déclencher directement des actions externes sans limites claires. Les workflows email combinent recherche d’informations et modification des messages : le choix des outils, leur exécution et les limites associées doivent donc être explicites.

## Ma contribution

J’ai implémenté l’architecture de l’agent Python : boucle bornée, abstraction des providers LLM, intégration MCP client/serveur, schémas d’outils structurés et validation, ainsi que les tests automatisés. J’ai volontairement développé la boucle sans LangChain ni LangGraph pour conserver une logique d’exécution explicite.

## Architecture de l’agent

Le flux logique est **demande utilisateur → boucle agent → provider LLM → décision d’outil structurée → client MCP → serveur MCP Gmail simulé → action email**. Il décrit les étapes principales au sein de la boucle bornée ; il ne s’agit pas d’une succession illimitée d’actions pilotées par le modèle.

La boucle coordonne l’exécution, l’abstraction du provider isole l’intégration propre au LLM, et le client MCP communique avec le serveur qui expose les outils email. Les actions structurées et la validation de schéma relient les décisions d’outils à leur exécution.

## Intégration MCP

L’implémentation s’appuie sur le SDK MCP officiel, avec des responsabilités distinctes côté client et côté serveur. L’environnement Gmail simulé expose quatre outils : **search**, **get email**, **apply_label** et **archive**.

`apply_label` était nécessaire dès le départ : l’exemple de la facture exige d’appliquer un libellé au message après l’avoir retrouvé. Les tests sur le serveur simulé fournissent un environnement de développement pour la recherche et les actions avant l’intégration à un service Gmail réel.

## Exécution contrôlée

L’agent possède deux bornes d’exécution explicites :

- **4 itérations agent maximum**.
- **3 appels d’outils maximum**.

Ces plafonds rendent l’étendue d’une exécution plus prévisible et limitent les boucles incontrôlées d’utilisation d’outils. Ce sont des contraintes de conception, et non des mesures de performance ou un mécanisme de sécurité complet. La validation de schéma et l’exécution structurée des outils encadrent également la formulation et l’exécution des actions.

## Abstraction des providers

La boucle agent utilise `LLMProvider`, dont `GeminiProvider` a été la première implémentation. Le code propre au provider est séparé afin que l’ajout ou le changement de provider LLM ne nécessite pas de réécrire l’architecture de l’agent.

Le support d’OpenAI était prévu via cette abstraction. Cela ne permet pas de conclure à une intégration OpenAI achevée ou prête pour la production.

## Tests et validation

Des tests automatisés valident le comportement de l’agent et l’exécution des outils dans l’environnement MCP simulé.

## Méthode de développement

Le développement a associé Git, une implémentation guidée par les spécifications, des tests et de la revue. OpenAI Codex et Claude Code ont accompagné l’implémentation ; le travail d’ingénierie portait sur une architecture explicite et un comportement validé.

## Technologies

Python 3.12+, SDK MCP officiel, API LLM, architecture agent, utilisation structurée d’outils, validation de schéma, tests automatisés et Git.

## État et limites

Le résultat technique est un agent explicite et borné, au comportement testé, avec des intégrations séparées pour les providers et les outils. Les éléments présentés ici couvrent l’environnement MCP Gmail simulé initial. L’intégration à Gmail réel et toute implémentation de provider supplémentaire nécessitent une validation distincte avant de pouvoir qualifier leur niveau de maturité.

Le dépôt GitHub public est un démonstrateur volontairement réduit de l’architecture agent/MCP, et non l’intégralité du projet privé. Il utilise des emails synthétiques et un provider simulé déterministe.
