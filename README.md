# Pdex-vue

##Getting started

This application uses a Vite template from Vue3. Some commands are:

```bash
Install dependences: yarn;
Run project locally: yarn dev;
Build the project ready to deploy: yarn run build;
```
##Features

In the main page the user will be able to see an infinite scroll list with all pokemon and 3 inputs. These inputs are filtes: by pokemon name, by id and by type. The first two updates the screen instantly and based on the main list, filtering by strings, and the last one refreshes by getting a new list of the pokemon based on the selected type.

When the user selects a pokemon, a drawer opens with this pokemon data. There you can view the sprite, types, abilities, stats, a pokedex entry and its evolution chain (if it's not a single-stage pokemon). You can too change the pokemon one by one just by pressing the buttons on the top of the view.

##Technical decisions

The project directories are organized in some pages:

 - commons, with all the general stuff for the project, like components, utils, classes, interfaces, and the Api functions;
 - Modules, when the big data of the system are managed and persisted;
 - Pages, the... pages;

##Hosting

The project is hosted on Vercel platform, and you can access it [here](https://pdex-vue.vercel.app/)
