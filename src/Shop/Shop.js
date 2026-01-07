import React, { Component } from 'react'
import Product from '../Product/Product'
import CartProduct from '../CartProduct/CartProduct'
import Form from 'react-bootstrap/Form';
import './Shop.css'
import swal from "sweetalert";
import Header from '../components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiSearch } from "react-icons/ci";
export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            actresses: [
                { imgactress: 'images/1/1.jpg' },
                { imgactress: 'images/1/ww.webp' },
                { imgactress: 'images/1/18.jpg' },
            ],
products: [
    { actress: 'c', id: 11, desc: '9.5/10', price: "300", img: 'images/1/1.jpg', title: 'اسید', description: "همراه با یک موج گرما ابر تیره عظیمی آسمان را فرا می گیرد و باران اسیدی مرگباری شروع به باریدن می کند. در این میان، اعضای یک خانواده سعی دارند خود را به یکدیگر برسانند تا با هم از این بلای جهانی جان سالم به در برند" },
    { actress: 'c', id: 2, desc: '6.5/10', price: "20", img: 'images/1/2.webp', description: "پس از اتفاقی خشونت بار، مادر جوانی باید یاد بگیرد غم و اندوه طاقت فرسا خود را مدیریت کند، نه تنها به خاطر آرامش خود بلکه به خاطر پسر کوچکش", title: 'آرامش در دره' },
    { actress: 'j', id: 16, desc: '8.5/10', price: "120", img: 'images/1/3.webp', title: 'عشق در مزرعه', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 6, desc: '8.5/10', price: "50", img: 'images/1/4.jpg', title: 'ببر سه', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 18, desc: '6.5/10', price: "60", img: 'images/1/5.webp', title: 'برنامه خانوداگی', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 3, desc: '6.5/10', price: "60", img: 'images/1/6.webp', title: 'اتاق', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 6, desc: '7.5/10', price: "50", img: 'images/1/7.webp', title: 'نامه به بابانوئل', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'c', id: 1, desc: '7.5/10', price: "300", img: 'images/1/8.webp', title: 'کافه بین راهی', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 8, desc: '7.5/10', price: "120", img: 'images/1/9.webp', title: 'یک تکه شیکاگویی', description: "دو پیتزا فروشی خوب در حومه شیکاگو سال هاست که با هم رقابت می کنند؛ اما با باز شدن پیتزافروشی های زنجیره ای نسل جدید، رقابت میان صاحبان این دو رستوران جایش را به عشق می دهد" },
    { actress: 'c', id: 9, desc: '7.5/10', price: "120", img: 'images/1/10.webp', title: 'عشق زمین گلف', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 5, desc: '5.10', price: "90", img: 'images/1/11.webp', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند", title: 'آرامش در شمال' },
    { actress: 'e', id: 4, desc: '6.5/10', price: "80", img: 'images/1/12.webp', title: 'اصل مساله', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 10, desc: '7.5/10', price: "120", img: 'images/1/13.jpg', title: 'معمای قتل', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 12, desc: '6.5/10', price: "60", img: 'images/1/14.webp', title: 'بدشانسی بتی', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'c', id: 15, desc: '6.5/10', price: "20", img: 'images/1/15.webp', title: 'نجات کریسمس', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 13, desc: '6.5/10', price: "60", img: 'images/1/16.webp', title: 'بعد عروسی', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'c', id: 17, desc: '3.5/10', price: "300", img: 'images/1/17.webp', title: 'اسید', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 7, desc: '6.5/10', price: "70", img: 'images/1/18.jpg', description: "خانم امدادگری در شهر نیویورک متوجه می شود توانایی غیب بینی دارد. او حالا در مواجهه با حقایق گذشته خود قرار گرفته و هم زمان باید از سه زن جوان محافظت کند که دشمن خطرناکی قصد جانشان را کرده است", title: 'خانم وب' },
    { actress: 'c', id: 24, desc: '6.5/10', price: "20", img: 'images/1/19.webp', description: "پس از اتفاقی خشونت بار، مادر جوانی باید یاد بگیرد غم و اندوه طاقت فرسا خود را مدیریت کند، نه تنها به خاطر آرامش خود بلکه به خاطر پسر کوچکش", title: 'آرامش در دره' },
    { actress: 'j', id: 22, desc: '7.5/10', price: "120", img: 'images/1/20.jpg', title: 'معمای قتل', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'c', id: 21, desc: '6.5/10', price: "20", img: 'images/1/24.webp', title: 'نجات کریسمس', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 23, desc: '6.5/10', price: "80", img: 'images/1/25.webp', title: 'اصل مساله', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'j', id: 20, desc: '8.5/10', price: "120", img: 'images/1/27.jpg', title: 'عشق در مزرعه', description: "ویتنی یک گلف باز حرفه ای است که برای کمک به گرداندن زمین گلف خانوادگی اش به زادگاهش بر می گردد. او در آنجا با یک گلف باز حرفه ای دیگر به نام آستین آشنا می شود و با اکراه در تورنمنت سالانه گلف شرکت می کند" },
    { actress: 'e', id: 19, desc: '6.5/10', price: "70", img: 'images/1/28.webp', description: "خانم امدادگری در شهر نیویورک متوجه می شود توانایی غیب بینی دارد. او حالا در مواجهه با حقایق گذشته خود قرار گرفته و هم زمان باید از سه زن جوان محافظت کند که دشمن خطرناکی قصد جانشان را کرده است", title: 'خانم وب' }
],
            shoppingCart: [],
            filteredmovies: [],
            tow: "",
            one: "",
            three: "",
            all: "true",
            search: "",
          shopbody: "shop-body",
            name: "همه فیلم ها"
        }
    }
 
    addProductToCart(d) {
        let ma = this.state.shoppingCart.find(product => {
            return product.id === d
        })

        if (ma) {

            swal({
                title: 'این فیلم را قبلا خریدی ',
                icon: "error",
                buttons: " باشه !",
                className: "rrr",
            })   }
        else {
            let mainProduct = this.state.products.find(product => {
                return product.id === d
            })
            this.setState(prevState => {
                return {
                    shoppingCart: [...prevState.shoppingCart, mainProduct]
                }
            })

            this.setState(prevState => {
                return {
                    count: this.state.count + 1

                }
            })
        }
    }

    emptyShoppingCart() {
        this.setState(prevState => {
            return {
                count: 0

            }
        })
        this.setState({
            shoppingCart: []
        })
    }

    removeProductFromCart(productId) {
        this.setState(prevState => {
            return {
                count: this.state.count - 1

            }
        })

        let newShoppingCart = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })

        this.setState({
            shoppingCart: newShoppingCart
        })
    }
    all(d) {
        this.state.name = "همه فیلم ها"
        this.state.shopbody="shop-body"
        this.state.one = ""
        this.state.all = "true"
        this.state.tow = ""
        this.state.three = ""
        this.setState({
            filteredmovies: this.state.products
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    onFilterj(d) {
        this.state.name = " فیلم های عاشقانه"
          this.state.shopbody="love-body"
        this.state.one = ""
        this.state.all = ""
        this.state.tow = ""
        this.state.three = "true"
        let filteredj = this.state.products.filter(product => {
            return product.actress === 'j'
        })
        this.setState({
            filteredmovies: filteredj
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    onFilterc(d) {
        this.state.name = " فیلم های اکشن"
              this.state.shopbody="action-body"
        this.state.one = ""
        this.state.all = ""
        this.state.tow = "true"
        this.state.three = ""
        let filteredc = this.state.products.filter(product => {
            return product.actress === 'c'
        })
        this.setState({
            filteredmovies: filteredc
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    onFiltere(d) {
        this.state.name = "فیلم های درام"
            this.state.shopbody="dram-body"
        this.state.one = "true"
        this.state.all = ""
        this.state.tow = ""
        this.state.three = ""
        let filterede = this.state.products.filter(product => {
            return product.actress === 'e'
        })
        this.setState({
            filteredmovies: filterede
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    componentDidMount() {
        AOS.init({ disable: 'desktop', once: false });
        this.setState({
            filteredmovies: this.state.products
        })
    }
    render() {
        const scrolltosells = () => {
            if (this.state.all === "true" && window.innerWidth > 1642) {
            window.scrollTo({ top: 2780, left: 0, behavior: 'smooth' });
            }
            else if (this.state.all === "true" && window.innerWidth < 1642) {
                window.scrollTo({ top: 2180, left: 0, behavior: 'smooth' });
            }

            else {
                window.scrollTo({ top: 1020, left: 0, behavior: 'smooth' });
            }
        };
        const scrollToTopfilm = () => {
            window.scrollTo({ top: 30, left: 0, behavior: 'smooth' });
        };
        const searchforme = (e) => {
            this.setState({
                search: (e.target.value)
            })
            const seareched = this.state.products.filter((g) => g.title.startsWith(this.state.search));
            this.setState({
                filteredmovies: seareched
            })
        };
        return (<>
            <Header />
            <div className={this.state.shopbody}>
                <p onClick={scrollToTopfilm} className='shop-list films'>
                    <div className="search">
                        <input
                            type="text"
                            value={this.search}
                            onChange={searchforme}
                            placeholder="جستجو..." className="search-input">
                        </input>
                        <CiSearch className='search-icon' />
                    </div>
                </p>

                <p onClick={scrolltosells} className='shop-list'>
                    لیست خریدها
                </p>
                <figure className='shop-count'>
                    <img class="shop-count-image" src="carty.png" />
                    سبد خرید
                    <span className='shop-count-count' >
                        {this.state.count}
                    </span>
                </figure>
                <header class="zz">
                    <h1 class="movies-title">{this.state.name}  </h1>
                </header>
                <div className='valed-parent-filters' >
                    {['radio'].map((type) => (
                        <div key={`reverse-${type}`} className="parent-filters">
                            <Form.Check onClick={this.all.bind(this)} className={this.state.all ? 'formcheck-shop blue-border' : 'formcheck-shop'}
                                reverse
                                name="group1"
                                label="همه"
                                type={type}
                                id={`reverse-${type}-4`}
                            />
                            <Form.Check className={this.state.three ? 'formcheck-shop blue-border' : 'formcheck-shop '} onClick={this.onFilterj.bind(this)}
                                reverse
                                label="عاشقانه"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <Form.Check className={this.state.tow ? 'formcheck-shop blue-border' : 'formcheck-shop '} onClick={this.onFilterc.bind(this)}
                                reverse
                                label="اکشن"

                                name="group1"
                                type={type}
                                id={`reverse-${type}-2`}
                            />
                            <Form.Check onClick={this.onFiltere.bind(this)} className={this.state.one ? 'formcheck-shop blue-border' : 'formcheck-shop'}
                                reverse
                                name="group1"
                                label="درام"
                                type={type}
                                id={`reverse-${type}-3`} />
                        </div>

                    ))}
                </div>

                <div class="movie-items">
                    {this.state.filteredmovies.map(product => (
                        <Product {...product} onFilterj={this.onFilterj.bind(this)}
                            onFiltere={this.onFiltere.bind(this)}
                            onFilterc={this.onFilterc.bind(this)} onAddProduct={this.addProductToCart.bind(this)} />
                    ))}
                </div>
                <div class="cart-row row-tow">
                    <span class="cart-header cart-column p-name">نام فیلم</span>
                    <span class="cart-header cart-column">هزینه</span>
                    <span class="cart-header cart-column">حذف از سبد</span>
                </div>
                <div class="cart-items ">
                    {this.state.shoppingCart.map(product => (
                        <CartProduct {...product} onRemove={this.removeProductFromCart.bind(this)} />
                    ))}
                </div>
                <div class=" btn-parent-orig" >
                    <button class=" btn-purchase" type="button" onClick={this.emptyShoppingCart.bind(this)}>
                        حذف کل خریدها
                    </button>
                </div>
            </div>
        </>
        )
    }
}