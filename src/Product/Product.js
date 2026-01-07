import React, { Component } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class Product extends Component {

    componentDidMount() {
        AOS.init();
    }
    constructor(props) {
        super(props)
        this.state = {
            t: "",
            im: this.props.img,
            count: false,
        }

        this.a = this.a.bind(this)
        this.b = this.b.bind(this)
    }

    clickHandler(id) {
        let o = "به سبد خریدتان اضافه شد"
        let c = "فیلم " +' ( ' + this.props.title +' ) ' +' ' + o
        swal({
            title: c,
            icon: "success",
            buttons: "باشه",
        })

        this.props.onAddProduct(id)
    }

    filter() {

        let filtered = this.state.shoppingCart.filter(product => {
            return product.price > 8
        })


    }


    on(d) {
        if (this.state.count === false) {
            this.setState({
                count: true
            })
        }
        else {
            this.setState({
                count: false
            })
        }

    }


    b() {
        this.setState({


        })
        alert("hi")

        this.setState({
            t: "",
            t: this.props.img
        })
    }

    a() {

        this.b()

    }

    render(t) {
        let a = false
        let { desc, id, title, price, img, description } = this.props
        return (
            <div class="parent-shopha" >
                <div class="shopha">
                    <div class="icon-title">
                        <Link class="icon-title-text" >
                            {title}
                        </Link>
                    </div>

                    <img class="shop-item-image" src={this.props.img} />
                    <div class="reg">

                 

                        <hr>
                        </hr>

                        <p class="shop-item-price-text">
                            {desc}
                        </p>
                    </div>
                    <span class="shop-item-price">
                        {description}

                   </span>
                    <button
                        class=" btn-primary-film"
                        type="button"
                        onClick={this.clickHandler.bind(this, id)}>
                        <img className='shop-delete-image ' src='/carty.png'

                            onClick={() =>
                                swal({
                                    title: "محصول مورد نظر شما به سبد خرید اضافه شد",
                                    icon: "success",
                                    buttons: " باشه !",

                                })

                            }></img>
                        خرید محصول
                  </button>
                </div>
            </div>        )
    }
}
