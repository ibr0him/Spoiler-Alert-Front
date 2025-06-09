class UserModel{
    constructor({id=null,name="",password="",email="",isAdmin=false}={}){
        this.id=`${id}U`;
        this.name=name;
        this.password=password;
        this.email=email;
        this.isAdmin=isAdmin;
    }
}
export default UserModel;
