export default function InputFields(props){
    return(
        <div>
            <input type={props.text} className="form-control" name={props.name} placeholder={props.placeholder} />
        </div>
    )
}