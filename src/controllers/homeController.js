module.exports = async (req,res) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(404).json({
            ok:false,
            message: error + ''
        })
    }
}