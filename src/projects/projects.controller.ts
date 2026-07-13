import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus} from "@nestjs/common";
import {ProjectsService} from "./projects.service";
import {CreateProjectDto} from "./dto/create-project.dto";
import {UpdateProjectDto} from "./dto/update-project.dto";

@Controller("projects")
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Post()
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.create(createProjectDto);
    }

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Get("active")
    findAllActive() {
        return this.projectsService.findAllActive();
    }

    @Get(":notActive")
    findAllNotActive() {
        return this.projectsService.findAllNotActive();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.projectsService.findOne(BigInt(id));
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.update(BigInt(id), updateProjectDto);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id: string) {
        return this.projectsService.remove(BigInt(id));
    }
}
