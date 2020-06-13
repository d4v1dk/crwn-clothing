import React, { Component } from 'react';

import SHOP_DATA from './shop.data';

import Collection from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super();

        this.state ={
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        console.log(collections);
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
};

export default ShopPage;