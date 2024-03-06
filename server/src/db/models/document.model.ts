import { Model } from "sequelize";
import { BelongsTo, Column, DataType, Default, DefaultScope, ForeignKey, HasMany, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { DocumentUser } from "./document-user.model";


@DefaultScope(()=>({
    include:[
        {
            model:DocumentUser,
            include:[
                {
                    model:User,
                    attributes:["email"],
                },
            ],
        },
    ],
}))

@Table({tableName:"document",underscored:true})
class Document extends Model{
    @Column(DataType.STRING)
    title!:string;

    @Column(DataType.JSONB)
    content!:string;

    @ForeignKey(()=>User)
    userID!:number;

    @BelongsTo(()=>User)
    user!:User;

    @HasMany(()=>DocumentUser,{
        onDelete:"CASCADE",
    })
    users!:Array<DocumentUser>;

    @Default(false)
    @Column(DataType.BOOLEAN)
    isPublic!:boolean;
}

export {Document};