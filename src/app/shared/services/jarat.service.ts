import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Jarat} from "../models/Jarat";

@Injectable({
  providedIn: 'root'
})
export class JaratService {

  collectionName = 'Jaratok';

  constructor(private afs: AngularFirestore) { }

  loadJarat(): Observable<Array<Jarat>> {
    return this.afs.collection<Jarat>(this.collectionName).valueChanges();
  }

  create(jarat: Jarat) {
    return this.afs.collection<Jarat>(this.collectionName).doc(jarat.id).set(jarat);
  }

  update(jarat: Jarat) {
    return this.afs.collection<Jarat>(this.collectionName).doc(jarat.id).set(jarat);
  }

  delete(id: string) {
    return this.afs.collection<Jarat>(this.collectionName).doc(id).delete();
  }
}
