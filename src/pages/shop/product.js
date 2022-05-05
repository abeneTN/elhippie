import React, { Component } from 'react'
import './index.css'

export class Product extends Component {
    render() {
        return(
            <div class="item item1">
                <div class="item_description">
                    <h1>Marbella</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</h3>
                    <div class="sizes">
                        <h4>Size : </h4>
                    </div>
                    <a href="/#">Add to cart</a>
                </div>
            </div>
        )
    }
}

export default Product