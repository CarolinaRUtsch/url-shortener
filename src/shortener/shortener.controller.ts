import { Controller, Post, Get, Param, Res, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { Response } from 'express';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async shortenUrl(@Body('url') url: string): Promise<string> {
    if (!url) {
      throw new BadRequestException('URL is required');
    }
    const id = await this.shortenerService.shortenUrl(url);
    const shortUrl = `${id}`;
    return shortUrl;
  }

  @Get(':id')
  async redirect(@Param('id') id: string, @Res() res: Response) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('ID inválido');
    }

    try {
      const url = this.shortenerService.getUrl(numericId);
      return res.redirect(url);
    } catch (e) {
      throw new NotFoundException('URL não encontrada');
    }
  }
}
