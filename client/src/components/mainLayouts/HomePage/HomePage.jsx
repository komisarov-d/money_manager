import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateFilter } from '../../../redux/aside/dateFilter'
import { fetchCurrencies, hideLoader } from '../../../redux/reducers/commonReducer'
import { Bill } from './hpPartials/Bill'
import { CurrencyTable } from './hpPartials/CurrencyTable'


export const HomePage = () => {
   document.title = 'Home page'

   const [currency, setCurrency] = useState({})
   const bill = useSelector(state => state.auth.bill)
   const dispatch = useDispatch()
   const currencies = ['UAH', 'EUR', 'USD']

   const updateCurrency = useCallback(async () => {
      const fetchedCurrency = await fetchCurrencies()
      setCurrency(fetchedCurrency)
      dispatch(hideLoader())
   }, [dispatch])

   useEffect(() => {
      updateCurrency()
   }, [updateCurrency])

   const getCurrency = (curr) => {
      if (currency.rates !== undefined) {
         return Math.floor(bill * currency.rates[curr])
      }
   }

   const currEl = []
   const ratesEl = []
   if (currency.rates) {
      for (const curr of currencies) {
         currEl.push(
            <p key={curr} className="currency-line">
               <span>{`${getCurrency(curr)} ${curr}`}</span>
            </p>
         )
      }
      for (const curr of currencies) {
         ratesEl.push(
            <tr key={curr}>
               <td>{curr}</td>
               <td>{currency.rates[curr].toFixed(4)}</td>
               <td>{dateFilter(currency.date, 'date')}</td>
            </tr>
         )
      }
   }

   return (
      <div>
         <div className="page-title">
            <h3>Счет</h3>
            <button onClick={updateCurrency} className="btn waves-effect waves-light btn-small">
               <i className="material-icons">refresh</i>
            </button>
         </div>
         <div className="row">
            <Bill currEl={currEl} />
            <CurrencyTable ratesEl={ratesEl} />
         </div>
      </div>
   )

}





