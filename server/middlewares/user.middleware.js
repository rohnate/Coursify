function userMiddleware(req, resp, next) {}
// i dont think that userMiddleware is seperatley required any more because all the input of admin and user are same and we can do input validation of user by using admin middleware. otherwise both the middlewares will become same
module.exports = userMiddleware;
