# RyanAir Developer Test Web App 

[![AttemptedBy|AfzalAhmad](http://hillnews.tv/snapshots/attempted_by.png)](mailto://securedeveloper@gmail.com)

To accomplish this task, I have used following technologies : 

  - Angular JS 1
  - Foundation
  - SCSS, CSS

# Task Description
### Tast 01 - Cheap flight finder
I have :
> 01) buit a form through which user can enter two route places (source & destination)
> 02) Implemented autocomplete functionality on place inputs
> 03) Impleted datepicker on date selection inputs
> 04) Implemented error handling on search form
> 05) On search button press, Flights are searched through API request, and are displayed as list.

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

```sh
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
![](http://hillnews.tv/snapshots/EN_000.png)
### Flight Search - English Version
![](http://hillnews.tv/snapshots/EN_001.png)
### Route Maps - English Version
Map is Zoomable, You can use cursor to navigate on map as well.

![](http://hillnews.tv/snapshots/EN_002.png)
### Autocomplete - English Version
![](http://hillnews.tv/snapshots/EN_003.png)
### Datepicker - English Version 
Restriction are applied on date selection.

![](http://hillnews.tv/snapshots/EN_004.png)
### Simple Layout - French Version
![](http://hillnews.tv/snapshots/FR_000.png)
### Flight Search - French Version
![](http://hillnews.tv/snapshots/FR_001.png)
### Route Maps - French Version
![](http://hillnews.tv/snapshots/FR_002.png)


This is all about my test. For any further query. Please write me at `securedeveloper@gmail.com`.

 > Have good day.