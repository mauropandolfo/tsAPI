import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes'

const PORT = config.get<number>('PORT');


const app = express();

app.listen(PORT, async ()=>{
    logger.info(`running on ${PORT}`);
    await connect();
    routes(app);
})