# Data Lovers de Rick & Morty en React

[demo](http://merunga.github.io/data-lovers-react)

## Lista de temas

- `create-react-app`
- Componentes funcionales (y mensión a componentes clase)
- `children` y `keys`
- `props` y `prop-types`
- `useState`
- `useEffect`
- CSS modules
- Uso de librerias de componentes externas (`react-bootstrap`)
- Manejo de errores
- `eslint`
- deploy a `gh-pages`

## Recursos
- [`create-react-app`](https://create-react-app.dev/)
- [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.htunction-and-class-components)
- [`props`](https://es.reactjs.org/docs/components-and-props.html)
- [`prop-types`](https://es.reactjs.org/docs/typechecking-with-proptypes.html)
- [Manejo de eventos](https://es.reactjs.org/docs/handling-events.html)
- [Listas y keys](https://es.reactjs.org/docs/lists-and-keys.html)
- [Renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
- [hooks](https://es.reactjs.org/docs/hooks-intro.html): [`useState`](https://es.reactjs.org/docs/hooks-state.html) y [`useEffect`](https://es.reactjs.org/docs/hooks-effect.html)
- [`CSS` modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [Levantamiento de estados](https://es.reactjs.org/docs/lifting-state-up.html)
- [deploy a `gh-pages`](https://create-react-app.dev/docs/deployment/#github-pages)
- [`eslint`](https://eslint.org/)
- [`bootstrap`](https://getbootstrap.com/) y [`react-bootstrap`](https://react-bootstrap.github.io/)

## Guión

1. Crear proyecto
2. Levantarlo
3. Comprobar configuracion de `eslint`
4. Cambiar logo
5. Extraer logo a componente independiente, primero clase luego función
6. Cambiar tamaño de logo usando `css modules`
7. Instalar `react-bootstrap` e importar `css` global
8. Hacer layout usando `react-bootstrap`
9. Extraer componente `Header`
10. Crear placeholder para componentes `Filter` y `Content`
11. Copiar data estatica a `json` local
12. Crear contenido de `Content` usando el `json` local (olvidar de setear `key` y ver mensaje de error)
13. Extraer card a propio componente
14. Crear repo en github y subir codigo
15. Instalar `gh-pages`, configurar `HOME_URL`, crear `npm scrips` de `build`,`predeploy` y `deploy`
16. Hacer deploy, chequear creacion de branch `gh-pages` y habilitar `gh-pages` en repo
17. Crear `Filter` comprobar q no hace nada
18. Crear los estados locales en `App.js` para manejo de `searchText`
19. Atar `setSearchText` a `Filter`
20. Atar`searchText` a `Content` con filtrado local (cambiar tipo de `props` y ver mensaje de error)
21. Crear funcion para _custom_ `fetch` y usar data remota
22. Crear componente de `Loading` para usabilidad
23. Crear controles de paginacion dentro de `Content`
24. Crear componente `PaginationControl` y usarlo dentro de `Content`
25. Realizar busqueda remota usando los parametros de la API (_lift url state_)
26. Manejo de error en la API
  