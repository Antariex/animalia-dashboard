import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 20,
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios",
    valor: 100,
}

let user = {
    color:   "warning",
    titulo: "Total de categorías",
    valor: 6,
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;