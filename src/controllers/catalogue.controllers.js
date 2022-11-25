import { catalogueCollection } from "../database/db.js";

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

export async function fetchPackages(req,res){
    try{
        const catalogue = await catalogueCollection
        .find()
        .toArray();

        res.send(catalogue);
    } catch (err){
        console.log(err);
        res.sendStatus(500); 
    }
}