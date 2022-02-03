type Value = string | number

/**
 * extract environment variable,
 * if undefined will throw an error except if default value is set 
 * @param identifier 
 * @param defaultValue 
 */
export function extractVariable(identifier: string, defaultValue?: string): string;
export function extractVariable(identifier: string, defaultValue?: number): number;
export function extractVariable(identifier: string, defaultValue?: Value): Value {
  const value = process.env[identifier]
  if (!value) {
    if (defaultValue === undefined) {
      throw new Error(`Environment variable ${identifier} does not exist`);
    }
    return defaultValue
  }
  return parseFloat(value) ? +value : value
}