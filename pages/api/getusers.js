// Note: This is a sample implementation of getusers

export default function handler(req, res) {
  if(undefined == req.body) {
    res.status(400).json({"Error": "Wrong Query"})
    return 
  }

  const user_ids = req.body.user_ids
  if(undefined == user_ids) {
    res.status(400).json({"Error": "Wrong Query for User ID"})
    return 
  }

  let users = [
    {
      "id": 10,
      "name": "Hugh Jazz",
      "gender": "male",
      "age": 20,
      "allergens": ["wheat", "peanut", "milk"],
      "medical_history": [],
      "no": [],
      "alternative": ["fruits", "vegetables", "whole grains"]
    },
      {
        "id": 1,
        "name": "Miranda Walton",
        "gender": "female",
        "age": 63,
        "allergens": ["peanut", "gluten"],
        "medical_history": ["diabetes", "arthritis"],
        "no": ["sweets", "whole grains"],
        "alternative": ["fruits", "vegetables", "fish and seafood"]
      },
  
      {
        "id": 2,
        "name": "Pearl Schneider",
        "gender": "female",
        "age": 48,
        "allergens": ["peanut"],
        "medical_history": ["high chlosteral"],
        "no": ["eggs", "diary", "nuts and seeds", "meat and poultry"],
        "alternative": ["fruits", "vegetables", "whole grains", "legumes and soy"]
      },
  
      {
        "id": 3,
        "name": "Lee Poole",
        "gender": "male",
        "age": 56,
        "allergens": ["soybeans"],
        "medical_history": ["hypertension"],
        "no": ["sweets", "fish and seafood", "legumes and soy"],
        "alternative": ["fruits", "vegetables", "whole grains"]
      },
  
      {
        "id": 4,
        "name": "Darrel Black",
        "gender": "male",
        "age": 50,
        "allergens": [],
        "medical_history": ["chronic kidney disease"],
        "no": ["sweets", "whole grains", "dairy", "fish and seafood"],
        "alternative": ["fruits", "vegetables", "nuts and seeds"]
      },
  
      {
        "id": 5,
        "name": "Ted Peterson",
        "gender": "male",
        "age": 68,
        "allergens": ["diary"],
        "medical_history": ["cardiovascular disease"],
        "no": ["sweets", "meat and poultry", "fish and seafood"],
        "alternative": [
          "fruits",
          "vegetables",
          "nuts and seeds",
          "legumes and soy"
        ]
      },
  
      {
        "id": 6,
        "name": "Jean Guzman",
        "gender": "female",
        "age": 23,
        "allergens": ["soybeans"],
        "medical_history": [],
        "no": ["soybeans"],
        "alternative": []
      },
  
      {
        "id": 7,
        "name": "Nancy Blair",
        "gender": "female",
        "age": 19,
        "allergens": [],
        "medical_history": [],
        "no": [],
        "alternative": []
      },
      {
        "id": 8,
        "name": "Connie Reynolds",
        "gender": "male",
        "age": 27,
        "allergens": ["shellfish", "wheat"],
        "medical_history": [],
        "no": ["shellfish", "wheat"],
        "alternative": [
          "meat and poultry",
          "vegetables",
          "dairy",
          "nuts and seeds"
        ]
      },
  
      {
        "id": 9,
        "name": "Joanne Potter",
        "gender": "female",
        "age": 38,
        "allergens": [],
        "medical_history": ["hypertension"],
        "no": ["sweets", "fish and seafood", "legumes and soy"],
        "alternative": ["fruits", "vegetables", "whole grains"]
      }
    ]
  
  res.status(200).json(user_ids.map(id => users[id % 10]))
}
