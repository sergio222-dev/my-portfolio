export default interface Molecule<T extends string = string> {
  classes?: Partial<Record<T, string>>;
}
