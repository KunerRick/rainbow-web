import PouchDB from 'pouchdb'
import pouchdb_find from 'pouchdb-find'

PouchDB.plugin(pouchdb_find) 

const DB = new PouchDB('rainbow');
DB.createIndex({
    index:{
        fields:[
            'sender',
            'receiver',
            'date'
        ]
    }
},function(err,result){
    if(err){throw err}
    console.log("database index init success");
    console.log(result);
});
DB.install = function(Vue){
       
    Vue.prototype.$db = {
        add : o => {
            o._id = o.id;
            DB.put(o, function(err) {
                if (err) { console.log(err)}
                // handle response
            });
        },
        close :()=>{
            DB.close();
        },
        read: (sender,receiver,CALLBACK) => {
            DB.find({
                selector: {$and:[{'sender':sender},{'receiver':receiver}]},
            },function(err,result){
                if(err){throw err}
                CALLBACK(result.docs)
            })
        }
    }


}

export default DB