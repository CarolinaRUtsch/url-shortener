var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
let ShortenerController = class ShortenerController {
    constructor(shortenerService) {
        this.shortenerService = shortenerService;
    }
    shortenUrl(url) {
        const id = this.shortenerService.shortenUrl(url);
        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        return { shortUrl: `${baseUrl}/shortener/${id}` };
    }
    redirect(id, res) {
        const url = this.shortenerService.getUrl(id);
        res.redirect(url);
    }
};
__decorate([
    Post(),
    __param(0, Body('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ShortenerController.prototype, "shortenUrl", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShortenerController.prototype, "redirect", null);
ShortenerController = __decorate([
    Controller('shortener'),
    __metadata("design:paramtypes", [ShortenerService])
], ShortenerController);
export { ShortenerController };
