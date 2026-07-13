import {ProjectResponse} from "@/response-wrapper";
import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateProjectDto} from "./dto/create-project.dto";
import {UpdateProjectDto} from "./dto/update-project.dto";
import {ProjectsService} from "./projects.service";
@ApiTags("Projects")
@Controller("projects")
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Post()
    @ApiOperation({summary: "Create a new project"})
    @ApiResponse({status: 200, type: ProjectResponse, description: "Project created successfully"})
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
