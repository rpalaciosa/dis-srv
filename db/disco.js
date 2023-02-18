import mysql  from 'mysql2/promise';
import {config} from '../config.js';


export async function getAll(req, res) {  
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute("select * from disco order by year");
  
    res.send(results  );
  }

  export async function getByType(req, res  ) {  
    const l_tipo = req.params.tipo;
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute('select * from disco where tipo = ? order by year' , [ l_tipo ]);
    
    res.send(results  );
    connection.end();
  }