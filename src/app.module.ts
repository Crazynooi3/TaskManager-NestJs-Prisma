import {Module} from "@nestjs/common";
import {ProjectsModule} from "./projects/projects.module";
import {PrismaModule} from "./prisma.module";
import { MemberModule } from './member/member.module';

@Module({
    imports: [ProjectsModule, PrismaModule, MemberModule]
})
export class AppModule {}
