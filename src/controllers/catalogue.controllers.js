export async function createPackage(req,res){
    const travelPackage = res.locals.travelPackage

    try{
        await catalogueCollection.insertOne(travelPackage);
        res.sendStatus(201);
    }catch (err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function fetchPackages(req,res){}