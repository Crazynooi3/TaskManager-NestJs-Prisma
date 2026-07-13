import "dotenv/config";
import {HttpAdapterHost, NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {PrismaExceptionFilter} from "./prisma-exception.filter";
import {TransformInterceptor} from "./transform.interceptor";

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const {httpAdapter} = app.get(HttpAdapterHost);
    app.useGlobalPipes(new ValidationPipe({whitelist: true}));
    app.useGlobalFilters(new PrismaExceptionFilter(httpAdapter));
    app.useGlobalInterceptors(new TransformInterceptor());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
