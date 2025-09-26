class User{
    constructor(userId, userName, password, birth = "null", email, phone="null", address="null"){
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.birth = birth;
        this.phone = phone;
        this.address = address;
        User.listUser.push(this);
    }

    static listUser = [];

}

module.exports = User;