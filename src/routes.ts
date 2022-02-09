import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/userControler';
import validateResourse from './middleware/validateResourses'
import { createUserSchema } from './schema/userSchema';


export default function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response)=> {
            res.sendStatus(200)
    })
    app.post('/api/users',validateResourse(createUserSchema), createUserHandler);
}
