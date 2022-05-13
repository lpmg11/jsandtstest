class lista{
  constructor(elementos,subscribers){
    this.elementos = elementos;
    this.subscribers = subscribers;
    this.notificar();
  }
  agregarSubscriber(subscriber){
    this.subscribers.push(subscriber);
    this.notificar(subscriber);
  }
  agregarElemento(elemento){
    this.elementos.push(elemento);
    this.notificar(null,elemento);
  }
  notificar(subscriber=null,elemento=null){
    if (subscriber!=null){
      subscriber.update(this.elementos,null);
    }
    this.subscribers.forEach(subscriber => {
      subscriber.update(this.elementos,elemento);
    });
  }
}

class subscriber{
  constructor(lista){
    this.lista = lista;
  }
  update(elementos,elemento){
    this.elementos = elementos;
    this.mostrarLista();

    if (elemento!==null){
      alert('se agrego un elemento ' + elemento);
    }
  }
  mostrarLista(){
    document.getElementById(this.lista).innerHTML = this.crearLista();
  }
  crearLista(){
    let lista = '';
    this.elementos.forEach(elemento => {
      lista += `<li>${elemento}</li>`;
    });
    return lista;
  }
}

const sub = new subscriber('list1');
const sub2 = new subscriber('list2');
const sub3 = new subscriber('list3');
const sub4 = new subscriber('list4');
const sub5 = new subscriber('list5');
const sub6 = new subscriber('list6');

const list = new lista(['uno', 'dos', 'tres'],[sub,sub3]);
list.agregarSubscriber(sub2);
list.agregarSubscriber(sub4);
list.agregarSubscriber(sub5);
list.agregarSubscriber(sub6);


button = document.getElementById('button');


button.addEventListener('click', () => {
  const element = document.getElementById('input').value
  if (element === '') {
    return alert('Ingrese un elemento');
  }
  list.agregarElemento(element);
  document.getElementById('input').value = '';
});
