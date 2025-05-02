import { Observable } from "rxjs";
import { Target } from "../models/target.model";

export abstract class TargetRepository{
  abstract getTargets(): Observable<Target[]>;
}
