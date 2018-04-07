const bcrypt = require("bcrypt");
const createToken = require("../../modules/jwt/createToken");
const userModel = require("./model");

module.exports = function(app){
    
    app.get("/user", async (req, res) => {
        const login = req.body;
        try {
            const user = await userModel.findOne({id: login.id});
            const isvalid = await bcrypt.compare(login.password, user.password);
            if (!isvalid) {
                res.status(401).send({
                    message: "Login error"
                });
            }
            
            return createToken(user);
        } catch (error) {
            res.status(500).send(error);
        }
    });
}