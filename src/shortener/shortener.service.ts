import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class ShortenerService {
  private urls = new Map<number, string>();
  private counter = 1;

  async shortenUrl(url: string): Promise<number> {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$','i'
    );

    if (!urlPattern.test(url)) {
      throw new BadRequestException('Formato de URL inválido');
    }

    const id = this.counter++;
    this.urls.set(id, url);
    return id;
  }

  getUrl(id: number): string {
    const url = this.urls.get(id);
    if (!url) {
      throw new NotFoundException('URL não encontrada');
    }
    return url;
  }
}
