// From Next.js template



export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    const u_res = await fetch("/api/getusers", {
      body: JSON.stringify({
        user_ids: event.target.names.value.split(","),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await u_res.json();
    const uids = result.map(user => user.id);
    // result.user => 'Ada Lovelace'
    const new_arg = {user_ids : uids}
    const a_res = await fetch("/api/advice", {
        body: JSON.stringify({
          user_ids: uids,
          products: [{
            "id": 11,
            "name:": "Protos",
            "food type": "Chips",
            "allergens": ["milk"],
            "nutrients": ["sodium", "vitamin c"],
            "age group": ["teenagers", "adults"]
          }]
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
    });
    const warning = await a_res.json();
    console.log(    result[0]
        );

    if (warning["Hugh Jazz"] != undefined)
        alert("Warning " + result[0].name + " is allergic to "+ warning["Hugh Jazz"]);

    else alert("Clean for " + result[0].name);
  };

  return (
    <form onSubmit={registerUser}>
      <input id="names" name="names" type="text" autoComplete="name" required />
      <button type="submit">Swipe Card</button>
    </form>
  );
}
