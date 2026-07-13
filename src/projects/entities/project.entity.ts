import { ApiProperty } from '@nestjs/swagger';
import { Project as ProjectModel, ProjectStatus } from '@/generated/prisma';

export class Project implements ProjectModel {
  constructor(partial: Partial<Project>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  declare id: bigint;

  @ApiProperty()
  declare name: string;

  @ApiProperty({ enum: ProjectStatus })
  declare status: ProjectStatus;
}
