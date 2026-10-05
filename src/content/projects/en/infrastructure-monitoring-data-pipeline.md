---
title: "Infrastructure Energy & Carbon Monitoring Pipeline"
slug: "infrastructure-monitoring-data-pipeline"
translationKey: "infrastructure-monitoring-data-pipeline"
locale: "en"
summary: "Built a pipeline to bring HPE server energy and carbon-footprint data into Grafana and compare observed energy data with power-supply sizing output."
featured: true
storySummary:
  challenge: "Energy and carbon-footprint information across a server fleet needed a centralized operational view, alongside a way to check power-supply sizing assumptions against observed data."
  solution: "Python collected data through HPE OneView APIs, stored it in SQL, and made it available in Grafana dashboards."
  outcome: "The pipeline provided a consolidated view of server energy and carbon data and a basis for comparing observations with sizing-tool output."
evidenceSummary: "HPE OneView API collection, SQL storage, Grafana dashboards, and a comparison with power-supply sizing output."
architectureFlow:
  - "HPE server fleet"
  - "HPE OneView API"
  - "Python collection"
  - "SQL storage"
  - "Grafana dashboard"
order: 3
status: "published"
projectType:
  - "Infrastructure"
  - "Data pipeline"
tags:
  - "Energy monitoring"
  - "Carbon footprint"
context: "professional"
role:
  - "API data collection, storage, and dashboarding"
stack:
  - "Python"
  - "HPE OneView API"
  - "SQL"
  - "Grafana"
confidential: true
anonymized: true
confidentialityNote: "Professional project; organizational details are omitted."
---

## Overview

This professional project monitored energy-related data and carbon-footprint information across a fleet of HPE servers. It also supported a comparison between observed server energy data and the output of HPE’s power-supply sizing tooling.

## Challenge

Energy and carbon information is harder to use operationally when it remains spread across individual systems or tools. The project needed a consolidated view and a practical way to check whether sizing-tool output aligned with measurements from the infrastructure.

## My contribution

I built the data-collection and monitoring pipeline: API requests to HPE OneView with Python, SQL-based storage, and visualization in Grafana.

## Data collection and pipeline

HPE OneView APIs supplied energy and electrical-consumption information from the server fleet, together with associated carbon-footprint information. Python handled the API requests and data collection. The collected data moved into SQL storage for use in Grafana dashboards.

## Sizing-tool comparison

Observed server energy data could be compared with the output of HPE’s power-supply sizing tooling to assess how closely sizing assumptions matched real infrastructure measurements.

## Engineering outcome

The result was a centralized view of energy and carbon-related server data and a basis for evaluating power-supply sizing output against observations.

## Technologies

Python, HPE OneView API, SQL, and Grafana.
