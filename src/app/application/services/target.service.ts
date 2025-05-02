import { inject, Injectable } from "@angular/core";
import { TargetRepository } from "../../domain/repositories/target-repository";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({providedIn: 'root'})
export class TargetService{
  private targetRepository  = inject(TargetRepository);

  targets = toSignal(this.targetRepository.getTargets(), {initialValue: []});

  getTargets(){
    this.targetRepository.getTargets();
  }
}
