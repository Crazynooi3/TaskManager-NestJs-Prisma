import "dotenv/config";
import {HttpAdapterHost, NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {PrismaExceptionFilter} from "./prisma-exception.filter";
import {TransformInterceptor} from "./transform.interceptor";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const {httpAdapter} = app.get(HttpAdapterHost);
    app.useGlobalPipes(new ValidationPipe({whitelist: true}));
    app.useGlobalFilters(new PrismaExceptionFilter(httpAdapter));
    app.useGlobalInterceptors(new TransformInterceptor());

    const config = new DocumentBuilder().setTitle("Task Manager API").setDescription("API documentation for the Task Manager").setVersion("1.0").build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
