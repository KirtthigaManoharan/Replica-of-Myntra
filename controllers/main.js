const login= (req, res, db) => {
  console.log(req.body);
  try{
    db.select('*').from('register').where(mail= 'req.email');

    if(req){
      res.json({dataExists: true})
    } else {
      res.json({dataExists: false})
    }
  }catch(e){
    console.log(e);
  }
 
  }


const getTableData = (req, res, db) => {
    db.select('*').from('post')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
   
  

const getItem = (req, res, db) => {
  console.log(req.body)
  db.select('*').from('post').where({
    id: req.body.id,
  }).then(items => {
    if (items.length) {
      res.json(items[0])
    } else {
      res.json({ dataExists: false });
    }
  })
  .catch(err => res.status(400).json({dbError: 'db error'}));
}

    

    module.exports = {
        getTableData,
        getItem,
        login
    }
