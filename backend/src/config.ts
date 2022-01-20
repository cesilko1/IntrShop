import dotenv from 'dotenv';
dotenv.config();


type EnvType = 'produstion' | 'development' | 'testing';

interface Iconfig {
    mysql_hostname: string,
    mysql_username: string,
    mysql_password: string,
    env: EnvType,
    port: number
}

const Config: Iconfig = {
    mysql_hostname: process.env.MYSQL_HOSTNAME || '172.17.0.1',
    mysql_username: process.env.MYSQL_USERNAME || 'w',
    mysql_password: process.env.MYSQL_PASSWORD || 'p',
    env: process.env.NODE_ENV as EnvType || 'development',
    port: parseInt(process.env.VIRTUAL_PORT as string) || 3001
}

export default Config;