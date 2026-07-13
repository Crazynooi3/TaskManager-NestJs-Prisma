import {ArgumentsHost, Catch, ConflictException, NotFoundException} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        switch (exception.code) {
            case "P2002": {
                const meta = exception.meta as any;
                const fields = meta?.driverAdapterError?.cause?.constraint?.fields ?? meta?.target;
                const fieldStr = Array.isArray(fields) ? fields.join(", ") : fields;
                const message = fieldStr ? `A record with this ${fieldStr} already exists` : "This value already exists";
                return super.catch(new ConflictException(message), host);
            }
            case "P2025": {
                const cause = exception.meta?.cause ?? "Record not found";
                return super.catch(new NotFoundException(cause), host);
            }
            default:
                return super.catch(exception, host);
        }
    }
}
