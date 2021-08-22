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

  one(id){
    const sql = `SELECT * FROM video WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, null, (error, results, field) => {
        if(error) {
          reject(error);
        } else {
          if(results.length == 0) resolve('Video não encontrado');
          resolve(results[0]);
        }
      })
    });
  }

  post(video){
    const sql = `INSERT INTO video SET ?`;
    return new Promise((resolve, reject) => {
      // if(video.titulo == undefined || video.descricao == undefined || video.url == undefined){
      //   reject('Todos os campos devem ser preenchidos');
      // }
      connection.query(sql, video, (error, results, field) => {
        if(error){
          reject(error)
        } else {
          resolve(results);
        }
      });
    });
  }

  patch(id, field){
    const sql = `UPDATE video SET ? WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, field, (error, results, fields) => {
        if(error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  delete(id){
    const sql = `DELETE FROM video WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, null, (error, results, field) => {
        if(error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  search(term){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM video WHERE titulo LIKE "%${term}%"`;
      connection.query(sql, null, (error, results) => {
        if(error){
          reject(error);
        } else{
          resolve(results);
        }
      })
    })
  }
}

module.exports = new Video();
