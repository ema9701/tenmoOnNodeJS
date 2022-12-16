const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Server is up!" });
});

require("./routes/auth.routes")(app);
require('./routes/user.routes')(app);
require('./routes/account.routes')(app);
require('./routes/transfer.routes')(app);

const db = require("./models");
const models = require('./models');

const dropDb = true;
db.sequelize.sync({ force: dropDb }).then(() => {
    if (dropDb) {
        createSeedData();
    }
    console.log("Drop and re-sync db");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const createSeedData = async () => {
    var bcrypt = require('bcryptjs');
    try {
        const result = db.sequelize.transaction(async (t) => {
            const users = await models.user.bulkCreate([
                {
                    username: 'user1',
                    password: bcrypt.hashSync('password1'),
                    account: [{}],
                },
                {
                    username: 'user2',
                    password: bcrypt.hashSync('password2'),
                    account: [{}],
                },
                {
                    username: 'user3',
                    password: bcrypt.hashSync('password3'),
                    account: [{}],
                }
            ], {
                include: [models.account]
            }, { transaction: t });
        });
    } catch (err) {
        console.log(err);
    }
}