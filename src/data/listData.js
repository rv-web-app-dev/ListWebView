import * as listItems from './data.json'

let TOP = 'TOP';
let BOTTOM = 'BOTTOM';
let NO_OF_DEFAULT_ITEMS = 5;
let DEFAULT_FETCHSIZE = NO_OF_DEFAULT_ITEMS - 1
let webViewContext = { startIndex: 0, endIndex: NO_OF_DEFAULT_ITEMS }

/**
 * Sets the webViewContext which holds the context of start and end indexes of original data source.
 * @param numOfElementsToChange : relative number of elements to move the view (has to be positive number)
 * @param direction : window movement either TOP or BOTTOM
 * @returns undefined : Sets the start and end indexes of webViewContext
 */
let getWebViewContext = (numOfElementsToChange = NO_OF_DEFAULT_ITEMS, direction) => {
    // If TOP, make the offset as negative.
    if (direction === TOP) { numOfElementsToChange *= -1 }
    // Add the offset to start and end indexes.
    webViewContext.startIndex += numOfElementsToChange
    webViewContext.endIndex += numOfElementsToChange
    //If the values drop lesser than the defaults, reset the indexes to default values.
    if (webViewContext.endIndex < DEFAULT_FETCHSIZE) {
        webViewContext.startIndex = 0
        webViewContext.endIndex = DEFAULT_FETCHSIZE
    }
    return webViewContext
}

/**
 * Function to be invoked to fetch a sub set of items based on scroll event
 * @param start :The start index of the item to fetch (default:0)
 * @param fetchSize :The number of items to fetch (default:10)
 * @param scrollDirection : TOP/BOTTOM (default: BOTTOM)
 * @returns :A new array sliced from original datasource
 */
const getWebViewList = (fetchSize = NO_OF_DEFAULT_ITEMS, scrollDirection = BOTTOM) => {
    webViewContext = getWebViewContext(fetchSize, scrollDirection)
    return listItems.slice(webViewContext.startIndex, webViewContext.endIndex)
}

/**
 * Returns the initial webview list. This has to be called only once in the begining.
 */
const initializeWebViewList = (pageSize = NO_OF_DEFAULT_ITEMS) => {
    NO_OF_DEFAULT_ITEMS = pageSize //Update the value if it was passed.
    webViewContext.endIndex = NO_OF_DEFAULT_ITEMS
    return listItems.slice(webViewContext.startIndex, webViewContext.endIndex)
}

export default getWebViewList;
export {initializeWebViewList};
