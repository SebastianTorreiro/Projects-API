import { BaseEntity } from "../../config/base.entity";
import { IProject } from "../../interfaces/projects.interface";
import { UsersProjectsEntity } from "../../users/entities/usersProjects.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity implements IProject {
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => UsersProjectsEntity, (user_projects) => user_projects.projects)
    usersIncludes: UsersProjectsEntity[]
}
