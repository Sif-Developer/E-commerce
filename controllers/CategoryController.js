const db = require("../config/database");

const CategoryController = {
    createCategory(req, res) {
        let sql = `INSERT INTO categories (name) values
    ('${req.body.name}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Category added...");
        });
    },
}


module.exports = CategoryController