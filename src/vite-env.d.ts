/// <reference types="vite/client" />

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
