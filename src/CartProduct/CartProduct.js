import React, { Component } from 'react'


export default class CartProduct extends Component {

    clickHandler(id) {
        this.props.onRemove(id)
    }


    clickfilter(id) {
        this.props.onFilter(id)
    }

    sho(event) {
        alert("hi")
    }

  render() {

        let { id, title, price, img } = this.props
        return (

            <div class="cart-row">
                <div class="cart-item ">
                    <img class="cart-item-image" onFocus={this.clickHandler.bind(this, id)} src={img} width="100" height="100" />
                    <span class="cart-item-title">{title}</span>
                </div>
                <span class="cart-price ">{price}  {'هزار تومان'} </span>

                <div class="cart-quantity ">
                    <button class="btn btn-danger" type="button" onClick={this.clickHandler.bind(this, id)}>حذف</button>
                </div>
            </div>
        )
    }
}
