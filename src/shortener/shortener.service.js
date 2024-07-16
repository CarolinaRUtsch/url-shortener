var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { nanoid } from 'nanoid';
let ShortenerService = class ShortenerService {
    constructor() {
        this.urls = new Map();
    }
    shortenUrl(url) {
        const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // nome do domínio
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // ou endereço IP (v4)
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // porta e caminho
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // string de consulta
            '(\\#[-a-z\\d_]*)?$', 'i'); // localizador de fragmentos
        if (!urlPattern.test(url)) {
            throw new BadRequestException('Formato de URL inválido');
        }
        const id = nanoid(6);
        this.urls.set(id, url);
        return id;
    }
    getUrl(id) {
        const url = this.urls.get(id);
        if (!url) {
            throw new NotFoundException('URL não encontrada');
        }
        return url;
    }
};
ShortenerService = __decorate([
    Injectable()
], ShortenerService);
export { ShortenerService };
