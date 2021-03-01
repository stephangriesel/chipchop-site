import React, { Component } from 'react'
import Title from '../Globals/Title'
// import Img from 'gatsby-image'

const getCategories = items => {
    console.log('items before mapped', items)
    let tempItems = items.map(items => {
        return items.node.category;
    })
    let tempCategories = new Set(tempItems); // get unique value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    let categories = Array.from(tempCategories); // change object to array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    categories = ['all', ...categories]
    return categories;
}

class Menu extends Component {
    constructor(props) {
        super(props);

        console.log("<< Checkprops >>", this.props)
        const arrayItems = this.props.items.edges
        const arrayedItems = arrayItems.map((currentItem) => {
            console.log("<< Get treatment title: ", currentItem.node, '>>')
            return currentItem.node
        }).sort(arrayedItems)

        console.log("<< Treatments in array >>", arrayedItems)

        this.state = {
            items: props.items.edges,
            happyItems: props.items.edges,
            title: arrayedItems,
            categories: getCategories(props.items.edges)
        }
    }

    handleItems = (category) => {
        let tempItems = [...this.state.items];
        if (category === "all") {
            this.setState(() => {
                return { happyItems: tempItems }
            })
        }
        else {
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState(() => {
                return { happyItems: items };
            })
        }
    }

    render() {
        console.log("<< Get categories >>", this.state.categories);
        console.log("<< Get treatment items >>", this.state.happyItems);
        console.log("<< Get treatment title >>", this.state.title);
        if (this.state.items.length > 0) {
            return (
                <section>
                    <div className="fade-in">
                        <section className="menu">
                            <div className="container">
                                <Title title="" />
                                {/* Categories */}
                                <div className="row mb-5">
                                    <div className="col-10 mx-auto text-center">
                                        {this.state.categories.map((category, index) => {
                                            return (<button type="button" key={index} className="btn btn-yellowish text-capitalize m-1" onClick={() => { this.handleItems(category) }}>{category}</button>)
                                        })}
                                    </div>
                                </div>
                                {/* Items */}
                                <div className="row">
                                    {/* happy items array in state, loop through array */}
                                    {this.state.happyItems.map(({ node }) => {
                                        return (

                                            <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto swing-in-top-fwd">
                                                {/* <div className="prd-img"><Img className="rounded" fixed={node.image.fixed} /></div> */}
                                                <div className="flex-grow-1 px-3 prd-item justify-content-center">
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-1">{node.title}</h6></div>
                                                        <div><h6 className="mb-1 ml-1"><strong>R{node.price}</strong></h6></div>
                                                    </div>
                                                    <p className="text-muted">
                                                        <small>{node.description.description}</small>
                                                    </p>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            );
        } else {
            return (
                <section>
                    <div>
                        <div>
                            <section>
                                <section className="menu py-5">
                                    <div className="container">
                                        <Title title="Our Menu"></Title>
                                        <div className="row">
                                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                                <h1>Nothing to display</h1>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Menu
