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

- Crear proyecto
- Levantarlo
- Comprobar configuracion de `eslint`
- Cambiar logo
- Extraer logo a componente independiente, primero clase luego función
- Cambiar tamaño de logo usando `css modules`
- Instalar `react-bootstrap` e importar `css` global
- Hacer layout usando `react-bootstrap`
- Extraer componente `Header`
- Crear placeholder para componentes `Filter` y `Content`
- Copiar data estatica a `json` local
- Crear contenido de `Content` usando el `json` local
- Crear `Filter` comprobar q no hace nada
- Crear los estados locales en `App.js` para manejo de `searchText`
- Atar `setSearchText` a `Filter`
- Atar`searchText` a `Content` con filtrado local
- Cambiar tipo de 
- Crear funcion para _custom_ `fetch` y usar data remota
- Crear componente de `Loading` para usabilidad
- Crear controles de paginacion dentro de `Content`
- Crear componente `PaginationControl` y usarlo dentro de `Content`
- Realizar busqueda remota usando los parametros de la API (_lift url state_)
- Manejo de error en la API
- Crear repo en github y subir codigo
- Instalar `gh-pages`, configurar `HOME_URL`, crear `npm scrips` de `build`,`predeploy` y `deploy`
- Hacer deploy, chequear creacion de branch `gh-pages` y habilitar `gh-pages` en repo
  