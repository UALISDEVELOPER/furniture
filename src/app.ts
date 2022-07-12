import {join} from "path"
import cluster from 'cluster';

import dotenv from "dotenv";
import express  from "express";
const app = express();

dotenv.config({path : join(__dirname, "./env", ".env")})
// ====== 
import isPrimary from './cluster/isPrimary';
import appWrapper from './tools/appWrapper';
import appStarter from './tools/appStarter';


if (cluster.isPrimary) {
    isPrimary();
} else {
    appStarter(app)
    appWrapper(app)
}
