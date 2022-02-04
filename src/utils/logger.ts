import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    prettyPrint:true,
    base:{
        pid: false,
    },
    timestamp: () => `, time :${dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')}`
});

export default log;
