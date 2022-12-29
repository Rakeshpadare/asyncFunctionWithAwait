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
    
        let ticket=await promiseTObuyTicket;
        console.log('wife: i have the tickets')
        console.log('husband: we should go in')
        console.log('wife: no im hungry, i want popcorn')

        // let popocorn promise do
        let popcorn= await getPopcorn;
        console.log('husband: i got some popcorn');
        console.log('husband: we should go in');
        console.log('wife: no i need butter on popcorn');

        let butter= await getButter;
        console.log(`husband: i got some ${butter} on popcorn`);
        console.log('husband: anything else');
        console.log('wife: yes I want a coldrink also');

        let coldDrink= await getColdDrink;
        console.log(`husband: i got some ${coldDrink} for you`);
        console.log('wife: love you darling ');

        return ticket;
        
    }

    preMovie().then((m)=> console.log(`person 3: shows ${m}`));