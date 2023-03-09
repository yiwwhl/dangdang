declare interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[];
  values<T>(o: T): T[keyof T][];
}
