# **Ejercicio 1: React Issues**

En el repositorio de github de React, existe una sección donde se muestran los issues del proyecto: https://github.com/facebook/react/issues
Desarrolla un programa en React con componentes qué consulte la API de los issues del proyecto de React y muestre un listado de los issues en la pantalla, con las siguientes características:

Al cargar la página, se mostrará el listado de issues, donde cada ítem del listado deberá:

- Mostrar el id del issue.
- Mostrar el título del issue.
- Mostrar el nombre del usuario qué abrio el issue.
- Cuando haga clic en un título, me deberá mandar al enlace qué tiene el detalle del issue en github (ejemplo: https://github.com/facebook/react/pull/24117) - (html_url)

Plus:

- Mostrar los labels a los qué pertenece cada issue (ejemplo: Status: Unconfirmed, React 18, etc.)
- Elaborar una barra de búsqueda, qué me permita filtrar los resultados traídos por la API.

Consideraciones:

- Recuerda qué las llamadas a API deberán estar dentro del hook de react de useEffect():
- El endpoint a utilizar con la información de los issues es: https://api.github.com/repos/facebook/react/issues
- Un ejemplo podría ser el siguiente: https://josemiguelvazquez.github.io/react-issues-app/
