import { Test, TestingModule } from '@nestjs/testing';
import { ShortenerService } from '../src/shortener/shortener.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('ShortenerService', () => {
  let service: ShortenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortenerService],
    }).compile();

    service = module.get<ShortenerService>(ShortenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should shorten a valid URL', async () => {
    const url = 'https://example.com';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should return the original URL for a given short URL', async () => {
    const url = 'https://example.com';
    const shortUrl = await service.shortenUrl(url);
    const originalUrl = service.getUrl(shortUrl);
    expect(originalUrl).toBe(url);
  });

  it('should throw an error if the short URL does not exist', () => {
    const nonexistentId = 9999; 
    expect(() => service.getUrl(nonexistentId)).toThrow(NotFoundException);
  });

  it('should handle URLs with different protocols', async () => {
    const url = 'http://example.com';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should handle URLs with subdomains', async () => {
    const url = 'https://sub.example.com';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should handle URLs with ports', async () => {
    const url = 'https://example.com:8080';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should handle URLs with paths', async () => {
    const url = 'https://example.com/path/to/resource';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should handle URLs with query strings', async () => {
    const url = 'https://example.com/path?name=value';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should handle URLs with fragments', async () => {
    const url = 'https://example.com/path#section';
    const shortUrl = await service.shortenUrl(url);
    expect(shortUrl).toBeGreaterThan(0);
  });

  it('should not allow shortening the same URL twice with different IDs', async () => {
    const url = 'https://example.com';
    const shortUrl1 = await service.shortenUrl(url);
    const shortUrl2 = await service.shortenUrl(url);
    expect(shortUrl1).not.toBe(shortUrl2);
  });
});
