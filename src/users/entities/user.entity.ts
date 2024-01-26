import { BaseEntity } from "src/config/base.entity";
import { ROLES } from "src/constants/roles";
import { IUser } from "src/interfaces/user.interface";
import { Column } from "typeorm";

export class UsersEntity extends BaseEntity implements IUser {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: ROLES })
    role: string;
}