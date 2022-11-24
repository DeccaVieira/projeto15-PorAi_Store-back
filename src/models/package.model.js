import Joi from "joi";

export const packageSchema = Joi.object({
    from: Joi.string().required().valid("Rio de Janeiro - RJ","São Paulo - SP"),
    to: Joi.string().required(),
    daysamount: Joi.number().integer(),
    firstday: Joi.string().required(),
    lastday: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    stay: Joi.string().required(),
})


 /*    
    "from": "Rio de Janeiro - RJ",
    "to": "Jericoacoara - CE",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 5000,00",
    "description": "Pacote para 7 dias no paraíso cearense com passagens e estadia inclusas!",
    "stay" : "JeriCrystal - All Inclusive"

    "from": "Rio de Janeiro - RJ",
    "to": "Florianópolis - SC",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4500,00",
    "description": "Pacote para 6 dias na animada capital Catarinense com passagens e estadia inclusas!",
    "stay" : "FloripaCrystal"

    "from": "Rio de Janeiro - RJ",
    "to": "Jalapão - TO",
    "daysamount": 8,
    "firstday": "31/11/2022",
    "lastday": "9/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4800,00",
    "description": "Pacote para 8 dias neste incrível parque natural com passagens e estadia inclusas!",
    "stay" : "Jalapalace"

    "from": "Rio de Janeiro - RJ",
    "to": "Bonito - MS",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4300,00",
    "description": "Pacote para 7 dias neste incrível paraíso do Mato Grosso do Sul com passagens e estadia inclusas!",
    "stay" : "Bonito Palace"

    "from": "Rio de Janeiro - RJ",
    "to": "Lençóis Maranhenses - MA",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 5000,00",
    "description": "Pacote para 6 dias nos maravilhosos Lençóis Maranhenses com passagens e estadia inclusas!",
    "stay" : "Barreirinhas Crystal - All Inclusive"

    "from": "Rio de Janeiro - RJ",
    "to": "Trancoso - BA",
    "daysamount": 7,
    "firstday": "31/11/2022",
    "lastday": "8/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4000,00",
    "description": "Pacote para 7 dias para este paradisíaco destino na Bahia com passagens e estadia inclusas!",
    "stay" : "Trancoso Premium - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Jericoacoara - CE",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 5000,00",
    "description": "Pacote para 7 dias no paraíso cearense com passagens e estadia inclusas!",
    "stay" : "JeriCrystal - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Florianópolis - SC",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4500,00",
    "description": "Pacote para 6 dias na animada capital Catarinense com passagens e estadia inclusas!",
    "stay" : "FloripaCrystal"

    "from": "São Paulo - SP",
    "to": "Jalapão - TO",
    "daysamount": 8,
    "firstday": "31/11/2022",
    "lastday": "9/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4800,00",
    "description": "Pacote para 8 dias neste incrível parque natural com passagens e estadia inclusas!",
    "stay" : "Jalapalace"

    "from": "São Paulo - SP",
    "to": "Bonito - MS",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4300,00",
    "description": "Pacote para 7 dias neste incrível paraíso do Mato Grosso do Sul com passagens e estadia inclusas!",
    "stay" : "Bonito Palace"

    "from": "São Paulo - SP",
    "to": "Lençóis Maranhenses - MA",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 5000,00",
    "description": "Pacote para 6 dias nos maravilhosos Lençóis Maranhenses com passagens e estadia inclusas!",
    "stay" : "Barreirinhas Crystal - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Trancoso - BA",
    "daysamount": 7,
    "firstday": "31/11/2022",
    "lastday": "8/12/2022",
    "image": Joi.string().required(),
    "price": "R$ 4000,00",
    "description": "Pacote para 7 dias para este paradisíaco destino na Bahia com passagens e estadia inclusas!",
    "stay" : "Trancoso Premium - All Inclusive"
    
    */
