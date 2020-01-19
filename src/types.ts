import { ComponentType } from "react";
import { Endomorphism } from "fp-ts/lib/function";

export type Hoc<P> = Endomorphism<ComponentType<P>>;
