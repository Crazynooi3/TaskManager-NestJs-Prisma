import {ProjectListResponse, ProjectResponse} from "@/projects/dto/response-wrapper";
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
    @ApiResponse({status: 201, type: ProjectResponse, description: "Project created successfully"})
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.create(createProjectDto);
    }

    @Get()
    @ApiOperation({summary: "Get All Projects"})
    @ApiResponse({status: 200, type: ProjectResponse})
    findAll() {
        return this.projectsService.findAll();
    }

    @Get("active")
    @ApiOperation({summary: "Get All Active Projects"})
    @ApiResponse({status: 200, type: ProjectListResponse})
    findAllActive() {
        return this.projectsService.findAllActive();
    }

    @Get(":notActive")
    @ApiOperation({summary: "Get All Not Active Projects"})
    @ApiResponse({status: 200, type: ProjectListResponse})
    findAllNotActive() {
        return this.projectsService.findAllNotActive();
    }

    @Get(":id")
    @ApiOperation({summary: "Get Project with id"})
    @ApiResponse({status: 200, type: ProjectResponse})
    findOne(@Param("id") id: string) {
        return this.projectsService.findOne(BigInt(id));
    }

    @Patch(":id")
    @ApiOperation({summary: "Update project field + Name and Status"})
    @ApiResponse({status: 200, type: ProjectResponse})
    update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.update(BigInt(id), updateProjectDto);
    }

    @Delete(":id")
    @ApiOperation({summary: "Delete project"})
    @ApiResponse({status: 200})
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id: string) {
        return this.projectsService.remove(BigInt(id));
    }
}
