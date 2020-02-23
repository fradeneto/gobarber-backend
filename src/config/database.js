module.exports = {
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false
    },
    timezone: "-03:00",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  },
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false
    },
    timezone: "-03:00",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  },
  test: {
    storage: "./__tests__/database.sqlite",
    dialect: 'sqlite',
    
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}