import { BaseEntity } from "src/config/base.entity";
import { ACCESS_LEVEL } from "src/constants/roles";
import { Column } from "typeorm";

export class UsersProjectsEntity extends BaseEntity {
    @Column({
        type: 'enum',
        enum: ACCESS_LEVEL
    })
    accessLevel: ACCESS_LEVEL


}