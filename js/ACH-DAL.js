var userdb ={

    insertData: function (user) {
        db.transaction(function (tx) {
            var sql = `INSERT INTO Users (FirstName, LastName, Email, Phone, Username, Password, Profile) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            var options = [user.FirstName, user.LastName, user.Email, user.Phone, user.Username, user.Password, user.Profile];
            console.log("added: "+user.Username);
            function successCallback() {
                console.info("Success: User inserted successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    selectUser: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM Users WHERE Username=?`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    selectAll: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM Users`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    update:function (id, user) {
        db.transaction(function (tx) {
            var sql = `UPDATE Users SET FirstName=?, LastName=?, Email=?, Phone=?, Username=?, Password=? Profile? WHERE id=?`;
            var options = [user.FirstName, user.LastName, user.Email, user.Phone, user.Username,user.Password, user.Profile ,id];
            function successCallback() {
                console.info("Success: "+user.FirstName+" updated successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    delete:function (userId) {
        db.transaction(function (tx) {
            var sql = `DELETE FROM users WHERE id=?`;
            var options = [userId];

            function successCallback() {
                console.info("Success: User deleted successfully.");
            }

            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    }
}

var vehicledb ={

    insertData: function (vehicle) {
        db.transaction(function (tx) {
            var sql = `INSERT INTO Vehicles (VIN, User, ODO, WTire, Mod) VALUES (?, ?, ?, ?, ?)`;
            var options = [vehicle.VIN, vehicle.User, vehicle.ODO, vehicle.WTire, vehicle.Mod];
            console.log("added: "+ vehicle.VIN);
            function successCallback() {
                console.info("Success: Vehicle inserted successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    selectUserVehicle: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM Vehicles WHERE User=?`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    selectVINVehicle: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM Vehicles WHERE VIN=?`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    selectAll: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM Vehicles`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    updateODO:function (vehicle, vin) {
        db.transaction(function (tx) {
            var sql = `UPDATE Vehicles SET ODO=? WHERE VIN=?`;
            var options = [vehicle, vin];
            function successCallback() {
                console.info("Success: "+ vin +" updated successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },
    update:function (vehicle, vin) {
        db.transaction(function (tx) {
            var sql = `UPDATE Vehicles SET User=?, ODO=?, WTire=?, Mod=? WHERE VIN=?`;
            var options = [vehicle.User, vehicle.ODO, vehicle.WTire, vehicle.Mod, vin];
            function successCallback() {
                console.info("Success: "+vehicle.VIN+" updated successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    delete:function (vehicleVIN) {
        db.transaction(function (tx) {
            var sql = `DELETE FROM Vehicles WHERE VIN=?`;
            function successCallback() {
                console.info("Success: Vehicle deleted successfully.");
            }

            tx.executeSql(sql, vehicleVIN, successCallback, errorHandler);
        });
    }
}

var historydb ={

    insertData: function (history) {
        db.transaction(function (tx) {
            var sql = `INSERT INTO History (User, VIN, ODO, Date, Type, Description) VALUES (?, ?, ?, ?, ?, ?)`;
            var options = [history.User, history.VIN, history.ODO, history.Date, history.Type, history.Description];
            function successCallback() {
                console.info("Success: History inserted successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    selectHistory: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM History WHERE VIN=?`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    selectAll: function (options, callback) {
        db.transaction(function (tx) {
            var sql = `SELECT * FROM History`;
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },

    update:function (history, vin) {
        db.transaction(function (tx) {
            var sql = `UPDATE History SET User=?, VIN=?, ODO=?, Type=?, Description=? WHERE VIN=?`;
            var options = [history.User, history.VIN, history.ODO, history.Type, history.Description, vin];
            function successCallback() {
                console.info("Success: "+history.VIN+" updated successfully.");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
        });
    },

    delete:function (vehicleVIN) {
        db.transaction(function (tx) {
            var sql = `DELETE FROM History WHERE VIN=?`;
            function successCallback() {
                console.info("Success: History deleted successfully.");
            }

            tx.executeSql(sql, vehicleVIN, successCallback, errorHandler);
        });
    }
}