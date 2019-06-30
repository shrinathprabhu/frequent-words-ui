Frequent Words UI
====================
A Vue based material UI that interacts with frequent-words-api and gives back result

--------------------
## Project setup
```
npm install
```

------------------
### Compiles and hot-reloads for development
```
npm run serve
```

-----------------------
### Compiles and minifies for production
```
npm run build
```

-------------
### Technologies used
- **Vue-cli** used to develop Vue apps with a simple setup and fast track the process
- **Vuex** used for state management across vue apps
- **Vuetify** used for reusing the prebuilt components and elements that follow material design guidelines
- **Vue-axios and Axios** used for requesting external Api end points

--------------------
### Elements
- **NumberField** allows you to enter number or change number
- **SubmitButton** is disabled by default and is enabled only after value of NumberField is changed. On click hits the Api hosted at heroku and gets the response
- **CaseSensitivitySwitch** changes the preference of case sensitivity. On change hits the Api hosted at heroku if there exists a valid number greater than -1 in NumberField
- **DataField** gets populated after response from backend arrives. A loading state is shown when backend api is requested
- **ThemeSwitch (Extra)** changes the theme to Dark Theme or Light Theme

### Made with :heart: by Shrinath Prabhu