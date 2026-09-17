export async function getPosts(){
     const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")//quando cehgar no nosso app ele liste 10 coisas
     if(!response.ok){ //caso a resposta seja não
          throw new Error("Erro ao conectar ao servidor.") 
     }

     const data = await response.json(); //do contrario aparece
     return data;
}