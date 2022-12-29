# asyncFunctionWithAwait
 // promise all

    console.log("person1 : Shows Ticket");
    console.log("person2 : Shows Ticket");

    const preMovie= async()=>{
        const promiseTObuyTicket= new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve('ticket');
                
            },2000);
        });
        
        const getPopcorn= new Promise((resolve,reject)=> resolve(`popcorn`))

        const getButter= new Promise((resolve,reject)=> resolve(`butter`))

        const getColdDrink= new Promise((resolve,reject)=> resolve(`coldDrink`))

        const getTofee= new Promise((resolve,reject)=> resolve(`tofee`))

        let ticket= await promiseTObuyTicket;
        
        let[popcorn,butter,coldDrink,tofee] = await Promise.all([getPopcorn,getButter,getColdDrink,getTofee]);

        console.log(`${popcorn},${butter},${coldDrink},${tofee}`)

        return ticket;
        
    }
    preMovie().then((m)=> console.log(`person 3: shows ${m}`))
