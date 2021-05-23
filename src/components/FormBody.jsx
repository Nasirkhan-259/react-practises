import Fields from './InputComponent';
export default function FormBody(){
    return(
        <div>
            <form>
            <div className="row">
                <div className="form-group col-md-4">
                <label>Username</label>
                    <Fields type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-group col-md-4">
                <label>Password</label>
                    <Fields type="password" name="password" placeholder="Password" />
                </div>
                <div className="form-group col-md-2">
                    <label>&nbsp;</label>
                    <input type='submit' className="form-control btn btn-info" name="submit" value="Login" />
                </div>
                
            </div>
                
            </form>
        </div>
    )
}