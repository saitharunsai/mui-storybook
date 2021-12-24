/// <reference types="vite/client" />

declare type NonNullProperties<Type> = {
  [Key in keyof Type]-?: Exclude<Type[Key], null | undefined>
}

declare type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never

declare type AnyFunction = (...args: any[]) => any

declare type IndexSignature<O extends object> = {
  [P in keyof O]: O[P]
}

declare type NoInfer<T> = [T][T extends any ? 0 : never]

declare type OmitFromUnion<T, K extends keyof T> = T extends any
  ? Omit<T, K>
  : never

declare type IsAny<T, True, False = never> = true | false extends (
  T extends never ? true : false
)
  ? True
  : False

declare type CastAny<T, CastTo> = IsAny<T, CastTo, T>

declare type Cast<T, CastTo> = NoInfer<T> extends never ? CastTo : CastTo

declare type TODO = any

declare type _ = any

/**
 Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
declare type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint
/**
 Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Class
 @category Basic
 */
declare type Class<T, Arguments extends unknown[] = any[]> = Constructor<
  T,
  Arguments
> & { prototype: T }
/**
 Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Ref
 @category Basic
 */
declare type Constructor<T, Arguments extends unknown[] = any[]> = new (
  ...arguments_: Arguments
) => T

/**
 Matches a JSON array.
 @category Basic
 */
declare type JsonArray = JsonValue[]
/**
 Matches any valid JSON primitive value.
 @category Basic
 */
declare type JsonPrimitive = string | number | boolean | null
/**
 Matches any valid JSON value.
 @see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.
 @category Basic
 */
declare type JsonValue = JsonPrimitive | JsonObject | JsonArray
/**
 Matches a JSON object.
 This type can be useful to enforce some input to be JSON-compatible or as a super-type to b
 @category Basic
 */
declare type JsonObject = { [Key in string]?: JsonValue }
