import {PrismaService} from "@/prisma.service";
import {Injectable, InternalServerErrorException} from "@nestjs/common";
import {CreateProjectDto} from "./dto/create-project.dto";
import {UpdateProjectDto} from "./dto/update-project.dto";
import {Project} from "@prisma/client";

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}

    create(createProjectDto: CreateProjectDto): Promise<Project> {
        return this.prisma.project.create({
            data: createProjectDto
        });
    }

    findAll() {
        return this.prisma.project.findMany();
    }

    findAllActive() {
        return this.prisma.project.findMany({where: {status: "Active"}});
    }
    findAllNotActive() {
        return this.prisma.project.findMany({where: {status: "NotActive"}});
    }

    findOne(id: bigint) {
        return this.prisma.project.findUnique({where: {id}});
    }

    update(id: bigint, updateProjectDto: UpdateProjectDto) {
        return this.prisma.project.update({where: {id}, data: updateProjectDto});
    }

    remove(id: bigint) {
        return this.prisma.project.delete({where: {id}});
    }
}
