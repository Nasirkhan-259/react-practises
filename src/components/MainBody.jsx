import Avatar from './Avatar';
import Puppies from '../puppies_data';
function Card(props){
    return(
        <div className="card_holder">
            <h3>{props.name}</h3>
            <Avatar image={props.image}/>
            <p>Price : {props.price}</p>
            <p>Telephone : {props.location}</p>
        </div>
    )
}
Puppies.map(x=>{
    console.log(x);
    return x;
    
})
function createCard(puppy){
    return <Card 
    key={puppy.id}
    name={puppy.name} 
    image={puppy.imageURL} 
    price={puppy.price} 
    location={puppy.location} 

    />
}
export default function MainBody(){
    return(
        <div className="wrapper">
            {Puppies.map(puppy=>{
                return <Card 
                key={puppy.id}
                name={puppy.name} 
                image={puppy.imageURL} 
                price={puppy.price} 
                location={puppy.location} 

                />
            })}
        </div>
    )
}