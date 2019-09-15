import { AngularFirestore } from "@angular/fire/firestore";
import { Comentarios } from 'src/models/comentarios.model';

export class ComentariosService {
    constructor(private firestore: AngularFirestore){}

    public verComentarios() {
        return this.firestore.collection("comentarios")
            .snapshotChanges();
    }

    public crearComentarioUTP(comentario: Comentarios){
        return this.firestore.collection('utp')
        .add(comentario);
    }
    public crearComentarioLATINA(comentario: Comentarios){
        return this.firestore.collection('latina')
        .add(comentario);
    }
    public crearComentarioUSMA(comentario: Comentarios){
        return this.firestore.collection('usma')
        .add(comentario);
    }
    public crearComentarioNACIONAL(comentario: Comentarios){
        return this.firestore.collection('nacional')
        .add(comentario);
    }
}