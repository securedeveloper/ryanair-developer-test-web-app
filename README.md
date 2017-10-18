# [DEMO](https://securedeveloper.github.io/ryanair-developer-test-web-app/)

## NOTE 

Please update link of `<base href="https://securedeveloper.github.io/ryanair-developer-test-web-app/" />` before running this project.
usually you are required to set it to your localserver or hosted server path, in my case if was `<base href="http://localhost:88/" />`.

# RyanAir Developer Test Web App 

[![AttemptedBy|AfzalAhmad](https://raw.githubusercontent.com/securedeveloper/Android-BabyNames-Application/master/screenshots/developedby.png)](mailto://securedeveloper@gmail.com)

To accomplish this task, I have used following technologies : 

  - Angular JS 1
  - Foundation
  - SCSS, CSS

# Task Description
### Tast 01 - Cheap flight finder
I have :
 - buit a form through which user can enter two route places (source & destination)
 - Implemented autocomplete functionality on place inputs
 - Impleted datepicker on date selection inputs
- Implemented error handling on search form
- On search button press, Flights are searched through API request, and are displayed as list.

### Tast 02 - Route maps

I've used amcharts api to accomplish route maps task:
  - [amcharts](https://www.amcharts.com/)
  - I got list of all airports through API provided, and then I pass them to amchart library to render a nice routes map.

### Tast 03 - Translations

I used [![MangoDB](https://perlmaven.com/img/mongodb-logo.png)](https://www.mongodb.com/) to create two different files
 - `en.json` for English version
 - `fr.json` for French Versio
There are two flags for `english` and `french` version, by pressing on each button site it converted to relevant language.

### .htaccess file

Please make sure that you have `.htaccess` file in root directory before running this application.

```c
<IfModule mod_rewrite.c>

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f 
RewriteCond %{REQUEST_FILENAME} !-d 
RewriteCond %{REQUEST_FILENAME} !-l

RewriteRule .* index.html [L]

</IfModule>
```

# Screenshots

### Simple Layout - English Version
![](./snapshot/EN_000_SimpleLayout.png)
### Flight Search - English Version
![](./snapshot/EN_001_FlightSearch.png)
### Route Maps - English Version
Map is Zoomable, You can use cursor to navigate on map as well.

![](./snapshot/EN_002_RouteMaps.png)
### Autocomplete - English Version
![](./snapshot/EN_003_AutoFill.png)
### Datepicker - English Version 
Restriction are applied on date selection.

![](./snapshot/EN_004_DatePicker.png)
### Simple Layout - French Version
![](./snapshot/FR_000_SimpleLayout.png)
### Flight Search - French Version
![](./snapshot/FR_001_FlightSearch.png)
### Route Maps - French Version
![](./snapshot/FR_002_RouteMaps.png)

For any further query. Please write me at `securedeveloper@gmail.com`.
