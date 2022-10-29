const db = require("../config/database");
// const categories = [{}] 

const CategoryController = {
        createCategory(req, res) {
        let sql = `INSERT INTO categories (name) values
    ('${req.body.name}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Category added...");
        });
    },

    showCategories(req, res) {
        let sql = `SELECT * FROM categories`; //mostrar productos
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    
    // selectCategoryByName(req, res) {
    //     res.send(categories.filter(category => category.name == req.params.name))
    // },

    selectCategoryById(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    },
    
}


module.exports = CategoryController