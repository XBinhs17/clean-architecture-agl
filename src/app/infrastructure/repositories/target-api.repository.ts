import { Injectable } from "@angular/core";
import { TargetRepository } from "../../domain/repositories/target-repository";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Target } from "../../domain/models/target.model";


@Injectable({providedIn: 'root'})

export class TargetApiRepository implements TargetRepository{
  private apiUrl = 'assets/data/data-target.json';
  
  constructor(private http: HttpClient){}

  getTargets(): Observable<Target[]>{
    return this.http.get<Target[]>(this.apiUrl);
  }

}
