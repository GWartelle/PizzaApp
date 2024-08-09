"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_doe", role: "admin" },
    { id: nextUserId++, username: "guest_user", role: "guest" },
    { id: nextUserId++, username: "alice_jones", role: "member" },
];
function fetchUserDetails(identifier) {
    var user;
    if (typeof identifier === "string") {
        user = users.find(function (user) { return user.username.toLowerCase() === identifier.toLowerCase(); });
        if (!user) {
            throw new Error("User with username ".concat(identifier, " not found"));
        }
    }
    else if (typeof identifier === "number") {
        user = users.find(function (user) { return user.id === identifier; });
        if (!user) {
            throw new Error("User with id ".concat(identifier, " not found"));
        }
    }
    else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number");
    }
    return user;
}
function updateUser(id, updates) {
    var user = fetchUserDetails(id);
    Object.assign(user, updates);
}
function addNewUser(newUser) {
    var user = __assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
}
console.log(users);
updateUser(1, { username: "new_john_doe" });
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
