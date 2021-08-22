const connection = require('../infra/connection');

class Categorias {
  all(){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM categorias`;
      connection.query(sql, null, (error, results) => {
        if(error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  one(id){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM categorias WHERE id=${id}`;
      connection.query(sql, null, (error, results) => {
        if(error){
          reject(error);
        } else{
          if(!results[0]) reject({message: 'id não encontrado'});
          resolve(results[0]);
        }
      })
    });
  }

  post(categoria){
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO categorias SET ?`;
      connection.query(sql, categoria, (error, results) => {
        if(error){
          reject(error);
        }else{
          resolve(results);
        }
      });
    });
  }

  patch(params){
    return new Promise((resolve, reject) => {
      const {fields, id} = params;
      const sql = `UPDATE categorias set ? WHERE id=${id}`;
      connection.query(sql, fields, (error, results) => {
        if(error){
          reject(error);
        }else{
          resolve(results);
        }
      });
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM categorias WHERE id=${id}`;
      connection.query(sql, null, (error, results) => {
        if(error){
          reject(error);
        }else{
          resolve(results);
        }
      });
    });
  }

}

module.exports = new Categorias();
