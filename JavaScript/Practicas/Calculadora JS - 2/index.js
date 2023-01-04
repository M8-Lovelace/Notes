function suma(){
  let a = document.f1.a.value;
  let b = document.f1.b.value;
  let r = document.f1.c.value;
r=parseFloat(a)+parseFloat(b);
document.f1.c.value=r
}

function restar(){
  let a = document.f1.a.value;
  let b = document.f1.b.value;
  let r = document.f1.c.value;
r=parseFloat(a)-parseFloat(b);
document.f1.c.value=r
}

function multiplicacion(){
  let a = document.f1.a.value;
  let b = document.f1.b.value;
  let r = document.f1.c.value;
  r=parseFloat(a)*parseFloat(b);
  document.f1.c.value=r
}

function division(){
  let a = document.f1.a.value;
  let b = document.f1.b.value;
  let r = document.f1.c.value;
r=parseFloat(a)/parseFloat(b);
document.f1.c.value=r
}

function porcentaje(){
  let a = document.f1.a.value;
  let b = document.f1.b.value;
  let r = document.f1.c.value;
r=parseFloat(a)*(parseFloat(b)/100);
document.f1.c.value=r
}

function reset(){
  location.reload()
}