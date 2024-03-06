import sequelize from "../../config/db.config";
import { RefreshToken } from "./refresh-token.model";
import { User } from "./user.model";
import { Role } from "./role.model";
import { UserRole } from "./user-role.model";
import { Document } from "./document.model";
import { DocumentUser } from "./document-user.model";
import Sequelize from "sequelize";


sequelize.addModels([
    User,
    RefreshToken,
    Role,
    UserRole,
    Document,
    DocumentUser,
]);


const db={
    sequelize,
    Sequelize,
    User,
    RefreshToken,
    Role,
    UserRole,
    Document,
    DocumentUser,
};

export default db;