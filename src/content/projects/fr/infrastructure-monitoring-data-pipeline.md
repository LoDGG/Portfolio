---
title: "Pipeline de suivi énergétique et carbone d’infrastructure"
slug: "monitoring-infrastructure-pipeline-donnees"
translationKey: "infrastructure-monitoring-data-pipeline"
locale: "fr"
summary: "Mise en place d’un pipeline pour visualiser dans Grafana les données énergétiques et l’empreinte carbone d’un parc de serveurs HPE, puis comparer les mesures aux résultats d’un outil de dimensionnement des alimentations."
featured: true
storySummary:
  challenge: "Les données énergétiques et carbone d’un parc de serveurs nécessitaient une vue opérationnelle centralisée et une comparaison avec les hypothèses de dimensionnement des alimentations."
  solution: "Python collecte les données via les API HPE OneView, les conserve dans un stockage SQL et les présente dans des tableaux de bord Grafana."
  outcome: "Le pipeline fournit une vue consolidée des données énergétiques et carbone ainsi qu’une base pour comparer les observations aux résultats de l’outil de dimensionnement."
evidenceSummary: "Collecte via les API HPE OneView, stockage SQL, tableaux de bord Grafana et comparaison avec le dimensionnement des alimentations."
architectureFlow:
  - "Parc de serveurs HPE"
  - "API HPE OneView"
  - "Collecte Python"
  - "Stockage SQL"
  - "Tableau de bord Grafana"
order: 3
status: "published"
projectType:
  - "Infrastructure"
  - "Pipeline de données"
tags:
  - "Suivi énergétique"
  - "Empreinte carbone"
context: "professional"
role:
  - "Collecte API, stockage et visualisation"
stack:
  - "Python"
  - "API HPE OneView"
  - "SQL"
  - "Grafana"
confidential: true
anonymized: true
confidentialityNote: "Projet professionnel ; les détails sur l’organisation sont omis."
---

## Vue d’ensemble

Ce projet professionnel suivait les données énergétiques et l’empreinte carbone d’un parc de serveurs HPE. Il permettait aussi de comparer les données énergétiques observées aux résultats de l’outil HPE de dimensionnement des alimentations.

## Problème

Les informations énergétiques et carbone sont difficiles à exploiter au quotidien lorsqu’elles restent dispersées entre plusieurs systèmes ou outils. Le projet devait fournir une vue consolidée et permettre de vérifier si les résultats du dimensionnement correspondaient aux mesures de l’infrastructure.

## Ma contribution

J’ai réalisé le pipeline de collecte et de suivi : requêtes aux API HPE OneView avec Python, stockage SQL et visualisation dans Grafana.

## Collecte et pipeline

Les API HPE OneView fournissaient les informations de consommation énergétique et électrique du parc de serveurs, ainsi que les données associées à son empreinte carbone. Python assurait les requêtes API et la collecte. Les données collectées étaient stockées dans une base SQL pour être exploitées dans les tableaux de bord Grafana.

## Comparaison avec le dimensionnement

Les données énergétiques observées pouvaient être comparées aux résultats de l’outil HPE de dimensionnement des alimentations afin de vérifier leur cohérence avec les mesures réelles.

## Résultat technique

Le pipeline a fourni une vue centralisée des données énergétiques et carbone des serveurs ainsi qu’une base de comparaison avec les résultats du dimensionnement.

## Technologies

Python, API HPE OneView, SQL et Grafana.
