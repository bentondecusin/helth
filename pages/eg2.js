import Head from 'next/head'
import Form from './form'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

const registerUser = async (event) => {
  event.preventDefault();

  const uids = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // result.user => 'Ada Lovelace'
  const new_arg = {user_ids : uids}
  const a_res = await fetch("/api/advice", {
      body: JSON.stringify({
        user_ids: uids,
        products : [
            {
              "id": 1,
              "name": "perrier lemon flavored carbonated mineral water",
              "food type": "soda drink",
              "allergens": ["sodium benzoate/benzoic acid"],
              "nutrients": ["sodium", "carbohydrates"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 2,
              "name": "stacy's pita chips",
              "food type": "snacks",
              "allergens": ["gluten", "wheat"],
              "nutrients": ["carbohydrates", "protein"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 3,
              "name": "lay's classic chips",
              "food type": "snacks",
              "allergens": ["wheat", "gluten", "milk", "sulphites"],
              "nutrients": ["Vitamin B6", "Magnesium"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 4,
              "name": "cornell dairy reduced fat milk",
              "food type": "dairy product",
              "allergens": ["casein", "whey"],
              "nutrients": [
                "calcium",
                "riboflavin",
                "phosphorous",
                "vitamins A and B12",
                "potassium",
                "magnesium",
                "zinc",
                "iodine"
              ],
              "age group": ["infants", "teenagers", "adults", "elders"]
            },
        
            {
              "id": 5,
              "name:": "Entenmann's Glazed Donut Pop'ems",
              "food type": "snacks",
              "allergens": ["wheat", "gluten"],
              "nutrients": ["sodium", "cholesterol"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 6,
              "name:": "Hostess Snoballs",
              "food type": "snacks",
              "allergens": ["monosaccharide", "gluten"],
              "nutrients": ["potassium", "carbohydrate"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 7,
              "name:": "Oreos",
              "food type": "snacks",
              "allergens": ["soy"],
              "nutrients": ["sodium", "carbohydrate"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 8,
              "name:": "Doritos",
              "food type": "snacks",
              "allergens": ["soy"],
              "nutrients": ["cholesterol", "carbohydrate"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 9,
              "name:": "dove chocolate bar",
              "food type": "snacks",
              "allergens": ["milk", "soy"],
              "nutrients": ["carboydrates"],
              "age group": ["teenagers", "adults"]
            },
        
            {
              "id": 10,
              "name:": "Kool aid",
              "food type": "flavored drink",
              "allergens": [],
              "nutrients": ["sodium", "vitamin c"],
              "age group": ["teenagers", "adults"]
            },
        
            {
                "id": 11,
                "name:": "Protos",
                "food type": "Chips",
                "allergens": ["milk"],
                "nutrients": ["sodium", "vitamin c"],
                "age group": ["teenagers", "adults"]
              }
          ]
      
        
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
  });
  const warning = await a_res.json();

  let msg = "Warning!"
  for (const [key, value] of Object.entries(warning)) {
    msg = msg + key + " is allergic to " + value + "\n"
  }
  console.log(msg)
  alert(msg)
};

export default function Example() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example 1</title>
        <meta name="description" content="Helth by Team Helth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      Now we use the following dataset (10 customers and 11 products)<a className={styles.card} href="/healthcare/customer.json"> customers</a>  <a className={styles.card} href="/retail/sellers.json"> retailers</a> 
       
      <a onClick={registerUser} className={styles.card} href="/retail/sellers.json"> <p>Click to See Warnings</p></a> 
      </main>
      
      <footer className={styles.footer}>
        <a
        >
          Made with ❤️ in NYC
        </a>
      </footer>
    </div>
  )
}
