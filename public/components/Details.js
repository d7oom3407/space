import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                   const {id, company, img, info, price, title, inCart} = value.detailProduct; 
                   return(
                       <div className="container py-5">
                           {/*title*/}
                            <div className="row>">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{Fridge}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img/product-1} className="img-fluid" alt="Fridge" />
                                </div>
                            {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{2024}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{LG}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <span>SAR</span>{2000}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    The freezer is located at the bottom, allowing easier access to fresh food.
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                       <Link to="/">
                                           <ButtonContainer>
                                               back to products
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                               {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                   ); 
                }}
            </ProductConsumer>
        )
    }
}
