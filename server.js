const express = require('express')
const app = express();
var xfdf = require('xfdf')

var builder = new xfdf({ pdf: './Resignation.pdf' });

builder.fromJSON({fields: {
      age: 32,
      tall: true,
      name: 'John Doe'
    }
  });

console.log(builder.generate());
app.listen({port: 5000}, ()=>{
  console.log('server started on port 5000')
})
