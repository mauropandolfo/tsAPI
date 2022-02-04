import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

export default async function connect(){
    const DB_URL = config.get<string>('DB_URL');
    try{
        await mongoose.connect(DB_URL).then(() => {logger.info('connected to db')});
    }
    catch(err){
        logger.error("error");
        process.exit(1);
    }
}
