db.facturas.help()

show dbs

show collections

db.facturas.insert({"_id": ObjectId("55e4a6fabfc68c676a041063"),"cliente":{"apellido":"Malinez","cuit":2.740488484e+09,"nombre":"Marina","region":"CENTRO"},"condPago":"CONTADO","fechaEmision": ISODate("2014-02-20T00:00:00.000Z"),"fechaVencimiento": ISODate("2014-02-20T00:00:00.000Z"),"item":[{"cantidad":11.0,"precio":18.0,"producto":" CORREA 12mm"},{"cantidad":1.0,"precio":490.0,"producto":"TALADRO 12mm"}],"nroFactura":1000.0})

db.facturas.insert({"_id": ObjectId("55e4a6fbbfc68c676a041064"),"cliente":{"apellido":"Zavasi","cuit":2.038373771e+09,"nombre":"Martin","region":"CABA"},"condPago":"30 Ds FF","fechaEmision": ISODate("2014-02-20T00:00:00.000Z"),"fechaVencimiento": ISODate("2014-03-22T00:00:00.000Z"),"item":[{"cantidad":2.0,"precio":134.0,"producto":"CORREA 10mm"}],"nroFactura":1001.0})

db.facturas.insert({"_id": ObjectId("55e4a6fbbfc68c676a041065"),"cliente":{"apellido":"Zavasi","cuit":2.038373771e+09,"nombre":"Martin","region":"CABA"},"condPago":"CONTADO","fechaEmision": ISODate("2014-02-20T00:00:00.000Z"),"fechaVencimiento": ISODate("2014-02-20T00:00:00.000Z"),"item":[{"cantidad":6.0,"precio":60.0,"producto":"TUERCA 2mm"},{"cantidad":12.0,"precio":134.0,"producto":"CORREA 10mm"}],"nroFactura":1002.0})

db.facturas.find()

db.facturas.countDocuments()

db.facturas.dataSize()

db.facturas.find({"cliente.apellido":"Malinez"})

db.facturas.find().limit(2)

db.facturas.find().skip(2)

db.facturas.find().pretty()

db.facturas.find().limit(2).skip(2).pretty()

db.facturas.find({"cliente.apellido":"Malinez"}, {"cliente.cuit":1, "cliente.region":1})

db.facturas.find({"cliente.apellido":"Zavasi"}).pretty()

db.facturas.find({"cliente.apellido":"Zavasi", "nroFactura":1001.0}).pretty()

db.facturas.find().sort({nroFactura:1})

db.facturas.find().sort({nroFactura:-1})

db.facturas.find( { nroFactura : {$gt:1465} } ).countDocuments()





