let handleHelloWorld = async (req, res) => {
    return res.render("inicial.ejs",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld
};