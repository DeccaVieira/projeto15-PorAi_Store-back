import { packageSchema } from "../models/package.model.js"

export function packageValidation(req, res, next){
    const {from, to, daysamount ,firstday, lastday, image, price, description, stay} = req.body

    const travelPackage = {
        from,
        to,
        daysamount,
        firstday,
        lastday,
        image,
        price,
        description, 
        stay,
    };

    const { error } = packageSchema.validate(travelPackage, {abortEarly: false});

    if (error) {
        const errors = errors.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.travelPackage = travelPackage;

    next();
}