---
title: "Assistant support privé basé sur LLM / RAG"
slug: "assistant-support-rag-llm-entreprise"
translationKey: "enterprise-rag-llm-support-assistant"
locale: "fr"
summary: "Conception et mise en œuvre d’un assistant LLM/RAG privé pour le support technique en entreprise, fondé sur plus de 1 000 documents internes pour faciliter la recherche de réponses."
featured: true
spotlight: true
storySummary:
  challenge: "Les équipes techniques et de support devaient retrouver les informations utiles parmi de nombreux documents techniques internes pendant le traitement des demandes."
  solution: "Un assistant LLM/RAG privé associant ingestion documentaire, embeddings et vectorisation, recherche vectorielle et sémantique, puis génération LLM/RAG."
  impact: "Le pilote mesuré a montré un gain de productivité de 10×, une baisse de 20 % des coûts de traitement du support et 80 % des questions traitées directement par l’assistant."
architectureFlow:
  - "Documents techniques internes"
  - "Ingestion / préparation"
  - "Embeddings / vectorisation"
  - "Base vectorielle"
  - "Recherche sémantique"
  - "Génération LLM / RAG"
  - "Assistant support"
order: 1
status: "published"
projectType:
  - "IA"
  - "RAG"
tags:
  - "LLM"
  - "Support technique"
context: "professional"
role:
  - "Réalisation de la solution de bout en bout"
stack:
  - "Python"
  - "LLM"
  - "RAG"
  - "Embeddings"
  - "Base vectorielle"
  - "Recherche sémantique"
  - "Linux"
  - "Infrastructure VM et GPU"
  - "IA privée en entreprise"
metrics:
  - value: "10×"
    label: "Gain de productivité"
  - value: "−20 %"
    label: "Coûts de traitement du support"
  - value: "80 %"
    label: "Questions traitées directement par l’assistant"
  - value: "−15 %"
    label: "Tickets nécessitant une escalade"
confidential: true
anonymized: true
confidentialityNote: "Les noms des organisations et des clients sont volontairement omis."
---

## Vue d’ensemble

Ce pilote d’un mois a permis de livrer un assistant d’IA générative privé dans un environnement de support technique en entreprise anonymisé. Il aidait les équipes à retrouver des informations dans la documentation technique interne afin d’accélérer le traitement des demandes.

## Problème

Les équipes techniques et de support devaient retrouver les informations utiles au traitement des demandes dans un vaste ensemble de documents techniques internes. La solution devait fonctionner dans un environnement d’IA privée en entreprise.

## Ma contribution

J’ai réalisé la solution de bout en bout : préparation de l’environnement Linux, VM et GPU ; déploiement d’un LLM open source ; mise en place de l’ingestion, de la vectorisation et de la recherche documentaire ; tests, résolution des problèmes techniques, documentation et accompagnement des utilisateurs.

## Solution et architecture

L’assistant associait un LLM à une architecture RAG. Le flux logique était le suivant :

**Documents techniques internes → ingestion et préparation → embeddings et vectorisation → base vectorielle → recherche sémantique → génération LLM/RAG → assistant support.**

## Mise en œuvre

Le travail a relié le pipeline documentaire, les embeddings, la base vectorielle et la recherche sémantique au LLM déployé dans l’environnement privé. Il comprenait aussi les tests, la résolution des problèmes techniques, la documentation et l’accompagnement des utilisateurs.

## Validation du pilote

Le pilote a indexé plus de 1 000 documents techniques internes et concerné 25 utilisateurs quotidiens du support et 10 utilisateurs techniques ; ces deux groupes sont présentés séparément.

## Résultats du pilote

Les résultats mesurés sont un gain de productivité de 10×, une baisse de 20 % des coûts de traitement du support, 80 % des questions traitées directement par l’assistant et une baisse de 15 % des tickets nécessitant une escalade. Une intervention experte restait nécessaire pour 5 % des problèmes ciblés. Ces indicateurs sont distincts et ne constituent pas les parts d’une même répartition.

## Technologies

Python, LLM, RAG, embeddings, base vectorielle, recherche sémantique, Linux, infrastructure VM et GPU, et IA privée en entreprise.
