import axios, {AxiosResponse} from 'axios'
import React, {FC, useEffect, useState} from 'react'
import './styles.css'
import {useNavigate} from 'react-router-dom'
import {getAuth} from '../../../../app/modules/auth/core/AuthHelpers'
const auth = getAuth()
const API_URL = process.env.REACT_APP_API_URL
const GET_PRODUCT_URL = `${API_URL}/products/get_products`
const GET_EXCHANGETYPE_URL = `${API_URL}/admin/exchange_types`
const GET_EXCHANGESUBTYPE_URL = `${API_URL}/admin/exchange_sub_types`
const GET_AMC_URL = `${API_URL}/admin/amc`
const config = {
  headers : {
    'Content_type' : 'application/json',
    'x-access-token': auth ? auth.data?.token : ''
    
    
  }
} 

const BuyMF: FC = () => {
  let navigate = useNavigate()
   const [products, setProducts] = useState<any[]>([])
   const [exchangeType, setExchangeType] = useState<any[]>([])
   const [exchangeSubType, setExchangeSubType] = useState<any[]>([])
   const [amc, setAmc] = useState<any[]>([])
  React.useEffect(() => {
    axios.get(GET_PRODUCT_URL,config).then((response) => {
      setProducts(response.data.data);
    });
    axios.get(GET_EXCHANGETYPE_URL,config).then((response) => {
      setExchangeType(response.data.data);
    });
    axios.get(GET_EXCHANGESUBTYPE_URL,config).then((response) => {
      setExchangeSubType(response.data.data);
    });
    axios.get(GET_AMC_URL,config).then((response) => {
      setAmc(response.data.data);
    });

  }, []);
  


  const MFdata = require('./MF Details.json')

  const goToDetial = (id:any) => {
    navigate('/create-fund-request/buy-mutual-fund/' + id)
  }
  return (
    <>
      <div className='container' id='filterContainer'>
        <div className='card'>
          <div className='form'>
            <div className='left-side'>
              <h5>Filters</h5>
              <hr />
              <div className='favourites-container'>
                <div className='favorites'>
                  <h4>Scheme Type</h4>
                </div>
                { exchangeType ? exchangeType.map((content: any) => (
                <label htmlFor='debt' className='favorites_child' key={content.id}>
                  <input type='checkbox' name='debt' id='debt' value={content.id} />
                  <h5>{content.exchangeType}</h5>
                  <span></span>
                </label>
                ))
              
                : ''}
                
              </div>
              <hr />
              <div className='favourites-container'>
                <label htmlFor='scheme-sub' className='favorites'>
                  <h4>Scheme Sub-Type</h4>
                </label>
               
                <select name='scheme-sub' id='scheme-sub' className='favourites_drop'>
                { exchangeSubType ? exchangeSubType.map((content: any) => (
                                   
                  <option value={content.id} key={content.id}>{content.exchangeSubType}</option>
                  ))
              
                  : ''}
                  
                </select>
                
              </div>
              <hr />
              <div className='favourites-container'>
                <label htmlFor='amc' className='favorites'>
                  <h4>AMC</h4>
                </label>
                <select name='amc' id='amc' className='favourites_drop'>
                { amc ? amc.map((content: any) => (
                                   
                                   <option value={content.id} key={content.id}>{content.exchangeAssetManagementCompany}</option>
                                   ))
                               
                                   : ''}
                </select>
              </div>
              <hr />
              {/*<div className='favourites-container'>
                <div className='favorites'>
                  <h4>Riskometer</h4>
                </div>
                <label htmlFor='low' className='favorites_child'>
                  <input type='checkbox' name='low' id='low' />
                  <h5>Low</h5>
                  <span></span>
                </label>
                <label htmlFor='low-mod' className='favorites_child'>
                  <input type='checkbox' name='low-mod' id='low-mod' />
                  <h5>Low To Moderate</h5>
                  <span></span>
                </label>
                <label htmlFor='mod' className='favorites_child'>
                  <input type='checkbox' name='mod' id='mod' />
                  <h5>Moderate</h5>
                  <span></span>
                </label>
                <label htmlFor='mod-high' className='favorites_child'>
                  <input type='checkbox' name='mod-high' id='mod-high' />
                  <h5>Moderately High</h5>
                  <span></span>
                </label>
                <label htmlFor='high' className='favorites_child'>
                  <input type='checkbox' name='high' id='high' />
                  <h5>High</h5>
                  <span></span>
                </label>
                <label htmlFor='vhigh' className='favorites_child'>
                  <input type='checkbox' name='vhigh' id='vhigh' />
                  <h5>Very High</h5>
                  <span></span>
                </label>
              </div> */}
            </div>
            <div className='right-side'>
              <div className='all_products'>
                <div className='all'>
                  <h3>All Funds</h3>
                  <span>{MFdata.length}</span>
                </div>
                <div className='boxes'>
                  <span>
                    <i className='fa fa-ellipsis-v'></i>
                  </span>
                  <span>Export</span>
                  <span>
                    All Products <i className='fa fa-angle-down'></i>
                  </span>
                </div>
              </div>
              <div className='search'>
                <input
                  className='form-control w-75 mr-sm-2'
                  type='search'
                  placeholder='Search AMC/Scheme'
                  aria-label='Search'
                />
                <div className='last'>
                  <div className='window'>
                    <span>
                      <i className='fa fa-th'></i>
                    </span>
                    <span>
                      <i className='fa fa-align-justify'></i>
                    </span>
                  </div>
                  <div>
                    <select>
                      <option>Sort By A to Z</option>
                      <option>Size</option>
                      <option>Latest</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>
              </div>
              <ul className='unlist'>
                { products ? products.map((content: any) => (
                  <li className='col-md-5' key={content.id}>
                    <div className='card w-100'>
                      <div className='card-horizontal'>
                        <img
                          className='card-img-top h-50 w-50 image-fluid'
                          src={content.image}
                          alt={content.schemeName}
                        />
                        <hr />
                        <div className='card-body bg-light text-center'>
                          <h4 className='card-title'>{content.schemeName}</h4>
                          <p className='card-text'>
                            {content.type} - {content.subtype}
                          </p>
                          <a
                           onClick={() =>goToDetial(content.id)}
                           // href={'/create-fund-request/buy-mutual-fund/' + content.id}
                            className='btn btn-primary btn-lg btn-block'
                          >
                            Transact
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              
              : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {BuyMF}
