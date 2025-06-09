import UserModel from "./User";

class AdminModel extends UserModel{
    constructor({id=null,name="",password="",email="",isAdmin=false}={}){
        super({id:id,name:name,password:password,email:email,isAdmin:true});
    }
}
export default AdminModel;