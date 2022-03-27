![CI Front](https://github.com/2022-app/2022/actions/workflows/node.js.yml/badge.svg)

<img style="display: block; margin-left: auto; margin-right: auto; width: 30%;" src="src/components/Icon/icons/logo.svg"></img>

# 2022 et moi

_2022 et moi_ est un test de positionnement pour l'élection présidentielle de 2022.

## Développement

Installation des dépendances.

```
npm ci
```

Ouvrez l'application.

```
npm start
```

## Propositions et réponses

Liste des propositions : [Propositions.ts](src/data/Propositions.ts), [tableau](https://www.2022etmoi.fr/app/table).

Les candidats se prononcent sur chaque proposition : *pour* (`CandidateAnswer.YES`), *contre* (`CandidateAnswer.NO`),
ou *neutre* (`CandidateAnswer.NEUTRAL`).

## Score

- Pour une réponse <img src="https://render.githubusercontent.com/render/math?math=r_i"> à une proposition (de très
  défavorable à très favorable, -2 à 2),
  et une réponse du candidat <img src="https://render.githubusercontent.com/render/math?math=r'_i"> (contre, sans avis
  ou pour, -1 à 1), on gagne <img src="https://render.githubusercontent.com/render/math?math=p_i = r_i * r'_i"> points.
  Le score des réponses face au candidat est la somme
  des <img src="https://render.githubusercontent.com/render/math?math=p_i">, normalisée face à la somme des valeurs
  absolues des points <img src="https://render.githubusercontent.com/render/math?math=p_i">, et exprimée sous forme de
  pourcentage.
