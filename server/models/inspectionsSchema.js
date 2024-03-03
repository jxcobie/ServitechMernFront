import mongoose from "mongoose";


const InespectionSchema = new mongoose.Schema({
    Numero: { type: String,  unique : true},
    Telephone: { type: Number, default: null },
    Nom: { type: String,  },
    Prenom: { type: String,  },
    Adresse: { type: String,  },
    Ville: { type: String,  },
    CodePostal: { type: String,  },
    Inespecteur: { type: String,  },
    DateInspection: { type: String,  },
    Emplacement: { type: String,  },
    Palan: { type: String,  },
    Model: { type: String,  },
    Chaine: { type: String,  },
    Capacite: { type: String,  },
    Serie: { type: String,  },
    Manufacturier: { type: String,  },
    inspectionItems: [{
        id: Number,
        itemName: String,
        description: String,
        imageUrl: String,
        chariot: Boolean,
        pont: Boolean,
        palan: Boolean
    }]
});


const inspection = mongoose.model('inspection', InespectionSchema);

export default inspection;