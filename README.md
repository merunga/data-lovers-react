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
17. FIN SESION 1
18. Crear `Filter` comprobar q no hace nada al retornar `null`
19. Crear estados locales de `searchText`, asociarlo al `value` pero no al `onClick`
20. Cambiar el valor por defecto del `useState` para ver como se refleja en el input
21. Capturar el evento `onChange` del `input`
22. Subir el estado a en `App.js` para manejo de `searchText` y explicar el por qué
23. Atar `searchText` y `setSearchText` como `props` a `Filter`
24. Atar`searchText` a `Content` con filtrado local de data a traves de una RegExp
25. Usar `useEffect` para traer la data de la API, y un `useState` para guardar esa data
26. Explicar porque el filtrado local ya no nos sirve y cheuquear los docs de la API para ver como filtrar
27. Asociar el `searchText` como parametros al URL de la API
28. Crear componente de `Loading` para usabilidad
29. FIN SESION 2
30. Crear controles de paginacion dentro de `Content`
31. Crear componente `PaginationControl` y usarlo dentro de `Content`
32. Realizar busqueda remota usando los parametros de la API (_lift url state_)
33. Manejo de error en la API
  