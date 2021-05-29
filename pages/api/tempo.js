import Link from 'next/link';

function tempo (request, response){

const dynamicDate = new Date(); //Guardar tempo atual
response.json({
    date: dynamicDate.toGMTString()
     
});

}

export default tempo;