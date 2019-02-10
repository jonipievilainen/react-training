var SelectPrice = React.createClass({
    getInitialState: function () {
        return {
            clickCount: 0,
            qty: 1000,
            info: 1,
        };
    },
    handleClick: function () {
        this.setState(function (state) {
            return { clickCount: state.clickCount + 1 };
        });
    },
    updateInputValue: function (e, id) {

        this.setState({
            [id] : e
        });
    },
    displayForm: function (e, data) {

        console.log(this);
        console.log(e);
        console.log(data);

        ReactDOM.render(
            <DisplayForm
                state='' // TODO: How tow pass getInitialState?
            />,
            document.getElementById('container')
        );
    },
    render: function () {

        let props = this.props;

        return (
            <div>
                <img src={props.logo} />

                <h1>{props.name}</h1>
                <h2 onClick={this.handleClick}>Click me! Number of clicks: {this.state.clickCount}</h2>

                <p className='price'>{props.price}€</p>
                <p className='sale'>{props.sale}€</p>

                <p>Qty</p>
                <input id="qty" className='input-line' type='text' onChange={e=>this.updateInputValue(e.target.value, "qty")}></input>
                <p>Info</p>
                <input id='info' className='input-line' type='text' onChange={e=>this.updateInputValue(e.target.value, "info")}></input>

                <button className='input-line' onClick={this.displayForm.bind(this, 1)}>sale price</button>
                <button className='input-line' onClick={this.displayForm.bind(this, 0)}>orginal price</button>
            </div>
        );
    }
});


var DisplayForm = React.createClass({
    render: function () {
        return (
            <div>
                <p>Firstname</p>
                <input className='input-line' type='text'></input>
                <p>Lastname</p>
                <input className='input-line' type='text'></input>
                <button className='input-line' onClick={this.selectPrice}>Back</button>
            </div>
        );
    }
});

ReactDOM.render(
    <SelectPrice
        price='100'
        sale='90'
        logo='https://vignette.wikia.nocookie.net/2007scape/images/2/25/Rune_scimitar_detail.png/revision/latest?cb=20160214071833'
        name='Rune Scimitar'
    />,
    document.getElementById('container')
);