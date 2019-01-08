import React, { Component } from 'react'
import getWebViewList, { initializeWebViewList } from '../data/listData'
import EachListItem from './EachListItem'
let counter = 0, topCount = 0
let LISTPAGESIZE = 10
let DEMOUNTVALUE = 20
let TOP = 'TOP'
let slotRect
let collection = []

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
        Check if the user is at the bottom of the page or top (if top, pageYOffset=0).
        The counter is being used as multiple events get fired when scroll is almost near the screen bottom.
        Fetch the next data set for the first event triggered only. */
    handleScroll = () => {
        let direction
        let containerBounding = this.refs.listContainerRef.getBoundingClientRect()
        //console.log(window.innerHeight-containerBounding.top, containerBounding.bottom)
        let el1 = collection['5c28920f21c122c6a354a5b3'].getBoundingClientRect()
 //       console.log(el1.top, el1.bottom)
  
        console.log('inView:::',(window.innerHeight - el1.top) > 0 && el1.bottom > 0)
    /*    this.state.listItems.forEach(element => { 
            this.refsArray[eachItem._id]
        })
*/
        //const bounding = this.refs.chartBody.getBoundingClientRect();
        const docHeight = (window.innerHeight || document.documentElement.clientHeight);
        const scrollBottom = document.documentElement.scrollTop + docHeight;
        const elmTop = containerBounding.top + document.documentElement.scrollTop;
        const elmBottom = containerBounding.bottom + document.documentElement.scrollTop;
        const extraPicel = 0;
        if (slotRect === undefined ||
            document.documentElement.scrollTop > slotRect.top && scrollBottom > slotRect.bottom ||
            document.documentElement.scrollTop < slotRect.top && scrollBottom < slotRect.bottom) {
            slotRect = {
                top: (document.documentElement.scrollTop) - extraPicel,
                bottom: (document.documentElement.scrollTop + docHeight) + extraPicel,
            };
        }
        let insideSlot = slotRect.top < (elmTop) && slotRect.bottom > elmTop || slotRect.top < elmBottom && slotRect.bottom > elmBottom;

        //console.log('insideSlot',insideSlot,'elmTop',elmTop,'elmBottom',elmBottom,'slotRect.top',slotRect.top,'slotRect.bottom',slotRect.bottom)


        if (window.pageYOffset === 0) {
            console.log('Whooo.. reached the top!!')
            let topPageSize = LISTPAGESIZE
            topCount += 1
            if (topCount === 1) { topPageSize = DEMOUNTVALUE }
            direction = TOP
            let previousList = this.state.listItems
            previousList = getWebViewList(topPageSize, TOP).concat(previousList)
            this.handleDemount(previousList, DEMOUNTVALUE)
        } else if (window.pageYOffset > (document.body.scrollHeight - window.innerHeight)) {
            // Increment the counter every time the user does any scroll at bottom of page.
            counter += 1; topCount = 0
            // Fetch next data only once.
            if (counter === 1) {
                let previousList = this.state.listItems
                previousList = previousList.concat(getWebViewList(LISTPAGESIZE))
                //Demount operation if total number of elements are more than DEMOUNTVALUE value.
                this.handleDemount(previousList, 0)
            }
        }
    }

    handleDemount = (previousList, startSpliceIndex) => {
        if (previousList.length > DEMOUNTVALUE) {
            let noOfElementsTodelete = previousList.length - DEMOUNTVALUE
            previousList.splice(startSpliceIndex, noOfElementsTodelete)
        }
        this.setState({ listItems: previousList })
    }

    render() {
 
        let contactListElement = this.state.listItems.map(eachItem => {
            return (
                <li key={eachItem._id} className="eachListItem"
                    ref={(instance) => { collection[eachItem._id] = instance }}>
                    <EachListItem contact={eachItem} />
                </li>)
        })
        return (
            <div>
                <h1>Sample</h1><h1>Sample</h1><h1>Sample</h1><h1>Sample</h1><h1>Sample</h1>
                <h1>Sample</h1><h1>Sample</h1><h1>Sample</h1><h1>Sample</h1><h1>Sample</h1>
                <h1>Sample</h1><h1>Sample</h1><h1>Sample</h1>
                <ul ref="listContainerRef" className="list">
                    {contactListElement}
                </ul>
            </div>
        )
    }
}