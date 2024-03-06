import { Sequelize } from "sequelize";
import env from "./env.config";

const sequelize=
            env.NODE_ENV==="test" || env.NODE_ENV==="development"
            ? new Sequelize("gd","postgres","",{
                host:"localhost",
                dialect:"postgres",
                logging:false,
            })
            :new Sequelize(env.DATABASE_URL!,{
                dialect:"postgres",
                dialectOptions:{
                    ssl:{
                        require:true,
                        rejectUnauthorized:false,
                    },
                },
                logging:false,
            });
export default sequelize;
                           
