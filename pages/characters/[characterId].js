import Image from "next/image";
import Header from "../../components/Header";

export default function Character({ character }) {
  return (
    <div>
      <Header />
      <h1>Character: {character.name}</h1>
      <Image src={character.photoUrl} alt="Avatar" width={300} height={300} />

      <div>
        {/* <h1>{character.name}</h1> */}
        <p>Affiliation: {character.affiliation}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const characterId = params.characterId.replace(/\-/g, "+");
  const results = await fetch(
    `https://last-airbender-api.fly.dev/api/v1/characters?name=${characterId}`
  ).then((res) => res.json());
  return {
    props: {
      character: results[0] || {},
    },
  };
}

export async function getStaticPaths() {
  const characters = await fetch(
    "https://last-airbender-api.fly.dev/api/v1/characters?perPage=500"
  ).then((res) => res.json());
  return {
    paths: characters
      .map((character) => {
        const characterId = character.name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/\'/, "")
          .replace(/\(.+\)/, "");
        return {
          params: {
            characterId,
          },
        };
      })
      .filter(({ params }) => !!params.characterId),
    fallback: false,
  };
}
