import React, { Component } from 'react'
import Product from './product'
import './index.css'

export class Products extends Component {
    render() {
        return(
            <section class="shop">
                <Product/>
            </section>
        )
    }
}

export default Products