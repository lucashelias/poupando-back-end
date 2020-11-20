module.exports = {
    HOST: "localhost",
    USER: "lucas",
    PASSWORD: "lucas",
    DB: "poupando",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };