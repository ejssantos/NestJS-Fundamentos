"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const process_1 = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'https://www.santacasademaceio.com.br',
            'http://meudominio.com',
        ],
        methods: ['GET', 'HEAD', 'OPTIONS'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process_1.env.APP_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map