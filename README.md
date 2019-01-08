# Documentation
This component displays only a specific set of list items in the web view (the viewable part of user screen).

## Understanding the usecase: 
 1. A set of 10 elements are initially loaded into DOM. 
 2. When user scrolls to bottom of screen, a next set of 10 elements are fetched and added to the bottom of list and mounted on DOM.
 3. If number of elments in DOM are more than 20 , the initial set of elements in list are deleted (or unounted)

NOTE: Work is still happening in this project. The first version supports only a scroll Down event. Scroll UP is yet to be added.

## How to install?
`npm install`

## How to start?
`npm start`

## Where does it start?
[https://localhost:9000/](https://localhost:9000/)


## Logic/Algorithm used:
1. Identification of the web view is done by capturing the scroll event triggered when user scrolls to bottom of the screen. `window.pageYOffset > (document.body.scrollHeight - window.innerHeight)`
2. The List items are fetched via a utility function: under src/components/data/listData.js by slicing the original list retreived from the data set. (The current implementation uses a flat file, however the code can be enhanced to fetch from an API as well)
3. If the number of elements in the rendered list is more than DEMOUNT VALUE(20), the list gets spliced (remove initial items)


## Dependencies
1. The data for the list is loaded from src/data/data.json file => Update this file to see your changes (Make sure the data model is retained)
2. Each list item rendered is from src/components/EachListItem

### Modules used:
- Babel7
- Webpack4
- React16

### TODO::

Support Scroll UP
