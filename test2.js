"use strict";
var users = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" },
];
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found"));
    }
    return user;
}
