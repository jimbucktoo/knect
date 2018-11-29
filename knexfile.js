module.exports = {

    development: {
        client: 'pg',
        connection: 'postgresql://localhost/knect'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

}
