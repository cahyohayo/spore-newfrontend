import React, { useEffect } from 'react';
import { useState } from 'react';
import { ContractAddesses } from '../../utils/addresses';
import { SPORE_MARKET_ABI } from '../../utils/SporeAbis';
//import ReturnExternalURL from './ReturnExternalURL';
import { nftmetadata } from '../../utils/nftmetadata';



const win = window as any
export interface MarketplaceItem {
    itemId: number,
    price: number,
    URI: string
}

type Props = {
    bazaar: Array<any>
}

export const MarketPlaceView = (props: Props) => {

    const [marketPlaceItems, setMarketPlaceItems] = useState<Array<MarketplaceItem>>([])

    const buildMarketPlace = async () => {
        const SporeMarketv1 = new win.ava.eth.Contract(
            SPORE_MARKET_ABI,
            ContractAddesses.AVAX_MARKET_MAINNET
        )
        var builder = new Array<MarketplaceItem>()
        for (let i = 0; i <= 72 - 1; i++) {
            if (props.bazaar[i] !== undefined && props.bazaar[i].price > 0) {
                const URI = await SporeMarketv1.methods
                    .tokenURI(i)
                    .call()
                builder.push({ itemId: i, price: props.bazaar[i].price / 10 ** 18, URI: URI } as MarketplaceItem);
            }
        }
        setMarketPlaceItems(builder)
    }

    const findimage = (itemId: number) => {
        var item = Number(itemId) + 1;
        return nftmetadata.filter(x => x.id === item.toString()).map(ext => { return ext.external_url }).toString();
    }

    useEffect(() => {
        buildMarketPlace()

    })

    return (
        <>
            {marketPlaceItems.length > 0 ? (
                marketPlaceItems.map((item) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 m-place" key={item.itemId}>
                        {/* <img className="rounded shadow" src={item[2].image} height="200" /> */}
                        <div className="card" style={{ width: '100%' }}>
                            <div className="likenft">
                                <span title="Love it" className="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></span>
                            </div>
                            <div className="image-card-slider">
                                <img src={findimage(item.itemId)} className="card-img-top" alt="marketplace" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ID: {item.itemId}</h5>
                                <p className="card-text">Price: {item.price} AVAX</p>
                            </div>
                        </div>
                        {/* <img className="rounded shadow" src={findimage(item.itemId)} alt="reload your page" height="200" />
                        <p>ID: {item.itemId}</p>
                        <p>Price: {item.price} AVAX</p> */}
                    </div>
                ))) : (
                <p className="text-center"> No NFTs for Sale </p>
            )}
        </>
    )
}
