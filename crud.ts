class Personas{
    id:number=0;
    cedula:string='';
    nombre:string='';
    apellido:string='';
    edad:number=0
    ciudad:string='';

    persona:any[]=[];
}
interface metodos extends Personas{
    getAll():void;
    getById(dato:number):void;
    getByName(dato:string):void;
    create(nc:string,n:string,a:string,e:number,c:string):void;
    update(id:number,nc:string,n:string,a:string,e:number,c:string):void;
    eliminar(dato:number):void;
}
class Repositorio implements metodos{

    id:number=1;
    cedula:string='1077285544';
    nombre:string='Pedro';
    apellido:string='Perez';
    edad:number=35;
    ciudad:string='Bogota';

    persona:any[]=[
        {
            id:this.id,
            cedula:this.cedula,
            nombre:this.nombre,
            apellido:this.apellido,
            edad:this.edad,
            ciudad:this.ciudad
        }];

    getAll():void{
        alert(JSON.stringify(this.persona));
    }

    getById(dato:number):void{
        for(let i:number=0;i<this.persona.length;i++){
        if(this.persona[i].id==dato){
            alert(JSON.stringify(this.persona[i]));
        }}
        let indice=this.persona.findIndex(x=>x.id==dato)
        if(indice<0){
        alert('Id no existe')}
        
    }
    getByName(dato:string):void{
        let aux:number=0;
        for(let i:number=0;i<this.persona.length;i++){
        if(this.persona[i].nombre==dato){
            alert(JSON.stringify(this.persona[i]));
        }}
        let indice=this.persona.findIndex(x=>x.nombre==dato)
        if(indice<0){
            alert('Nombre no existe')
        }
    }
    create(nc:string,n:string,a:string,e:number,c:string):void{
        
        this.persona.push(
            {
                id:this.persona.length+1,
                cedula:nc,
                nombre:n,
                apellido:a,
                edad:e,
                ciudad:c
            })
            alert('Dato insertado correctamente')
    }
    update(id:number,nc:string,n:string,a:string,e:number,c:string):void{
        let aux:number=0;
        for(let i:number=0;i<this.persona.length;i++){
        if(this.persona[i].id==id){
            this.persona[i]=
            {
                id:id,
                cedula:nc,
                nombre:n,
                apellido:a,
                edad:e,
                ciudad:c
            }
            alert('Datos con id '+id+' actualizados correctamente')
        }}
        
        let indice=this.persona.findIndex(x=>x.id==id)
        if(indice<0){
            alert('Id no existe para actualizar')
        }
    }
    eliminar(dato:number):void{
        let indice=this.persona.findIndex(x=>x.id==dato)
        if(indice<0){
            alert('Id no existe')
        }
        for(let i:number=0;i<this.persona.length;i++){
        if(this.persona[i].id==dato){
            alert('Id '+this.persona[i].id+' eliminado correctamente')
            this.persona.splice(i,1); 
        }}
                
        }
    }
}

let r=new Repositorio();
let opc:number=0
do{
    opc=0;
    opc=Number(prompt('Ingrese una opcion: \n1. getAll\n2. getById\n3. getByName\n4. create\n5. update\n6. Eliminar\n 7. Salir'))
    switch(opc){
        case 1:
            r.getAll();
        break;
        case 2:
            r.id=Number(prompt('Ingrese id a consultar'))
            r.getById(r.id)          
        break;
        case 3:
        r.nombre=String(prompt('Ingrese nombre a buscar'))
            r.getByName(r.nombre);
        break;
        case 4:
            //r.id=Number(prompt('Ingrese id'))
            r.cedula=String(prompt('Ingrese cedula'))
            r.nombre=String(prompt('Ingrese nombre'))
            r.apellido=String(prompt('Ingrese apellido'))
            r.edad=Number(prompt('Ingrese edad'))
            r.ciudad=String(prompt('Ingrese ciudad'))
            r.create(r.cedula,r.nombre,r.apellido,r.edad,r.ciudad)
        break;
        case 5:
            r.id=Number(prompt('Ingrese id'))
            r.cedula=String(prompt('Ingrese cedula'))
            r.nombre=String(prompt('Ingrese nombre'))
            r.apellido=String(prompt('Ingrese apellido'))
            r.edad=Number(prompt('Ingrese edad'))
            r.ciudad=String(prompt('Ingrese ciudad'))
            r.update(r.id,r.cedula,r.nombre,r.apellido,r.edad,r.ciudad)
        break;
        case 6:
            r.id=Number(prompt('Ingrese id para eliminar'))
            r.eliminar(r.id)
        break;
        case 7:
            alert('Bye')
        break;
        default:
            alert('Ingrese una opcion valida')
        break;
    }

}while(opc!=7)


