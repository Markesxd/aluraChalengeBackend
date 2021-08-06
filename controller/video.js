const connection = require('../infra/connection');

class Video {
  all(){
    const sql = `SELECT * FROM video`;
    return new Promise((resolve, reject) => {
      connection.query(sql, null, (error, results, field) => {
        if(error){
          reject(error);
        } else {
          if(results.length == 0) resolve('Vasio');
          resolve(results);
        }
      });
    });
  }
}

module.exports = new Video();
