import React from "react";
import "./Select.css";
export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countriesData: {
                Adults: ["تقویت مکالمه", "دوره حضوری", "فشرده جتینو", "دوره آنلاین"],
                Kids: ["ویژه نوجوانان", "دوره حضوری", "ویژه کودکان", "دوره آنلاین"],
                Pro: ["آمادگی آیلتس", "زبان مهاجرت", "آمادگی تافل", "دوره TTC"],
            },
            mainCountryCities: []
        }
        this.selectHandler = this.selectHandler.bind(this)
    }
    selectHandler(event) {
        let mainCountry = event.target.value

        if (mainCountry === '-1') {
            this.setState({
                mainCountryCities: []
            })
        } else {
            let mainCountryCities = this.state.countriesData[mainCountry]

            this.setState({
                mainCountryCities: mainCountryCities
            })
        }
    }
    render() {
        return (
            <>
                <div className="container-select">
                    <div className="container-select-child">
                        <img className='select-image' src="man.png" href="/" >
                        </img>
                        <header className='select-title'>
                            دوره آموزشی را انتخاب نمایید
                        </header>
                        <p className="select-text" onChange={this.selectHandler}>
                            گروه را انتخاب نمایید
                            <p className="select-number" >
                                1
                            </p>
                        </p>
                        <p className="select-text left-select-text" onChange={this.selectHandler}>
                            دوره را انتخاب نمایید
                            <p className="select-number" >
                                2
                            </p>
                        </p>
                        <select className="courseSelect" onChange={this.selectHandler}>
                            <option className="option" value="-1">گروه آموزشی </option>
                            <option className="option" value="Adults">بزرگسالان</option>
                            <option className="option" value="Pro">پیشرفته</option>
                            <option className="option" value="Kids">کودکان</option>
                        </select>
                        <select className="groupSelect move-select">
                            {this.state.mainCountryCities.length ? this.state.mainCountryCities.map(city => (
                                <option value={city} key={city} className="option">{city}</option>
                            )) : (
                                <option value="-1" className="groupSelect  option">لیست دوره ها</option>
                            )}
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

