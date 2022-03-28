![CI Front](https://github.com/2022-app/2022/actions/workflows/node.js.yml/badge.svg)

<img style="display: block; margin-left: auto; margin-right: auto; width: 30%;" src="src/components/Icon/icons/logo.svg"></img>

_2022 et moi_ permet de se comparer aux différents candidats à l'élection présidentielle sur une série de propositions.
Le projet est facilement réutilisable en modifiant `src/data` et `src/types/Proposition.ts`.

## Développement

Installation des dépendances :

```
npm ci
```

Lancer le site :

```
npm start
```

## Propositions et réponses

Liste des propositions : [Propositions.ts](src/data/Propositions.ts), [tableau](https://www.2022etmoi.fr/app/table).

Les candidats se prononcent sur chaque proposition : *pour* (`CandidateAnswer.YES`), *contre* (`CandidateAnswer.NO`),
ou *neutre* (`CandidateAnswer.NEUTRAL`).

## Score

### Principe

50% correspond au score neutre (en moyenne autant en accord qu'en désaccord).
0% correspond à un désaccord parfait et 100% à un accord parfait.

Il faut relativiser la signification du score car celui-ci dépend forcément du choix des propositions !

### Calcul

Fonctions de calcul du score : [ScoringService.ts](src/services/ScoringService.ts)

- Pour une réponse <img src="https://render.githubusercontent.com/render/math?math=r_i"> à une proposition (de très
  défavorable à très favorable, -2 à 2),
  et une réponse du candidat <img src="https://render.githubusercontent.com/render/math?math=r'_i"> (contre, sans avis
  ou pour, -1 à 1), on gagne <img src="https://render.githubusercontent.com/render/math?math=p_i = r_i * r'_i"> points.
  Le score des réponses face au candidat est la somme
  des <img src="https://render.githubusercontent.com/render/math?math=p_i">, normalisée face à la somme des valeurs
  absolues des points <img src="https://render.githubusercontent.com/render/math?math=p_i">, et exprimée sous forme de
  pourcentage.
