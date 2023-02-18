import express from 'express';

const discoRoutes = express.Router();

import  {getAll , getByType}  from  '../db/disco.js';

discoRoutes.get('/', async (req, res) =>  {  getAll(req, res)});
discoRoutes.get('/:tipo', async (req, res) =>  {  getByType(req, res  )});
/*fichaRoutes.get('/:id', async (req, res) =>  {getId(req, res)});
fichaRoutes.post('/', async (req, res) =>  {create(req, res)} );
fichaRoutes.put('/', async (req, res) =>  {update(req, res)} );
fichaRoutes.delete('/:id', async (req, res) =>  {deleteById(req, res)});*/

export default discoRoutes;