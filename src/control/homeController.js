
    const getHomepage = (req, res) => {
        res.send("Hello world, have a good day")
    }
    const content = (req, res) => {
        res.render('sample.ejs')
    }

    const nihon = (req, res) => {
        res.send("コンピュターウィルス！！！")
    }
    module.exports = {
        getHomepage, content, nihon
    }