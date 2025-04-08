import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform(array: any[], chunkSize: number): any[][] {
    if (!array || array.length === 0) return [];
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }
}
