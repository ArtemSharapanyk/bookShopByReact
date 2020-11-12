import React, { Fragment } from 'react';
import { Component } from 'react';
import './bookPage.css';
import Button from '../../UI/Button/Button';
import axios from '../../../axios/axios';
import Loader from '../../UI/Loader/Loader';
import delayCreator from '../../../LoaderHelper/delayCreater';
import { connect } from 'react-redux';
import { getBookData } from '../../../redux/actions/bookPage/actionCreators';


class BookPage extends Component{
    

    componentDidMount(){
       this.props.getData(this.props.match.params.id); 
    }

    render(){
        return(
            <Fragment>
                {
                    this.props.loading ? 
                        <div className="bookPage">
                            <div className="col1">
                                <div className="titleOfBook">
                                    {this.props.book.name}
                                </div>
                                <div className="descriptionOfbook">
                                    {this.props.book.descriptionText}
                                </div>
                            </div>
                            <div className="col2">
                                <div className="imgOfBook">
                                    <img />
                                    <div className="info">
                                        <div className="authotor">
                                            Authotor:  <span>{this.props.book.authorInitials}</span>
                                        </div>
                                        <div className="price">
                                            price: <span>{this.props.book.price}$ </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button specialClass='bookPageBtn' disabledState={true}>
                                Buy
                            </Button>
                        </div>
                        :
                            <Loader/>
                }
            </Fragment>
        )
    }
}

export default connect(state => ({
    book: state.bookPage.book,
    loading: state.bookPage.loading
}), dispatch => ({
    getData: (id) => dispatch(getBookData(id))
}))(BookPage);
