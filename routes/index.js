const routes= require ('express').Router();
const courscontroller= require('../controller/cours')

routes.get('/courses',courscontroller.find);
routes.get('/courses/:coursename',courscontroller.index);
routes.post('/user/create',courscontroller.create);
routes.put('/user/update/:id',courscontroller.update);
routes.delete('/user/delete/:id',courscontroller.delete)