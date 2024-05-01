export class DefaultApiFetchResult<T> {
  entities: T[];
  totalEntitiesCount: number;

  constructor(entities: T[], totalEntitiesCount: number) {
    this.entities = entities;
    this.totalEntitiesCount = totalEntitiesCount;
  }
}
