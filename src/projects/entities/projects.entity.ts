import { BaseEntity } from "src/config/base.entity";
import { IProject } from "src/interfaces/projects.interface";
import { Column } from "typeorm";

export class ProjectEntity extends BaseEntity implements IProject {
    @Column()
    name: string;

    @Column()
    description: string;
}
