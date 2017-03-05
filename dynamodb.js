console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, callback) {
      let scanningParamerts = {
            TableName: 'mediaiot',
            Limit: 100
      };
      docClient.scan(scanningParameters, function(err, data){
          if(err){
                callback(err, null);
          }elase{
                callback(null, data);
        }
     });
      
  
