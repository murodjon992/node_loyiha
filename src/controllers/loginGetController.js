module.exports = async (req,res) => {
    try {
        res.render('login')
    } catch (error) {
        res.status(404).json({
            ok:false,
            message: error + ''
        })
    }
}