import { createClient} from 'gremlin'

class DB {

}
DB.prototype.createQuery = function(query){
    return new Promise((resolve, reject) => {
        this.driver.execute(query, (err, results) => {
            if (err) {
              return reject(err)
            }
          
            resolve([results]);
          });
    })
}
DB.prototype.createConnection = function({host, user, password}){
    this.driver = createClient(
        443,
        host,
        {
            "session": false,
            "ssl": true,
            "user": user,
            "password": password
        })
}

export default DB
