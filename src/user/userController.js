var userService = require('./userServices');

var createUserControllerFunc = async (req, res) =>  {
    try {
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Usuario creado" });
    } else {
        res.send({ "status": false, "message": "Error creando usuario" });
    }
    }
    catch(err) {
        console.log(err);
    }
}

var loginUserControllerFunc = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var findUserControllerFunc = async (req, res) => {
    var result = null;
    try{
        result = await userService.findUserDBService(req.body);
        res.send({"status": result.status, "message": result.msg})
    } catch (error){
        console.log(error);
        res.send({"status": false, "message": error.msg})
    }
}

var deleteUserControllerFunc = async (req, res) => {
    var result = null;
    try{
        result = await userService.deleteUserBDService(req.body);
        res.send({"status": result.status, "message": result.msg })
    } catch (error){
        console.log(error);
        res.send({"status": false, "message": error.msg})
    }
}

var updateUserControllerFunc = async (req, res) => {
    var up = null;
    try{
        console.log(req.body);
        up = await userService.updateUserDBService(req.body, res.params);
        console.log(up);
        if(up.status){
            res.send({"status": true, "message": up.msg});
        }else{
            res.send({"status": false, "message": up.msg});
        }
    }catch (error){
        console.log(error);
        res.send({"status": false, "message": up.msg});
    }
}

module.exports = { createUserControllerFunc, loginUserControllerFunc , findUserControllerFunc, deleteUserControllerFunc, updateUserControllerFunc };