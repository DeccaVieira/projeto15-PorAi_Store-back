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
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/12/0c/caption.jpg?w=1200&h=-1&s=1",
    "price": "R$ 5000,00",
    "description": "Pacote para 7 dias no paraíso cearense com passagens e estadia inclusas!",
    "stay" : "JeriCrystal - All Inclusive"

    "from": "Rio de Janeiro - RJ",
    "to": "Florianópolis - SC",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": "https://www.angajurereaparthotel.com.br/wp-content/uploads/2018/07/pontes-florianopolis-sc.jpg",
    "price": "R$ 4500,00",
    "description": "Pacote para 6 dias na animada capital Catarinense com passagens e estadia inclusas!",
    "stay" : "FloripaCrystal"

    "from": "Rio de Janeiro - RJ",
    "to": "Jalapão - TO",
    "daysamount": 8,
    "firstday": "31/11/2022",
    "lastday": "9/12/2022",
    "image": "https://viajecomnorma.com.br/wp-content/uploads/2021/03/Jalapao-Fervedouro-Bela-Vista-tiny.jpg",
    "price": "R$ 4800,00",
    "description": "Pacote para 8 dias neste incrível parque natural com passagens e estadia inclusas!",
    "stay" : "Jalapalace"

    "from": "Rio de Janeiro - RJ",
    "to": "Bonito - MS",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": "http://s2.glbimg.com/R_FXsP-CoT9Dw3INb1WvEq3Erpk=/620x465/s.glbimg.com/jo/g1/f/original/2015/07/03/gruta_lago_azul_bonito1.jpg",
    "price": "R$ 4300,00",
    "description": "Pacote para 7 dias neste incrível paraíso do Mato Grosso do Sul com passagens e estadia inclusas!",
    "stay" : "Bonito Palace"

    "from": "Rio de Janeiro - RJ",
    "to": "Lençóis Maranhenses - MA",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg",
    "price": "R$ 5000,00",
    "description": "Pacote para 6 dias nos maravilhosos Lençóis Maranhenses com passagens e estadia inclusas!",
    "stay" : "Barreirinhas Crystal - All Inclusive"

    "from": "Rio de Janeiro - RJ",
    "to": "Trancoso - BA",
    "daysamount": 7,
    "firstday": "31/11/2022",
    "lastday": "8/12/2022",
    "image": "https://a.cdn-hotels.com/gdcs/production9/d1392/20bf9109-196c-482e-ac7a-07d4c1761c5c.jpg",
    "price": "R$ 4000,00",
    "description": "Pacote para 7 dias para este paradisíaco destino na Bahia com passagens e estadia inclusas!",
    "stay" : "Trancoso Premium - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Jericoacoara - CE",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/12/0c/caption.jpg?w=1200&h=-1&s=1",
    "price": "R$ 4900,00",
    "description": "Pacote para 7 dias no paraíso cearense com passagens e estadia inclusas!",
    "stay" : "JeriCrystal - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Florianópolis - SC",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": "https://www.angajurereaparthotel.com.br/wp-content/uploads/2018/07/pontes-florianopolis-sc.jpg",
    "price": "R$ 4700,00",
    "description": "Pacote para 6 dias na animada capital Catarinense com passagens e estadia inclusas!",
    "stay" : "FloripaCrystal"

    "from": "São Paulo - SP",
    "to": "Jalapão - TO",
    "daysamount": 8,
    "firstday": "31/11/2022",
    "lastday": "9/12/2022",
    "image": "https://viajecomnorma.com.br/wp-content/uploads/2021/03/Jalapao-Fervedouro-Bela-Vista-tiny.jpg",
    "price": "R$ 4800,00",
    "description": "Pacote para 8 dias neste incrível parque natural com passagens e estadia inclusas!",
    "stay" : "Jalapalace"

    "from": "São Paulo - SP",
    "to": "Bonito - MS",
    "daysamount": 7,
    "firstday": "30/11/2022",
    "lastday": "7/12/2022",
    "image": "http://s2.glbimg.com/R_FXsP-CoT9Dw3INb1WvEq3Erpk=/620x465/s.glbimg.com/jo/g1/f/original/2015/07/03/gruta_lago_azul_bonito1.jpg",
    "price": "R$ 4150,00",
    "description": "Pacote para 7 dias neste incrível paraíso do Mato Grosso do Sul com passagens e estadia inclusas!",
    "stay" : "Bonito Palace"

    "from": "São Paulo - SP",
    "to": "Lençóis Maranhenses - MA",
    "daysamount": 6,
    "firstday": "31/11/2022",
    "lastday": "7/12/2022",
    "image": "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg",
    "price": "R$ 5100,00",
    "description": "Pacote para 6 dias nos maravilhosos Lençóis Maranhenses com passagens e estadia inclusas!",
    "stay" : "Barreirinhas Crystal - All Inclusive"

    "from": "São Paulo - SP",
    "to": "Trancoso - BA",
    "daysamount": 7,
    "firstday": "31/11/2022",
    "lastday": "8/12/2022",
    "image": "https://a.cdn-hotels.com/gdcs/production9/d1392/20bf9109-196c-482e-ac7a-07d4c1761c5c.jpg",
    "price": "R$ 4000,00",
    "description": "Pacote para 7 dias para este paradisíaco destino na Bahia com passagens e estadia inclusas!",
    "stay" : "Trancoso Premium - All Inclusive"
    
    */
