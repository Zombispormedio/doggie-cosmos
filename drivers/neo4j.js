import neo4j from 'neo4j-driver'
import util from 'util'
class DB {}
DB.prototype.createQuery = function (query) {
  const session = this.driver.session()
  return new Promise((resolve, reject) => {
    const results = []
    session.run(query).subscribe({
      onNext: function (record) {
        results.push(record)
      },
      onCompleted: function () {
        resolve(results)
        session.close();
      },
      onError: function (error) {
        reject(error)
      }
    })
  })
}
DB.prototype.createConnection = function ({host, user, password}) {
  this.driver = neo4j.driver(host, neo4j.auth.basic(user, password))
}

export default DB