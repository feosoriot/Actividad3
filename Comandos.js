cluster = new ShardingTest ({shards : 3, chunksize:1}),

//Abrir nueva consola cmbiar nombre a balanceador
//nos conectamos a la base de datos
db=(new Mongo ("localhost:20000")).getDB("TorneoDeportivo"),

//Insertamos  200.000 documentos en la coleccion Deportistas
  for(i=0;i<200000;i++){
	db.Deportistas.insert({
  _id: i+1,
  Nombre: "Natalia Villa Lobos" +i,
  Identificación: "1.123.456"+i,
  Edad: "25"+i,
  Genereo: "Femenino",
  Equipo: "Region"+i,
  mo "30"+i });
},

//Revisamos si se agregaron todos los docuemntos
db.Deportistas.count(),

//Comprobacion de la distribucion en los Nodos
//Nos conectamos a cada uno de los shard 
shard1 = new Mongo ("localhost:20000"),
shard1DB= shard1.getDB("TorneoDeportivo"),
shard1DB.Deportistas.count(), 
shard2 = new Mongo ("localhost:20001"),
shard2DB= shard2.getDB("TorneoDeportivo"),
shard2DB.Deportistas.count(), 
shard3 = new Mongo ("localhost:20002"),
shard3DB= shard3.getDB("TorneoDeportivo"),
shard3DB.Deportistas.count(), 

//Activacion de las paticionesde datos
//los documentos estan agregados en el shard2
shard2 = new Mongo ("localhost:20006"),
sh.status(),

//Activar sharding
sh.enableSharding("TorneoDeporttivo")

//Creacion de indice
db.Deportistas.createIndex({_id]),

//Determinar la coleccion de acuerdo "Deportistas"
sh.shardcollection("TorneoDeportivo.Deportistas",{_id:1}),

//Activacion de balanceador de carga
sh.getBalancerState(),
sh.setBalancerState(true),

//Conseguir que el balancedor comience a funcionar
sh.isBalancerState(),

//Verificar distribucion de datos en cada nodo
shard1 = new Mongo("localhost:20000")
shard1DB= shard2.getDB("TorneoDeportivo"),
shart1DB.Deportistas.count(),
shard2 = new Mongo("localhost:20001")
shard2DB= shard2.getDB("TorneoDeportivo"),
shart2DB.Deportistas.count(),
shard3 = new Mongo("localhost:20002")
shard3DB= shard2.getDB("TorneoDeportivo"),
shart3DB.Deportistas.count(),

//Detener shadingTest
cluster.stop(),

//Conocer el listado de los shards activos
db.adminCommand({listShards:1}),
                            
