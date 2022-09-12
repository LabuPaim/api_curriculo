import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class RedirectController {

    @Get()
    redirect(@Res() res){
        return res.redirect('/api');
    }
}
