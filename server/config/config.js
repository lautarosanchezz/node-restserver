
// Port

process.env.PORT = process.env.PORT || 3000;




//  ENTORNO  //
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//  BASE DE DATOS  //

let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://lauta:LflMZfK0pX57Vunf@cluster0.jhcgu.mongodb.net/cafe';
}

process.env.URLDB = urlDB;