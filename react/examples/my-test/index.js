var SelectPrice = React.createClass({
    getInitialState: function () {

        test = this;
        
        let props = this.props;
        let state = this.props.state;
        
        if (state) {
            return state;
        }
        
        return props;
    },
    componentDidMount() {
        this.setState({
            containerId: ReactDOM.findDOMNode(this).parentNode.getAttribute("id")
        });
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

        // console.log(this);
        // console.log(e);
        // console.log(data);

        ReactDOM.render(
            <DisplayForm
                state={this.state}
            />,
            document.getElementById(this.state.containerId)
        );
    },
    render: function () {

        return (
            <div>
                <img src={this.state.logo} />

                <h1>{this.state.name}</h1>
                <h2 onClick={this.handleClick}>Click me! Number of clicks: {this.state.clickCount}</h2>

                <p className='price'>{this.state.price}€</p>
                <p className='sale'>{this.state.sale}€</p>

                <p>Qty</p>
                <input className='input-line' type='text' value={this.state.qty} onChange={e=>this.updateInputValue(e.target.value, "qty")}></input>
                <p>Info</p>
                <input className='input-line' type='text' value={this.state.info} onChange={e=>this.updateInputValue(e.target.value, "info")}></input>

                <button className='input-line' onClick={this.displayForm.bind(this, 1)}>sale price</button>
                <button className='input-line' onClick={this.displayForm.bind(this, 0)}>orginal price</button>
            </div>
        );
    }
});


var DisplayForm = React.createClass({
    getInitialState: function () {
        let state = this.props.state;
        // console.log(state);
        return state;
    },
    updateInputValue: function (e, id) {
        this.setState({
            [id] : e
        });
    },
    displayForm: function (e, data) {
        if (e === 1) {
            ReactDOM.render(
                <DisplaySummary
                    state={this.state}
                />,
                document.getElementById(this.state.containerId)
            );
        } else {
            ReactDOM.render(
                <SelectPrice
                    state={this.state}
                />,
                document.getElementById(this.state.containerId)
            );
        }
    },
    render: function () {
        return (
            <div>
                <p>Firstname</p>
                <input className='input-line' type='text' value={this.state.firstName} onChange={e=>this.updateInputValue(e.target.value, "firstName")}></input>
                <p>Lastname</p>
                <input className='input-line' type='text' value={this.state.lastName} onChange={e=>this.updateInputValue(e.target.value, "lastName")}></input>
                
                <button className='input-line' onClick={this.displayForm.bind(this, 1)}>Next</button>
                <button className='input-line' onClick={this.displayForm.bind(this, 0)}>Back</button>
            </div>
        );
    }
});

var DisplaySummary = React.createClass({
    getInitialState: function () {
        let state = this.props.state;
        // console.log(state);
        return state;
    },
    displayForm: function (e, data) {
        if (e === 1) {
            ReactDOM.render(
                <DisplayThankYou
                    state={this.state}
                />,
                document.getElementById(this.state.containerId)
            );
        } else {
            ReactDOM.render(
                <DisplayForm
                    state={this.state}
                />,
                document.getElementById(this.state.containerId)
            );
        }
    },
    render: function () {
        return (
            <div>
                <p>Sale price: {this.state.price}</p>
                <p>Orginal price: {this.state.sale}</p>
                <p>Qty: {this.state.qty}</p>
                <p>Info: {this.state.info}</p>
                <p>Firstname: {this.state.firstName}</p>
                <p>Lastname: {this.state.lastName}</p>
                
                
                <button className='input-line' onClick={this.displayForm.bind(this, 1)}>Submit</button>
                <button className='input-line' onClick={this.displayForm.bind(this, 0)}>Back</button>
            </div>
        );
    }
});

var DisplayThankYou = React.createClass({
    getInitialState: function () {
        let state = this.props.state;
        // console.log(state);
        return state;
    },
    render: function () {
        return (
            <div>
                <p>Thank You!!!</p>
                <p>Display response message from server here</p>
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


ReactDOM.render(
    <SelectPrice
        price='200'
        sale='190'
        logo='https://vignette.wikia.nocookie.net/2007scape/images/9/97/Dragon_scimitar_detail.png/revision/latest?cb=20170118191039'
        name='Dragon Scimitar'
    />,
    document.getElementById('container2')
);