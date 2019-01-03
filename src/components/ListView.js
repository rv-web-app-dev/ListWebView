import React, { Component } from 'react'
import getWebViewList, { initializeWebViewList } from '../data/listData'
import EachListItem from './EachListItem'
let counter = 0
let LISTPAGESIZE = 10
let DEMOUNTVALUE = 20

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: initializeWebViewList(LISTPAGESIZE)
        }
    }

    /* Register the scroll event handler function. */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    /* Reset the counter back to its initial value for taking care of the next scroll bottom event.  */
    componentDidUpdate() {
        counter = 0;
    }

    /*  Handler function to detect every scroll event.
        The counter is being used as multiple events get fired when scroll is almost near the screen bottom.
        Fetch the next data set for the first event triggered only. */
    handleScroll = () => {
        if (window.pageYOffset > (document.body.scrollHeight - window.innerHeight)) {
            // Increment the counter every time the user does any scroll at bottom of page.
            counter += 1;
            // Fetch next data only once.
            if (counter === 1) {
                let previousList = this.state.listItems
                previousList = previousList.concat(getWebViewList(LISTPAGESIZE))
                //Demount operation if total number of elements are more than DEMOUNTVALUE value.
                if (previousList.length > DEMOUNTVALUE) {
                    let noOfElementsTodelete = previousList.length - DEMOUNTVALUE
                    previousList.splice(0, noOfElementsTodelete)
                } 
                this.setState({ listItems: previousList })
            }
        }
    };

    render() {
        let contactListElement = this.state.listItems.map(eachItem => {
            return (
                <li key={eachItem._id} className="each-list-item">
                    <EachListItem contact={eachItem} />
                </li>)
        })
        return (
            <div>
                <ul className="list">
                    {contactListElement}
                </ul>
            </div>
        )
    }
}