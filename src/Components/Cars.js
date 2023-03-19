import CarList from "./CarList"

const cars =[
    {
        name :'BMW', 
        price : '100000',
    },
    {
        name : 'Honda City', 
        price : '20000',
    },
    {
        name : 'Ferrai', 
        price : '2000000',
    },
    {
        name : 'Buccati Veron', 
        price : '9500000',
    }
]

function Cars(){
    return<div>
        <h3>List of Cars</h3>
        <ul>
            {cars.map(carDetails=>{
            return <CarList carname={carDetails.name} price={carDetails.price}/>
            })}
        </ul>
    </div>
}

export default Cars 