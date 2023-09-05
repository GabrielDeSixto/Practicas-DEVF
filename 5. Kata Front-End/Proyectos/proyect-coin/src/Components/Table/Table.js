import React from 'react'

export default function Table({coin}) {
  return (
    <>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">Price Change 24h</th>
            <th scope="col">Porcentage</th>
          </tr>
        </thead>     
        <tbody>
          {
            coin.map((info,index)=>(
              <tr key={index}>
               <td>{info.market_cap_rank}</td>
               <td> <img src={info.image} style={{width: "40px"}}/> {info.name} <a style={{ width: "20px", color:'green'}}>{info.symbol}</a></td>
               <td>$ {info.current_price}</td>
               <td>$ {info.price_change_24h}</td>
               <td>{info.ath_change_percentage} %</td>
              </tr>
            ))
          }
        </tbody>
      </table>  
    </>
  )
}
