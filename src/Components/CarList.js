function CarName(props){
    return <div>{props.carname}</div>
}

function CarPrice(props){
    return <div>{props.price}</div>
}



function CarList (props){
    
        return <li>
            <CarName carname={props.carname}/>
            <CarPrice price={props.price}/>
        </li>
    
 

}
export default CarList