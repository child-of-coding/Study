const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            comment:{
                type: Sequelize.STRING(100),
                allowNull : false,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW,
            },
        },{
            Sequelize,
            tableName : 'Comment',
            modelName : 'comments',
            paranoid : false,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
        });
    }
    static associate(db){}
};